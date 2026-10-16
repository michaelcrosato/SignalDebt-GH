// Replay a checkpoint captured by actual campaign play; verify public lift boarding,
// static roof landing and a normal page reload/Continue. No state fabrication.
import assert from 'node:assert/strict';
import {launchGame} from './browser.mjs';
import {makeNavigator} from './campaign-driver.mjs';
const source=process.argv[2]??'/tmp/signal-debt-fresh-keyboard/checkpoint-browser.json';
const session=await launchGame('http://127.0.0.1:8080/',{mode:'keyboard',storageState:source,out:'/tmp/signal-debt-lift-checkpoint'});
const {driver}=session,nav=makeNavigator(session),evidence=[];
try{
 await driver.choose('continue');let s=await session.state();assert.equal(s.mission.mission,3);assert.equal(s.mission.current.type,'lift');
 await nav.footTo({x:195,z:-181},.7);
 for(let i=0;i<180;i++){s=await session.state();if(s.lift.at.y<.08&&s.lift.velocity.y<=.05)break;await driver.step(10);}
 let aboard=false;
 for(let i=0;i<240;i++){
  s=await session.state();if(s.hero.grounded&&s.hero.groundCollider===s.lift.collider&&Math.abs(s.position.x-195)<2.32&&Math.abs(s.position.z+185)<2.32){aboard=true;break;}
  const dx=195-s.position.x,dz=-185-s.position.z,d=Math.hypot(dx,dz)||1,x=(dx*s.basis.right[0]+dz*s.basis.right[2])/d,y=(dx*s.basis.forward[0]+dz*s.basis.forward[2])/d;
  await driver.keyboard(['ShiftLeft',...(x>.2?['KeyD']:x<-.2?['KeyA']:[]),...(y>.2?['KeyW']:y<-.2?['KeyS']:[])]);await driver.step(2);
 }
 assert(aboard,'Movement must put the character on the lift collider');await driver.release();evidence.push({label:'physical boarding',state:await session.state()});
 for(let i=0;i<180;i++){s=await session.state();if(s.position.y>8.1)break;await driver.step(10);}
 assert(s.position.y>8.1);assert.equal(s.mission.current.type,'lift','Standing on moving deck must not checkpoint prematurely');evidence.push({label:'raised on deck, objective still active',state:s});
 await nav.footTo(s.lift.landing,2.5);await driver.step(6);s=await session.state();
 assert.equal(s.mission.stage,5);assert(s.hero.grounded&&s.hero.groundCollider!==s.lift.collider&&s.position.y>7.9);evidence.push({label:'static roof completed objective',state:s});
 await session.shot('static-roof-checkpoint');await session.context.storageState({path:`${session.out}/roof-checkpoint.json`});
 await session.page.reload();await session.page.waitForFunction(()=>window.__PIXEL_ENGINE__?.state().ready,null,{timeout:90000});await session.page.evaluate(()=>{__PIXEL_ENGINE__.manual=true;});
 await driver.choose('continue');await driver.step(120);s=await session.state();
 assert.equal(s.mission.stage,5);assert(s.position.y>8&&s.hero.grounded&&s.hero.groundCollider!==s.lift.collider,'Reloaded checkpoint must remain on the static roof');assert(s.lift.at.y<2,'Fixture must test roof restore while moving deck is below the roof');assert.equal(session.errors.length,0);
 evidence.push({label:'reloaded and settled120frames on static roof',state:s});await session.shot('roof-after-reload');await session.save('report',{sourceCheckpoint:source,evidence});console.log(JSON.stringify(evidence.map(e=>({label:e.label,position:e.state.position,stage:e.state.mission.stage,hero:e.state.hero,lift:e.state.lift.at})),null,2));
}finally{await session.close();}
