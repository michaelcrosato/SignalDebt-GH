// Continue an authentic browser checkpoint produced by tests/first-job.mjs.
// Inputs and the engine manual clock are the only mutation paths used here.
import assert from 'node:assert/strict';
import {existsSync,copyFileSync} from 'node:fs';
import {launchGame,readableError} from './browser.mjs';
import {makeNavigator} from './campaign-driver.mjs';
import {roadRoute,angleDelta,segmentHitsRect} from '../navigation.js';
const arg=(key,value)=>process.argv.includes(key)?process.argv[process.argv.indexOf(key)+1]:value;
const mode=arg('--mode','keyboard');
const source=arg('--resume','/tmp/signal-debt-first-job-touch/checkpoint-browser.json');
assert(existsSync(source),'A checkpoint saved from actual played objectives is required.');
const session=await launchGame(arg('--url','http://127.0.0.1:8080/'),{mode,storageState:source,out:`/tmp/signal-debt-campaign-${mode}`});
const {driver}=session,nav=makeNavigator(session),started=Date.now();
const sourceArchive=`${session.out}/source-checkpoint-${started}.json`;copyFileSync(source,sourceArchive);
const dist=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z),clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const roads={xs:[-216,-108,0,108,216],zs:[-216,-108,0,108,216]};
let retries=0;

async function safeWalk(target,tolerance=2.8){
 const state=await session.state();
 const obstacles=await session.page.evaluate(()=>{const g=window.__PIXEL_ENGINE__.game,p=g.position;return [...g.world.buildings.filter(b=>b.h>p.y+.5),...g.rides.filter(r=>Math.abs(r.position.y-p.y)<2).map(r=>({x:r.position.x,z:r.position.z,w:2*(Math.abs(Math.cos(r.yaw))*1.05+Math.abs(Math.sin(r.yaw))*2.5),d:2*(Math.abs(Math.sin(r.yaw))*1.05+Math.abs(Math.cos(r.yaw))*2.5)}))];});
 if(!obstacles.some(r=>segmentHitsRect(state.position,target,r,.5))){await nav.footTo(target,tolerance);return;}
 const cell=1.5,minX=Math.min(state.position.x,target.x)-12,minZ=Math.min(state.position.z,target.z)-12;
 const nx=Math.ceil((Math.abs(state.position.x-target.x)+24)/cell),nz=Math.ceil((Math.abs(state.position.z-target.z)+24)/cell);
 const at=(x,z)=>({x:minX+x*cell,z:minZ+z*cell});
 const start=[Math.round((state.position.x-minX)/cell),Math.round((state.position.z-minZ)/cell)],goal=[Math.round((target.x-minX)/cell),Math.round((target.z-minZ)/cell)];
 const key=(x,z)=>z*nx+x,open=[start],from=new Map(),score=new Map([[key(...start),0]]),closed=new Set();let end=null;
 while(open.length){open.sort((a,b)=>(score.get(key(...a))+Math.hypot(a[0]-goal[0],a[1]-goal[1]))-(score.get(key(...b))+Math.hypot(b[0]-goal[0],b[1]-goal[1])));const c=open.shift(),ck=key(...c);if(closed.has(ck))continue;closed.add(ck);if(Math.hypot(c[0]-goal[0],c[1]-goal[1])*cell<tolerance){end=c;break;}for(const [dx,dz]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=c[0]+dx,z=c[1]+dz,k=key(x,z);if(x<0||z<0||x>=nx||z>=nz||closed.has(k))continue;const p=at(x,z);if(obstacles.some(r=>Math.abs(p.x-r.x)<r.w/2+.5&&Math.abs(p.z-r.z)<r.d/2+.5))continue;const cost=score.get(ck)+1;if(cost<(score.get(k)??Infinity)){score.set(k,cost);from.set(k,c);open.push([x,z]);}}}
 assert(end,`No walkable approach to ${JSON.stringify(target)}`);
 const path=[];for(let p=end;p&&key(...p)!==key(...start);p=from.get(key(...p)))path.unshift(at(...p));
 const sparse=[];let origin=state.position;
 for(let i=0;i<path.length;){let j=path.length-1;while(j>i&&obstacles.some(r=>segmentHitsRect(origin,path[j],r,.5)))j--;sparse.push(path[j]);origin=path[j];i=j+1;}
 for(const p of sparse)await nav.footTo(p,.8);
}

async function enterCar(){
 let s=await session.state();if(s.ride)return;
 const available=s.rides.filter(r=>r.integrity>0).sort((a,b)=>(a.id==='cormorant'?-100:0)+dist(a.at,s.position)-((b.id==='cormorant'?-100:0)+dist(b.at,s.position)));assert(available.length,'No functioning car remains');
 const r=available[0],side={x:Math.cos(r.yaw),z:-Math.sin(r.yaw)},sign=(s.position.x-r.at.x)*side.x+(s.position.z-r.at.z)*side.z>=0?1:-1;
 await safeWalk({x:r.at.x+side.x*3*sign,z:r.at.z+side.z*3*sign},.7);await driver.tap('KeyF');
 s=await session.state();assert(s.ride,`Could not enter nearest car ${r.id}`);
}
async function exitCar(){if((await session.state()).ride){await nav.stop();await driver.tap('KeyF');}}
async function travel(target,{vehicle=false,combat=false}={}){
 let s=await session.state();
 if(dist(s.position,target)>25||vehicle){
  await enterCar();s=await session.state();
  const near=(value,list)=>list.reduce((a,b)=>Math.abs(a-value)<Math.abs(b-value)?a:b);
  const x=near(target.x,roads.xs),z=near(target.z,roads.zs);
  // Park on the connected street for foot objectives; a street car is not a
  // shortcut through the market's solid furniture or a relay cabinet.
  const parking=vehicle?target:Math.abs(x-target.x)<Math.abs(z-target.z)?{x,z:target.z}:{x:target.x,z};
  const route=roadRoute(s.position,parking,roads);for(const p of route)if(dist((await session.state()).position,p)>5)await nav.driveTo(p);
 }
 if(!vehicle){await exitCar();if(!combat&&dist((await session.state()).position,target)>3.8)await safeWalk(target,3.2);}
}
async function firing(dodge=false){
 if(mode==='gamepad')await driver.pad({buttons:{6:1,7:1,...(dodge?{0:1}:{})}});
 else if(mode==='touch'){await driver.touchButton('KeyC',true);await driver.touchButton('KeyJ',true);await driver.touchButton('Space',dodge);}
 else await driver.keyboard(['KeyC','KeyJ',...(dodge?['Space']:[])]);
}
async function battle(){
 const initial=await session.state(),stage=initial.mission.stage,mission=initial.mission.mission,center=initial.mission.current.at;
 for(let i=0;i<1200;i++){
  const s=await session.state();if(s.screen==='failure')throw Error('Defeated during '+s.mission.current.label);
  if(s.mission.stage!==stage||s.mission.mission!==mission){await driver.release();if(s.ammo<12&&s.reserve>0){await driver.tap('KeyR');await driver.step(72);}return;}
  const guardRange=initial.mission.current.type==='combat'?40:17;
  if(dist(s.position,center)>guardRange){await driver.release();await safeWalk(center,guardRange-4);continue;}
  if(s.enemies.length){const dodge=center.y<3&&s.enemies.some(e=>e.attack>0&&e.attack<.28);await firing(dodge);await driver.step(12);}
  else{await driver.release();await driver.step(30);}
 }
 throw Error('Combat/defense did not finish: '+initial.mission.current.label);
}
async function escape(){
 await enterCar();
 for(let circuit=0;circuit<4;circuit++)for(const target of [{x:0,z:0},{x:0,z:-216},{x:-216,z:-216},{x:-216,z:108},{x:108,z:108},{x:108,z:0}]){
  const s=await session.state();if(s.heat===0)return;
  const points=roadRoute(s.position,target,roads);for(const p of points){if((await session.state()).heat===0){await nav.stop();return;}if(dist((await session.state()).position,p)>5)await nav.driveTo(p,6,false);}
 }
 throw Error('Could not break pursuit after four street circuits');
}
async function intercept(){
 await enterCar();let turn=0;
 for(let tick=0;tick<3000;tick++){
  const s=await session.state();if(s.mission.current.type!=='intercept'){await nav.stop();return;}
  const c=s.courier;assert(c,'Live courier missing');
  const target={x:c.at.x+c.velocity.x*.35,z:c.at.z+c.velocity.z*.35};
  const route=roadRoute(s.position,target,roads);let aim=dist(s.position,target)<65?target:route.find(p=>dist(s.position,p)>10)??target;
  const delta=angleDelta(Math.atan2(aim.x-s.position.x,aim.z-s.position.z),s.ride.yaw);
  if(Math.abs(delta)>2.2&&!turn)turn=Math.sign(delta);if(Math.abs(delta)<1.7)turn=0;
  const steer=-(turn||clamp(delta*1.4,-1,1)),max=Math.abs(delta)>.65?8:25;
  await nav.vehicleInput(s.ride.speed>max+1?0:1,steer,s.ride.speed>max+1);await driver.step(9);
  if(tick%300===0)await nav.record('courier pursuit '+tick);
 }
 throw Error('Moving courier interception exceeded frame budget');
}
async function lift(){
 await exitCar();await safeWalk({x:195,z:-181},.7);
 for(let i=0;i<120;i++){const s=await session.state();if(s.lift.at.y<.8){await safeWalk({x:195,z:-185},.5);break;}await driver.step(15);}
 const stage=(await session.state()).mission.stage;await driver.release();
 for(let i=0;i<180;i++){if((await session.state()).mission.stage!==stage)return;await driver.step(10);}
 throw Error('Service lift did not carry the player to the roof');
}

try{
 await driver.choose('continue');await nav.record('authentic checkpoint continued');
 for(let transitions=0;transitions<100;transitions++){
  let s=await session.state();if(s.mission.finished){await nav.record('campaign ending');break;}
  if(s.screen==='failure'){assert(retries++<2,'Retry budget exhausted');await driver.choose('retry');await nav.record('checkpoint retry');continue;}
  if(s.screen==='debrief'){await session.shot(`job-${s.mission.mission+1}-complete`);await driver.choose('next');s=await session.state();}
  if(s.screen==='brief'){if(s.mission.mission===1)await driver.choose('approach',arg('--approach','jam'));await driver.choose('begin');s=await session.state();}
  if(!s.mission.active){await safeWalk({x:-18,z:15},3);await driver.tap('KeyF');continue;}
  const current=s.mission.current;await nav.record('stage '+(s.mission.mission+1)+'.'+(s.mission.stage+1)+' '+current.type);
  if(current.type==='reach'){await travel(current.at,{vehicle:current.vehicle});if(current.below!==undefined)await driver.step(60);}
  else if(current.type==='combat'){await travel(current.at,{combat:true});await battle();}
  else if(current.type==='interact'){await travel(current.at);await driver.tap('KeyF',Math.ceil(current.seconds*60)+8);}
  else if(current.type==='defend'){await travel(current.at);await battle();}
  else if(current.type==='escape')await escape();
  else if(current.type==='intercept')await intercept();
  else if(current.type==='lift')await lift();
  else throw Error('Unimplemented input action '+current.type);
  await driver.release();await driver.step(3);
  await session.context.storageState({path:`${session.out}/checkpoint-browser.json`});
  const after=await session.state();assert(after.mission.stage!==s.mission.stage||after.mission.mission!==s.mission.mission||after.screen==='failure','Objective did not advance: '+current.label);
 }
 const final=await session.state();assert(final.mission.finished&&final.mission.completed===4,'All four chapters must reach the final ending');assert.equal(session.errors.length,0,session.errors.join('\n'));
 await session.shot('campaign-complete');await session.save('campaign',{sourceCheckpoint:source,log:nav.log,wallElapsedSeconds:(Date.now()-started)/1000,clock:'engine.step manual simulation; game playTime is simulated gameplay duration',retries});
}catch(error){await nav.record('FAILED '+readableError(error.message)).catch(()=>{});await session.shot('failure').catch(()=>{});await session.save('failure',{sourceCheckpoint:source,log:nav.log,failure:readableError(error.message),wallElapsedSeconds:(Date.now()-started)/1000}).catch(()=>{});throw Error(readableError(error.message));}
finally{await session.context.storageState({path:`${session.out}/checkpoint-browser.json`});await session.close();}
