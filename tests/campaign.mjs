// Continue an authentic browser checkpoint produced by tests/first-job.mjs.
// Inputs and the engine manual clock are the only mutation paths used here.
import assert from 'node:assert/strict';
import {existsSync,copyFileSync} from 'node:fs';
import {launchGame,readableError} from './browser.mjs';
import {makeNavigator} from './campaign-driver.mjs';
import {runOpening} from './opening-route.mjs';
import {roadRoute,angleDelta,segmentHitsRect} from '../navigation.js';
import {MISSIONS} from '../missions.js';
const arg=(key,value)=>process.argv.includes(key)?process.argv[process.argv.indexOf(key)+1]:value;
const mode=arg('--mode','keyboard');
const fresh=process.argv.includes('--fresh');
const source=fresh?'new story':arg('--resume','/tmp/signal-debt-first-job-touch/checkpoint-browser.json');
if(!fresh)assert(existsSync(source),'A checkpoint saved from actual played objectives is required.');
const session=await launchGame(arg('--url','http://127.0.0.1:8080/'),{mode,storageState:fresh?undefined:source,out:`/tmp/signal-debt-${fresh?'fresh':'campaign'}-${mode}`});
const {driver}=session,nav=makeNavigator(session),started=Date.now();
const sourceArchive=fresh?'new story':`${session.out}/source-checkpoint-${started}.json`;if(!fresh)copyFileSync(source,sourceArchive);
const dist=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z),clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const roads={xs:[-216,-108,0,108,216],zs:[-216,-108,0,108,216]};
let retries=0;

async function safeWalk(target,tolerance=2.8){
 const state=await session.state();
 const obstacles=await session.page.evaluate(async()=>{
  const g=window.__PIXEL_ENGINE__.game,p=g.position,{RAPIER}=await import('/pixel-engine.js'),solid=[];
  g.ctx.physics.world.forEachCollider(c=>{
   if(c.parent()&&!c.parent().isFixed())return;
   if(c.shapeType()!==RAPIER.ShapeType.Cuboid)return;
   const h=c.halfExtents(),v=c.translation(),q=c.rotation();
   if(v.y+h.y<=p.y+.3||v.y-h.y>=p.y+1.5)return;
   solid.push({x:v.x,z:v.z,w:h.x*2,d:h.z*2,yaw:Math.atan2(2*(q.w*q.y+q.x*q.z),1-2*(q.x*q.x+q.y*q.y))});
  });
  return [...solid,...g.rides.filter(r=>Math.abs(r.position.y-p.y)<2).map(r=>({x:r.position.x,z:r.position.z,w:2.1,d:r.kind==='van'?5.1:4.5,yaw:r.yaw}))];
 });
 const local=(p,r)=>{const x=p.x-r.x,z=p.z-r.z,yaw=r.yaw??0;return {x:Math.cos(yaw)*x-Math.sin(yaw)*z,z:Math.sin(yaw)*x+Math.cos(yaw)*z};};
 const blocks=(a,b,r)=>segmentHitsRect(local(a,r),local(b,r),{x:0,z:0,w:r.w,d:r.d},.5);
 const contains=(p,r)=>{const v=local(p,r);return Math.abs(v.x)<r.w/2+.5&&Math.abs(v.z)<r.d/2+.5;};
 if(!obstacles.some(r=>blocks(state.position,target,r))){await nav.footTo(target,tolerance);return;}
 const cell=1.5,minX=Math.min(state.position.x,target.x)-12,minZ=Math.min(state.position.z,target.z)-12;
 const nx=Math.ceil((Math.abs(state.position.x-target.x)+24)/cell),nz=Math.ceil((Math.abs(state.position.z-target.z)+24)/cell);
 const at=(x,z)=>({x:minX+x*cell,z:minZ+z*cell});
 const start=[Math.round((state.position.x-minX)/cell),Math.round((state.position.z-minZ)/cell)],goal=[Math.round((target.x-minX)/cell),Math.round((target.z-minZ)/cell)];
 const key=(x,z)=>z*nx+x,open=[start],from=new Map(),score=new Map([[key(...start),0]]),closed=new Set();let end=null;
 while(open.length){open.sort((a,b)=>(score.get(key(...a))+Math.hypot(a[0]-goal[0],a[1]-goal[1]))-(score.get(key(...b))+Math.hypot(b[0]-goal[0],b[1]-goal[1])));const c=open.shift(),ck=key(...c);if(closed.has(ck))continue;closed.add(ck);if(Math.hypot(c[0]-goal[0],c[1]-goal[1])*cell<tolerance){end=c;break;}for(const [dx,dz]of[[1,0],[-1,0],[0,1],[0,-1]]){const x=c[0]+dx,z=c[1]+dz,k=key(x,z);if(x<0||z<0||x>=nx||z>=nz||closed.has(k))continue;const p=at(x,z);if(obstacles.some(r=>contains(p,r)))continue;const cost=score.get(ck)+1;if(cost<(score.get(k)??Infinity)){score.set(k,cost);from.set(k,c);open.push([x,z]);}}}
 assert(end,`No walkable approach to ${JSON.stringify(target)}`);
 const path=[];for(let p=end;p&&key(...p)!==key(...start);p=from.get(key(...p)))path.unshift(at(...p));
 const sparse=[];let origin=state.position;
 for(let i=0;i<path.length;){let j=path.length-1;while(j>i&&obstacles.some(r=>blocks(origin,path[j],r)))j--;sparse.push(path[j]);origin=path[j];i=j+1;}
 for(const p of sparse)await nav.footTo(p,.8);
 if(dist((await session.state()).position,target)>tolerance)await nav.footTo(target,tolerance);
}

async function enterCar(){
 let s=await session.state();if(s.ride)return;
 const available=[...s.rides].sort((a,b)=>(a.id==='cormorant'?-100:0)+dist(a.at,s.position)-((b.id==='cormorant'?-100:0)+dist(b.at,s.position)));assert(available.length,'No car remains');
 const chosen=available[0].id;
 for(let attempt=0;attempt<5;attempt++){
  s=await session.state();const r=s.rides.find(r=>r.id===chosen);
  if(dist(r.at,s.position)>=3.6)await safeWalk(r.at,3.2);
  await driver.tap('KeyF');s=await session.state();
  if(s.ride){if(s.ride.integrity<=0){await driver.tap('KeyR',110);await nav.record('disabled car recovered through held control');}return;}
  await driver.step(15);
 }
 throw Error(`Could not enter nearest car ${chosen}`);
}
async function exitCar(){if((await session.state()).ride){await nav.stop();await driver.tap('KeyF');}}
async function travel(target,{vehicle=false,combat=false}={}){
 let s=await session.state();
 if(dist(s.position,target)>50||vehicle){
  await enterCar();s=await session.state();
  const near=(value,list)=>list.reduce((a,b)=>Math.abs(a-value)<Math.abs(b-value)?a:b);
  const x=near(target.x,roads.xs),z=near(target.z,roads.zs);
  // Park on the connected street for foot objectives; a street car is not a
  // shortcut through the market's solid furniture or a relay cabinet.
  const parking=vehicle?target:Math.abs(x-target.x)<Math.abs(z-target.z)?{x,z:target.z}:{x:target.x,z};
  let route=roadRoute(s.position,parking,roads);
  const first=route.find(p=>dist(s.position,p)>5);
  if(first&&Math.abs(angleDelta(Math.atan2(first.x-s.position.x,first.z-s.position.z),s.ride.yaw))>2.15){
   // Go around a block instead of demanding a U-turn narrower than the car's
   // physical turning circle. Every guide remains on the existing road grid.
   const horizontal=Math.abs(Math.sin(s.ride.yaw))>Math.abs(Math.cos(s.ride.yaw));
   const sign=Math.sign(horizontal?Math.sin(s.ride.yaw):Math.cos(s.ride.yaw));
   const along=horizontal?s.position.x:s.position.z,across=horizontal?s.position.z:s.position.x;
   const lines=horizontal?roads.xs:roads.zs,cross=near(across,horizontal?roads.zs:roads.xs);
   const next=[...lines].sort((a,b)=>sign*(a-b)).find(n=>(n-along)*sign>3)??clamp(Math.round(along/108)*108,-216,216);
   let side=cross+((horizontal?parking.z:parking.x)>=cross?108:-108);if(Math.abs(side)>216)side=cross-(side-cross);
   const back=clamp(next-sign*108,-216,216);
   const guides=horizontal?[{x:next,z:cross},{x:next,z:side},{x:back,z:side}]:[{x:cross,z:next},{x:side,z:next},{x:side,z:back}];
   route=[...guides,...roadRoute(guides.at(-1),parking,roads)];
  }
  for(const p of route)if(dist((await session.state()).position,p)>5)await nav.driveTo(p);
 }
 if(!vehicle){await exitCar();if(!combat&&dist((await session.state()).position,target)>3.8)await safeWalk(target,3.2);}
}
async function firing(dodge=false,state=null){
 let x=0,y=0;
 if(dodge&&state?.position.y>5){const center=state.lift.landing;let dx=center.x-state.position.x,dz=center.z-state.position.z;if(Math.hypot(dx,dz)<.1){dx=1;dz=0;}const d=Math.hypot(dx,dz);x=(dx*state.basis.right[0]+dz*state.basis.right[2])/d;y=(dx*state.basis.forward[0]+dz*state.basis.forward[2])/d;}
 if(mode==='gamepad')await driver.pad({axes:[x,-y,0,0],buttons:{6:1,7:1,...(dodge?{0:1}:{})}});
 else if(mode==='touch'){
  // Fire already enables aim assistance. Two thumbs suffice: release fire to
  // dodge with direction, then resume fire, rather than requiring four touches.
  await driver.touchButton('KeyC',false);
  if(dodge){await driver.touchButton('KeyJ',false);await driver.stick(x,y);await driver.touchButton('Space',true);}
  else{await driver.touchButton('Space',false);await driver.stick(0,0);await driver.touchButton('KeyJ',true);}
 }
 else await driver.keyboard(['KeyC','KeyJ',...(dodge?['Space']:[]),...(x>.2?['KeyD']:x<-.2?['KeyA']:[]),...(y>.2?['KeyW']:y<-.2?['KeyS']:[])]);
}
async function interact(){
 const start=await session.state(),stage=start.mission.stage,mission=start.mission.mission,target=start.mission.current.at;
 for(let i=0;i<180;i++){
  const s=await session.state();if(s.screen==='failure')throw Error('Defeated during interaction');
  if(s.mission.stage!==stage||s.mission.mission!==mission){await driver.release();return;}
  if(dist(s.position,target)>4.5){await driver.release();await safeWalk(target,3.2);continue;}
  if(mode==='gamepad')await driver.pad({buttons:{3:1}});
  else if(mode==='touch')await driver.touchButton('KeyF',true);
  else await driver.keyboard(['KeyF']);
  await driver.step(12);
 }
 throw Error('Interaction did not complete: '+start.mission.current.label);
}
async function battle(){
 const initial=await session.state(),stage=initial.mission.stage,mission=initial.mission.mission,center=initial.mission.current.at;
 let lastWave=-1;
 for(let i=0;i<1200;i++){
  const s=await session.state();if(s.screen==='failure')throw Error('Defeated during '+s.mission.current.label);
  if(s.mission.stage!==stage||s.mission.mission!==mission){await driver.release();if(s.ammo<12&&s.reserve>0){await driver.tap('KeyR');await driver.step(72);}return;}
  if(s.mission.current.type==='defend'&&s.mission.wave!==lastWave){lastWave=s.mission.wave;await nav.record(`defense wave ${lastWave} ${s.mission.approach} uplink ${s.signalHealth} at ${s.mission.progress.toFixed(2)}s`);}
  const guardRange=initial.mission.current.type==='combat'?40:17;
  if(dist(s.position,center)>guardRange&&(!s.enemies.length||Math.min(...s.enemies.map(e=>dist(e.at,s.position)))>40)){await driver.release();await safeWalk(center,guardRange-4);continue;}
  if(s.enemies.length){const dodge=s.enemies.some(e=>e.attack>0&&e.attack<.28);await firing(dodge,s);await driver.step(12);}
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
 await enterCar();
 // Join the courier's authored ring in its direction of travel. Chasing its
 // changing projection through successive grid shortcuts creates needless U-turns.
 await nav.route([[-108,0],[-108,-216],[-216,-216]]);
 await driver.release();
 for(let i=0;i<120;i++){const c=(await session.state()).courier;if(c.at.x<-190&&c.at.z>-196)break;await driver.step(30);}
 const ring=[{x:-216,z:-216},{x:-216,z:216},{x:216,z:216},{x:216,z:-216}];
 let next=1,previous=null,stuck=0;
 for(let tick=0;tick<4000;tick++){
  const s=await session.state();if(s.mission.current.type!=='intercept'){await nav.stop();return;}
  if(s.ride.integrity<=0){await driver.release();await driver.tap('KeyR',110);await nav.record('courier chase disabled-car recovery');stuck=0;continue;}
  const c=s.courier;assert(c,'Live courier missing');
  if(dist(s.position,ring[next])<14)next=(next+1)%ring.length;
  const start=ring[(next+3)%ring.length],corner=ring[next];
  const vertical=start.x===corner.x;
  const vanOnLeg=vertical?Math.abs(c.at.x-corner.x)<16:Math.abs(c.at.z-corner.z)<16;
  const along=vertical?(c.at.z-s.position.z)*Math.sign(corner.z-start.z):(c.at.x-s.position.x)*Math.sign(corner.x-start.x);
  let aim=corner;
  if(vanOnLeg&&along>0)aim={x:c.at.x+c.velocity.x*.35,z:c.at.z+c.velocity.z*.35};
  if(dist(s.position,aim)>45)aim=vertical?{x:aim.x,z:s.position.z+Math.sign(corner.z-start.z)*40}:{x:s.position.x+Math.sign(corner.x-start.x)*40,z:aim.z};
  const delta=angleDelta(Math.atan2(aim.x-s.position.x,aim.z-s.position.z),s.ride.yaw);
  const steer=-clamp(delta*1.6,-1,1),max=Math.abs(delta)>.6?7:25;
  const braking=s.ride.speed>max+1;
  await nav.vehicleInput(braking?0:1,steer,braking);await driver.step(braking?2:6);
  if(previous&&dist(previous,s.position)<.025)stuck++;else stuck=0;previous=s.position;
  if(stuck>30){await driver.release();await driver.tap('KeyR',110);await nav.record('courier recovery through held control');stuck=0;}
  if(tick%300===0)await nav.record('ring courier pursuit '+tick+' damage '+c.damage);
 }
 throw Error('Moving courier interception exceeded frame budget');
}
async function lift(){
 await exitCar();await safeWalk({x:195,z:-181},.7);
 for(let i=0;i<120;i++){const s=await session.state();if(s.lift.at.y<.08&&s.lift.velocity.y<=.05)break;await driver.step(10);}
 const stage=(await session.state()).mission.stage;let aboard=false;
 for(let i=0;i<240;i++){
  const s=await session.state();
  if(s.hero.grounded&&s.hero.groundCollider===s.lift.collider&&Math.abs(s.position.x-195)<2.32&&Math.abs(s.position.z+185)<2.32){aboard=true;await nav.record('boarded lift: physical ground contact');break;}
  const dx=195-s.position.x,dz=-185-s.position.z,d=Math.hypot(dx,dz)||1,x=(dx*s.basis.right[0]+dz*s.basis.right[2])/d,y=(dx*s.basis.forward[0]+dz*s.basis.forward[2])/d;
  if(mode==='gamepad')await driver.pad({axes:[x,-y,0,0],buttons:{5:1}});
  else if(mode==='touch'){await driver.stick(x,y);await driver.touchButton('ShiftLeft',true);}
  else await driver.keyboard(['ShiftLeft',...(x>.2?['KeyD']:x<-.2?['KeyA']:[]),...(y>.2?['KeyW']:y<-.2?['KeyS']:[])]);
  await driver.step(2);
 }
 assert(aboard,'Player must physically stand on the lift collider');await driver.release();
 let top=false;
 for(let i=0;i<180;i++){const s=await session.state();if(s.position.y>8.1){top=true;break;}await driver.step(10);}
 assert(top,'Service lift must physically carry the player to roof height');
 const landing=(await session.state()).lift.landing;await safeWalk(landing,2.5);await driver.step(6);
 const landed=await session.state();
 assert(landed.mission.stage!==stage&&landed.position.y>7.9&&landed.hero.grounded&&landed.hero.groundCollider!==landed.lift.collider,'Lift objective must finish with the actor standing on the static roof');
 await nav.record('lift complete: static roof landing');
}

async function retryThroughMenu(reason){
 assert(retries<4,'Four public checkpoint retries exhausted: '+reason);
 assert.equal(session.errors.length,0,'Runtime errors must be fixed, not retried away');
 const before=await session.state();assert.equal(before.engine.errors.length,0);assert.equal(before.engine.gpuErrors.length,0);
 await driver.release();await nav.record('attempt failed: '+reason);await session.shot(`attempt-${retries+1}-failed`);
 const s=await session.state();
 if(!s.screen){
  if(mode==='touch'){await session.page.getByRole('button',{name:'Pause game',exact:true}).tap();await driver.step(3);}
  else await driver.tap('Escape');
 }
 await driver.choose('retry');retries++;await nav.record('public checkpoint retry '+retries);
}

try{
 if(fresh){await runOpening(session,nav);await nav.record('fresh new-story opening completed');}
 else{await driver.choose('continue');await nav.record('authentic checkpoint continued');}
 for(let transitions=0;transitions<100;transitions++){
  let s=await session.state();if(s.mission.finished){await nav.record('campaign ending');break;}
  if(s.screen==='failure'){await retryThroughMenu('defeat');continue;}
  if(s.screen==='debrief'){await session.shot(`job-${s.mission.mission+1}-complete`);await driver.choose('next');s=await session.state();}
  if(s.screen==='brief'){if(s.mission.mission===1)await driver.choose('approach',arg('--approach','jam'));await driver.choose('begin');s=await session.state();}
  if(!s.mission.active){await safeWalk({x:-18,z:15},3);await driver.tap('KeyF');continue;}
  const current=s.mission.current;await nav.record('stage '+(s.mission.mission+1)+'.'+(s.mission.stage+1)+' '+current.type);
  try{
  if(current.type==='reach'){await travel(current.at,{vehicle:current.vehicle});if(current.below!==undefined)await driver.step(60);}
  else if(current.type==='combat'){await travel(current.at,{combat:true});await battle();}
  else if(current.type==='interact'){await travel(current.at);await interact();}
  else if(current.type==='defend'){await travel(current.at,{combat:true});await battle();}
  else if(current.type==='escape')await escape();
  else if(current.type==='intercept')await intercept();
  else if(current.type==='lift')await lift();
  else throw Error('Unimplemented input action '+current.type);
  await driver.release();await driver.step(3);
  await session.context.storageState({path:`${session.out}/checkpoint-browser.json`});
  const after=await session.state();assert(after.mission.stage!==s.mission.stage||after.mission.mission!==s.mission.mission||after.screen==='failure','Objective did not advance: '+current.label);
  }catch(error){
   const failed=await session.state();
   if(failed.screen==='failure'||/Driving|Foot navigation|No walkable|Could not enter|Service lift|Vehicle would|Interaction/.test(error.message)){await retryThroughMenu(readableError(error.message));continue;}
   throw error;
  }
 }
 const final=await session.state();assert(final.mission.finished&&final.mission.completed===4,'All four chapters must reach the final ending');assert.equal(session.errors.length,0,session.errors.join('\n'));
 assert.equal(final.engine.errors.length,0);assert.equal(final.engine.gpuErrors.length,0);
 assert.deepEqual(final.mission.history.map(({mission,stage,label})=>({mission,stage,label})),MISSIONS.flatMap((m,mission)=>m.stages.map((s,stage)=>({mission,stage,label:s.label}))),'Every authored objective must be completed in order');
 assert.equal(final.inputMode,mode,'prompts must follow the selected input');if(mode!=='keyboard')assert.equal(driver.keyboardEvents,0,'controller/touch campaign must not use keyboard fallback');
 await session.shot('campaign-complete');await session.save('campaign',{sourceCheckpoint:sourceArchive,log:nav.log,wallElapsedSeconds:(Date.now()-started)/1000,clock:'engine.step manual simulation; game playTime is simulated gameplay duration',retries});
}catch(error){await nav.record('FAILED '+readableError(error.message)).catch(()=>{});await session.shot('failure').catch(()=>{});await session.save('failure',{sourceCheckpoint:sourceArchive,log:nav.log,failure:readableError(error.message),wallElapsedSeconds:(Date.now()-started)/1000}).catch(()=>{});throw Error(readableError(error.message));}
finally{await session.context.storageState({path:`${session.out}/checkpoint-browser.json`});await session.close();}
