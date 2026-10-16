// Focused vehicle and browser-permission evidence. Vehicle/velocity positioning
// is a fixture; enter, throttle, steer and handbrake are public inputs.
// The controller-only permission probe deliberately avoids page.evaluate():
// Playwright's evaluation helper sets CDP userGesture:true, which can mask policy.
import assert from 'node:assert/strict';
import {mkdirSync,writeFileSync,copyFileSync,readFileSync,existsSync} from 'node:fs';
import {launchGame,browserToolkit,WEBGPU_ARGS} from './browser.mjs';
const out='/tmp/signal-debt-remaining-gates';mkdirSync(out,{recursive:true});
const onlyPermissions=process.argv.includes('--permissions-only');
const report=onlyPermissions&&existsSync('docs/remaining-gates.json')?JSON.parse(readFileSync('docs/remaining-gates.json','utf8')):{scope:'Focused fixtures and genuine menu inputs, not campaign completion.',checks:{},errors:[],screenshots:[]};
const save=()=>writeFileSync('docs/remaining-gates.json',JSON.stringify(report,null,2)+'\n');
async function permissionState(page){return page.evaluate(()=>({fullscreen:!!document.fullscreenElement,fullscreenEnabled:document.fullscreenEnabled,activation:{active:navigator.userActivation.isActive,ever:navigator.userActivation.hasBeenActive},audio:{unlocked:__PIXEL_ENGINE__.audio.unlocked,state:__PIXEL_ENGINE__.audio.context?.state,time:__PIXEL_ENGINE__.audio.context?.currentTime},notice:__PIXEL_ENGINE__.game.ui.notice.textContent}));}

if(!onlyPermissions){
const vehicle=await launchGame('http://127.0.0.1:8080/',{mode:'keyboard',out});
try{
 const {page,driver}=vehicle;await driver.choose('new');await driver.choose('begin');await driver.tap('KeyF');
 await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game,r=g.rides.find(r=>r.id==='freighter');r.reset([-65,1.2,0],Math.PI/2);g.player.teleport([-65,.2,3]);});
 await driver.step(35);await driver.tap('KeyF');assert.equal((await vehicle.state()).ride?.id,'freighter');
 const before=await vehicle.state();await driver.keyboard(['KeyW']);await driver.step(180);await driver.release();
 const after=await vehicle.state();assert(after.ride.speed>6);assert(Math.hypot(after.position.x-before.position.x,after.position.z-before.position.z)>15);
 report.checks.van={before:{at:before.position,speed:before.ride.speed},after:{at:after.position,speed:after.ride.speed,integrity:after.ride.integrity},publicInputEntry:true};
 await vehicle.shot('van-driving');report.screenshots.push('van-driving.png');
 await page.evaluate(()=>{const e=__PIXEL_ENGINE__,r=e.game.ride;window.__dustBursts=[];const burst=e.particles.burst.bind(e.particles);e.particles.burst=(preset,at,options)=>{const count=burst(preset,at,options);if(preset==='dust')window.__dustBursts.push({count,at:[at.x,at.y,at.z]});return count;};r.body.setLinvel({x:Math.sin(r.yaw)*12,y:0,z:Math.cos(r.yaw)*12},true);});
 const yawBefore=(await vehicle.state()).ride.yaw;await driver.keyboard(['KeyW','KeyD','Space']);await driver.step(15);
 await vehicle.shot('handbrake-dust');
 const dust=await page.evaluate(()=>({bursts:window.__dustBursts,alive:__PIXEL_ENGINE__.particles.alive,yaw:__PIXEL_ENGINE__.game.ride.yaw,speed:__PIXEL_ENGINE__.game.ride.speed,frame:__PIXEL_ENGINE__.frame}));
 await driver.release();assert(dust.bursts.some(b=>b.count>0));assert(dust.alive>0);assert(Math.abs(dust.yaw-yawBefore)>.05);report.checks.handbrake={yawBefore,...dust};report.screenshots.push('handbrake-dust.png');
 report.errors.push(...vehicle.errors);report.vehicleSourceHashes=vehicle.sourceHashes;
}finally{await vehicle.close();save();}
}

for(const mode of onlyPermissions?[]:['keyboard','touch']){
 const s=await launchGame('http://127.0.0.1:8080/',{mode,out});
 try{
  const states=[];
  for(const menu of ['title','options']){
   if(menu==='options')await s.driver.choose('options');
   await s.driver.choose('fullscreen');await s.page.waitForFunction(()=>!!document.fullscreenElement,null,{timeout:5000});states.push({menu,action:'enter',...await permissionState(s.page)});
   await s.driver.choose('fullscreen');await s.page.waitForFunction(()=>!document.fullscreenElement,null,{timeout:5000});states.push({menu,action:'exit',...await permissionState(s.page)});
  }
  assert(states.every(x=>x.fullscreen===(x.action==='enter')));report.checks[mode+'Fullscreen']=states;
  report.errors.push(...s.errors);
 }finally{await s.close();save();}
}

// This fresh context must have no trusted keyboard/pointer activation at all
// until the explicit positive control after controller-only observations.
{
 const {chromium}=browserToolkit();const browser=await chromium.launch({headless:true,args:WEBGPU_ARGS});
 try{
  report.permissionBrowser=await browser.version();
  const context=await browser.newContext({viewport:{width:1280,height:720}}),page=await context.newPage(),cdp=await context.newCDPSession(page);
  await page.addInitScript(()=>{window.__strictPad={id:'Standard controller permission probe',index:0,connected:true,mapping:'standard',timestamp:0,axes:[0,0,0,0],buttons:Array.from({length:18},()=>({pressed:false,touched:false,value:0}))};Object.defineProperty(navigator,'getGamepads',{value:()=>[window.__strictPad],configurable:true});});
  const raw=async expression=>{const r=await cdp.send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true,userGesture:false});if(r.exceptionDetails)throw Error(r.exceptionDetails.text);return r.result.value;};
  await page.goto('http://127.0.0.1:8080/');
  for(let i=0;i<1000;i++){if(await raw('!!window.__PIXEL_ENGINE__?.game?.ready'))break;await new Promise(r=>setTimeout(r,50));}
  assert(await raw('!!window.__PIXEL_ENGINE__?.game?.ready'));await raw('__PIXEL_ENGINE__.manual=true');
  const inspect=()=>raw(`(()=>({screen:__PIXEL_ENGINE__.game.ui.screen,fullscreen:!!document.fullscreenElement,activation:{active:navigator.userActivation.isActive,ever:navigator.userActivation.hasBeenActive},audio:{unlocked:__PIXEL_ENGINE__.audio.unlocked,state:__PIXEL_ENGINE__.audio.context?.state,time:__PIXEL_ENGINE__.audio.context?.currentTime},notice:__PIXEL_ENGINE__.game.ui.notice.textContent,errors:__PIXEL_ENGINE__.errors}))()`);
  const press=async index=>{await raw(`(()=>{const p=window.__strictPad;p.timestamp++;p.buttons[${index}]={pressed:true,touched:true,value:1};__PIXEL_ENGINE__.step(3);p.buttons[${index}]={pressed:false,touched:false,value:0};__PIXEL_ENGINE__.step(3)})()`);};
  const choose=async action=>{for(let n=0;n<30;n++){const item=await raw(`(()=>{const u=__PIXEL_ENGINE__.game.ui;return {selected:u.selected,index:u.controls.findIndex(c=>c.action===${JSON.stringify(action)})}})()`);assert(item.index>=0);if(item.selected===item.index){await press(0);return;}await press(13);}throw Error('Strict pad could not find menu action');};
  const initial=await inspect();assert.equal(initial.activation.ever,false);
  await choose('fullscreen');await new Promise(r=>setTimeout(r,250));const fullscreen=await inspect();
  await choose('new');await choose('begin');await press(3);await new Promise(r=>setTimeout(r,600));const after=await inspect();
  assert.equal(after.activation.ever,false,'Controller-only evidence was tainted by trusted activation.');
  assert.equal(await raw('__PIXEL_ENGINE__.game.story.stage'),1,'Controller input must still complete the opening interaction.');
  report.checks.freshControllerOnly={method:'Fresh context; raw CDP Runtime.evaluate userGesture:false for all observations and pad injection; no page.evaluate or keyboard/pointer before final observation.',initial,fullscreen,after,fullscreenAllowed:fullscreen.fullscreen,audioRunning:after.audio.state==='running',physicalControllerVerified:false};
  const shot=await cdp.send('Page.captureScreenshot',{format:'png'});writeFileSync(out+'/controller-permissions.png',Buffer.from(shot.data,'base64'));report.screenshots.push('controller-permissions.png');
  // Genuine keyboard event is an explicitly separate browser-policy control.
  await page.keyboard.press('a');await raw('__PIXEL_ENGINE__.step(3)');await new Promise(r=>setTimeout(r,600));report.checks.freshControllerOnly.afterKeyboardPositiveControl=await inspect();
  assert(report.checks.freshControllerOnly.afterKeyboardPositiveControl.activation.ever&&report.checks.freshControllerOnly.afterKeyboardPositiveControl.audio.state==='running','A genuine letter-key gesture must unlock audio.');
 }finally{await browser.close();save();}
}
report.screenshots=[...new Set(report.screenshots)];
for(const name of report.screenshots)copyFileSync(out+'/'+name,'docs/remaining-'+name);
report.finishedAt=new Date().toISOString();save();console.log(JSON.stringify(report.checks,null,2));
