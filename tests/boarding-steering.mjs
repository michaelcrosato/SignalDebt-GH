import assert from 'node:assert/strict';
import {writeFileSync,mkdirSync} from 'node:fs';
import {launchGame,browserToolkit,WEBGPU_ARGS} from './browser.mjs';
import {makeNavigator} from './campaign-driver.mjs';
const out='/tmp/signal-debt-boarding-steering';mkdirSync(out,{recursive:true});const report={steering:[],boarding:[]};
for(const mode of ['keyboard','gamepad','touch']){
 const s=await launchGame('http://127.0.0.1:8080/',{mode,out});
 try{
  const n=makeNavigator(s);await s.driver.choose('new');await s.driver.choose('begin');await s.driver.tap('KeyF');await n.footTo({x:-9,z:0},2.8);await s.driver.tap('KeyF');
  const before=await s.page.evaluate(()=>({yaw:__PIXEL_ENGINE__.game.ride.yaw,speed:__PIXEL_ENGINE__.game.ride.speed}));
  await n.vehicleInput(1,1);await s.driver.step(1);
  const first=await s.page.evaluate(()=>({steering:__PIXEL_ENGINE__.game.ride.vehicle.steering,axis:__PIXEL_ENGINE__.input.moveAxis()}));
  await s.driver.step(59);
  const after=await s.state();report.steering.push({mode,before,first,after:{yaw:after.ride.yaw,position:after.position},errors:s.errors});
  assert(first.steering>.07,'Full throttle must not normalize away full steering');assert.equal(s.errors.length,0);
 }finally{await s.close();}
}
const expected=report.steering[0].first.steering;
for(const row of report.steering)assert(Math.abs(row.first.steering-expected)<1e-5,'All input modes need equal initial steering under full throttle');
const {chromium}=browserToolkit(),browser=await chromium.launch({headless:true,args:WEBGPU_ARGS});
try{
 for(const delay of [0,120,360,600]){
  const page=await browser.newPage({viewport:{width:960,height:720}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/boarding-fixture.html',route=>route.fulfill({contentType:'text/html',body:`<!doctype html><html><head><link rel="icon" href="data:,"></head><body><div id="app"></div><script type="module">
   import {Engine,THREE} from '/pixel-engine.js';import {buildWorld} from '/world.js';import {createActor} from '/actors.js';
   class Boarding {name='Lift boarding fixture';async setup(ctx){this.world=await buildWorld(ctx);this.actor=await createActor(ctx,{at:[195,.03,-181]});}fixedUpdate(ctx,dt){const a=ctx.input.moveAxis();this.actor.move(dt,{x:a.x,z:-a.y,sprint:true});}update(ctx,dt){this.actor.update(dt);this.world.update(dt,ctx.time);}cameraTarget(){return this.actor?.model.position??new THREE.Vector3(195,0,-181);}}
   await Engine.start(new Boarding(),{container:document.getElementById('app'),aspect:'fill',camera:{preset:'iso',zoom:1.3},settings:{button:false},quality:'low'});
   </script></body></html>`}));
  await page.goto('http://127.0.0.1:8080/boarding-fixture.html');await page.waitForFunction(()=>window.__PIXEL_ENGINE__?.state().ready,null,{timeout:90000});
  await page.evaluate(n=>{__PIXEL_ENGINE__.manual=true;__PIXEL_ENGINE__.step(n);},delay);
  let bottom;
  for(let i=0;i<180;i++){bottom=await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game;return {at:g.world.lift.body.translation(),v:g.world.lift.body.linvel(),feet:g.actor.position().toArray()};});if(bottom.at.y<.08&&bottom.v.y<=.05)break;await page.evaluate(()=>__PIXEL_ENGINE__.step(10));}
  assert(bottom.at.y<.08,'Lift must reach accessible bottom hold');
  await page.keyboard.down('KeyW');
  let boarded;
  for(let i=0;i<120;i++){await page.evaluate(()=>__PIXEL_ENGINE__.step(2));boarded=await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game;return {feet:g.actor.position().toArray(),ground:g.actor.hero.groundCollider,lift:g.world.lift.body.collider(0).handle};});if(boarded.feet[2]<-184.4)break;}
  await page.keyboard.up('KeyW');assert(boarded.feet[2]<-184.4,'Walking must cross the deck edge');
  let top;
  for(let i=0;i<180;i++){await page.evaluate(()=>__PIXEL_ENGINE__.step(5));top=await page.evaluate(()=>({feet:__PIXEL_ENGINE__.game.actor.position().toArray(),state:__PIXEL_ENGINE__.game.actor.hero.state}));if(top.feet[1]>7.1)break;}
  assert(top.feet[1]>7.1,'Boarded actor must ride above7.1m');assert.equal(errors.length,0);report.boarding.push({delay,bottom,boarded,top,errors});await page.close();
 }
}finally{await browser.close();}
writeFileSync(`${out}/report.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
