// Cache/collision fixtures position only their actors; pickup rewards are earned
// through public movement. Courier starts from an authentic played checkpoint
// and uses only menus, keyboard inputs, and the engine's deterministic clock.
import assert from 'node:assert/strict';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { launchGame, readableError } from './browser.mjs';
import { makeNavigator } from './campaign-driver.mjs';
const arg=(key,value)=>process.argv.includes(key)?process.argv[process.argv.indexOf(key)+1]:value;
const source=arg('--resume','/tmp/signal-debt-first-job-touch/checkpoint-browser.json');
const only=arg('--only','all'),url=arg('--url','http://127.0.0.1:8080/');
assert(existsSync(source),'Requires the authentic completed first-job checkpoint.');
const report={sourceCheckpoint:source,startedAt:new Date().toISOString(),fixtureScope:'Cache actors are placed four metres from each cache; walking collects them. NPC collision is an isolated fixture. Courier has no game state writes.',checks:{}};
if(existsSync('docs/side-activities-review.json'))report.checks=JSON.parse(readFileSync('docs/side-activities-review.json','utf8')).checks??{};

if(only==='all'||only==='caches'||only==='collision'){
 const session=await launchGame(url,{mode:'keyboard',storageState:source,out:'/tmp/signal-debt-side-fixtures'});
 const {page,driver}=session,nav=makeNavigator(session);
 try{
  await driver.choose('continue');
  assert.equal((await session.state()).mission.completed,1);
  if(only!=='collision'){
   const probes=await page.evaluate(async()=>{
    const {RAPIER}=await import('/pixel-engine.js');const g=window.__PIXEL_ENGINE__.game;
    return g.caches.map(cache=>{const fixedHits=[];
     g.ctx.physics.world.intersectionsWithShape({x:cache.at.x,y:.85,z:cache.at.z},{x:0,y:0,z:0,w:1},new RAPIER.Cuboid(.4,.75,.4),collider=>{if(collider.parent()?.isFixed())fixedHits.push(collider.handle);return true;});
     return {id:cache.id,at:cache.at,fixedHits};
    });
   });
   assert(probes.every(p=>p.fixedHits.length===0),'Every cache needs a character-sized free volume.');
   const pickups=[];
   for(const probe of probes){
    const before=await session.state();
    await page.evaluate(({x,z})=>window.__PIXEL_ENGINE__.game.player.teleport([x,.2,z-4]),probe.at);
    await driver.step(5);
    assert.equal((await session.state()).cash,before.cash,'Fixture setup must not collect cache.');
    await nav.footTo(probe.at,1.1);await driver.step(3);
    const after=await session.state();
    const cache=await page.evaluate(id=>{const g=window.__PIXEL_ENGINE__.game,c=g.caches[id];return {taken:c.taken,visible:c.mesh.visible,persisted:g.readSave()?.cacheTaken.includes(id)};},probe.id);
    assert.equal(after.cash-before.cash,120);assert.equal(after.reserve-before.reserve,12);
    assert(cache.taken&&!cache.visible&&cache.persisted);
    pickups.push({...probe,rewardCash:after.cash-before.cash,rewardAmmo:after.reserve-before.reserve,cache,finalPosition:after.position});
   }
   report.checks.caches={probes,pickups};await session.shot('six-cache-pickups');
  }
  if(only!=='caches'){
   report.checks.kinematicCollision=await page.evaluate(async()=>{
    const {TrafficCar}=await import('/vehicles.js');const {visible}=await import('/navigation.js');
    const e=window.__PIXEL_ENGINE__,g=e.game;
    const b=g.world.buildings.find(b=>b.x<0&&b.z<0&&b.w>20&&b.d>20);
    function run({at,target,police=true,frames=600}){
     const car=new TrafficCar(g.ctx,{at:[at.x,.85,at.z],route:[target],speed:12,police});car.heading=Math.PI/2;
     car.body.setRotation({x:0,y:Math.sin(Math.PI/4),z:0,w:Math.cos(Math.PI/4)},true);
     let blocked=0,penetrated=false,minGap=Infinity;
     for(let i=0;i<frames;i++){
      car.tick(1/60);e.physics.update(1/60);const p=car.position;
      if(car.blockedByBuilding)blocked++;
      if(Math.abs(p.x-b.x)<b.w/2+.95&&Math.abs(p.z-b.z)<b.d/2+.95)penetrated=true;
      minGap=Math.min(minGap,b.x-b.w/2-p.x);
     }
     const end={...car.position};car.dispose();return {at,target,end,blocked,penetrated,minGap};
    }
    const start={x:b.x-b.w/2-9,z:b.z},target={x:b.x+b.w/2+9,z:b.z};
    const building=run({at:start,target});
    const road=run({at:{x:-60,z:0},target:{x:-20,z:0},police:false,frames:240});
    const boundary=run({at:{x:244,z:0},target:{x:260,z:0},frames:240});
    return {obstacle:b,building,road,boundary,lineOfSight:visible({...start,y:1},{...target,y:1},g.world.buildings),playerVehicleTouched:false};
   });
   const c=report.checks.kinematicCollision;
   assert(c.building.blocked>0&&!c.building.penetrated&&c.building.minGap>=2.4);
   assert.equal(c.lineOfSight,false);assert(c.road.end.x>-25&&c.road.blocked===0);
   assert(c.boundary.end.x<=247.5,'Traffic must remain inside the solid perimeter.');
  }
  assert.equal(session.errors.length,0,session.errors.join('\n'));
  await session.save('fixtures',{checks:report.checks,note:report.fixtureScope});
 }catch(error){report.fixtureFailure=readableError(error.message);await session.save('failure',report);throw error;}
 finally{await session.close();writeFileSync('docs/side-activities-review.json',JSON.stringify(report,null,2)+'\n');}
}

if(only==='all'||only==='courier'){
 const session=await launchGame(url,{mode:'keyboard',storageState:source,out:'/tmp/signal-debt-courier'});
 const {page,driver}=session,nav=makeNavigator(session);const started=Date.now();
 try{
  await driver.choose('continue');const checkpoint=await session.state();assert.equal(checkpoint.mission.completed,1);assert.equal(checkpoint.mission.active,false);
  const car=checkpoint.rides.find(r=>r.id==='cormorant');
  const side={x:Math.cos(car.yaw),z:-Math.sin(car.yaw)};
  const sign=(checkpoint.position.x-car.at.x)*side.x+(checkpoint.position.z-car.at.z)*side.z>=0?1:-1;
  await nav.footTo({x:car.at.x+side.x*3*sign,z:car.at.z+side.z*3*sign},.8);await driver.tap('KeyF');assert.equal((await session.state()).ride?.id,'cormorant');
  // Repair via the actual garage menu using money earned by the saved story job.
  await driver.tap('Escape');await driver.choose('repair');await driver.choose('courier');
  const before=await session.state();const challenge=await page.evaluate(()=>window.__PIXEL_ENGINE__.game.courierChallenge);assert(challenge&&challenge.index===0);
  await nav.record('courier started from completed-job checkpoint');
  const routes=[
   [[0,108],[-66,108],[-77,96]],
   [[216,108],[233,113]],
   [[-216,108],[-216,130],[-192,145]],
   [[-216,108],[0,108],[0,0],[-9,0]],
  ];
  async function reverseTo(target){
   for(let n=0;n<400;n++){
    const state=await session.state(),p=state.position,d=Math.hypot(target.x-p.x,target.z-p.z);
    if(d<3){await nav.stop();return;}
    const desired=Math.atan2(target.x-p.x,target.z-p.z),delta=Math.atan2(Math.sin(desired-state.ride.yaw-Math.PI),Math.cos(desired-state.ride.yaw-Math.PI));
    await nav.vehicleInput(-1,Math.max(-1,Math.min(1,delta*1.5)));await driver.step(4);
   }
   throw Error('Reverse exit could not reach the open road.');
  }
  const deliveries=[];
  for(let i=0;i<routes.length;i++){
   if(i)await reverseTo([{x:-66,z:110},{x:220,z:108},{x:-216,z:145}][i-1]);
   // Stop within the delivery radius, keeping room to turn around the actual
   // market furniture and marina office. These are driving waypoints, not teleports.
   const leg=routes[i];for(let j=0;j<leg.length;j++){const [x,z]=leg[j];await nav.driveTo({x,z},j===leg.length-1?(i===3?6:1.3):4,j===leg.length-1);}
   await driver.step(3);
   const active=await page.evaluate(()=>window.__PIXEL_ENGINE__.game.courierChallenge);
   const state=await nav.record('courier delivery '+(i+1));deliveries.push({delivery:i+1,active,position:state.position,elapsed:state.playTime-before.playTime});
   if(i<3)assert(active?.index===i+1,`Courier delivery ${i+1} did not register before time ran out.`);
  }
  const after=await session.state();assert.equal(after.cash-before.cash,450);assert.equal(await page.evaluate(()=>window.__PIXEL_ENGINE__.game.courierChallenge),null);
  assert(after.playTime-before.playTime<180);assert.equal(session.errors.length,0,session.errors.join('\n'));
  report.checks.courier={sourceCheckpoint:source,before,after,deliveries,reward:after.cash-before.cash,simulatedSeconds:after.playTime-before.playTime,wallSeconds:(Date.now()-started)/1000,publicInputsOnly:true};
  await session.shot('courier-complete');await session.save('courier',{...report.checks.courier,log:nav.log});
 }catch(error){report.courierFailure=readableError(error.message);report.courierLastState=await session.state();await session.shot('failure').catch(()=>{});await session.save('failure',{...report,log:nav.log});throw error;}
 finally{await session.close();report.finishedAt=new Date().toISOString();writeFileSync('docs/side-activities-review.json',JSON.stringify(report,null,2)+'\n');}
}
console.log(JSON.stringify(report,null,2));
