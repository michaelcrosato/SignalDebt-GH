// Focused lifecycle/contact/recovery regression. Menu replay/Continue use public
// inputs. Storage failure, police placement, and overturned car are explicit
// fixtures; this file makes no campaign-completion claim.
import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {launchGame} from './browser.mjs';
const s=await launchGame('http://127.0.0.1:8080/',{mode:'keyboard',storageState:'/tmp/signal-debt-first-job-touch/checkpoint-browser.json',out:'/tmp/signal-debt-completion-regressions'});
const {page,driver}=s,checks={};
try{
 await driver.choose('continue');
 const main=await s.state();assert.equal(main.mission.completed,1);assert.equal(main.mission.active,false);
 const persisted=await page.evaluate(()=>localStorage.getItem('signal-debt-save-v1'));
 await driver.tap('Escape');await driver.choose('replay');await driver.choose('replay',2);await driver.choose('begin');await driver.tap('KeyF');
 assert.equal((await s.state()).mission.mission,2);assert.equal((await s.state()).mission.current.type,'intercept');
 assert(await page.evaluate(()=>!!__PIXEL_ENGINE__.game.courier));
 await driver.tap('KeyV');assert(await page.evaluate(()=>__PIXEL_ENGINE__.game.scan>0));
 await driver.tap('Escape');await driver.choose('quit');await driver.choose('continue');
 const restored=await s.state();
 assert.equal(restored.mission.mission,main.mission.mission);assert.equal(restored.mission.stage,main.mission.stage);assert.equal(restored.cash,main.cash);
 const cleanup=await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game;return {courier:g.courier,challenge:g.courierChallenge,scan:g.scan,courierStopped:g.courierStopped,heat:g.heat};});
 assert.equal(cleanup.courier,null);assert.equal(cleanup.challenge,null);assert.equal(cleanup.scan,0);assert.equal(cleanup.heat,0);
 assert.equal(await page.evaluate(()=>localStorage.getItem('signal-debt-save-v1')),persisted);
 checks.replayMovingCourierCleanup={main:{mission:main.mission.mission,stage:main.mission.stage,cash:main.cash},restored:{mission:restored.mission.mission,stage:restored.mission.stage,cash:restored.cash},cleanup,persistedCampaignUnchanged:true};

 await page.evaluate(()=>{window.__storageGet=Storage.prototype.getItem;window.__storageSet=Storage.prototype.setItem;Storage.prototype.getItem=function(){throw Error('fixture: storage unavailable')};Storage.prototype.setItem=function(){throw Error('fixture: storage unavailable')};});
 assert.equal(await page.evaluate(()=>__PIXEL_ENGINE__.game.readSave()),null);
 await driver.tap('Escape');await driver.choose('replay');await driver.choose('replay',0);await driver.choose('begin');await driver.tap('KeyF');
 assert.equal((await s.state()).mission.stage,1);
 await driver.tap('Escape');await driver.choose('quit');await driver.choose('continue');
 const memoryRestored=await s.state();assert.equal(memoryRestored.mission.stage,main.mission.stage);assert.equal(memoryRestored.mission.completed,1);assert.equal(memoryRestored.cash,main.cash);
 checks.unavailableStorageReplay={restoredMainStage:memoryRestored.mission.stage,restoredCash:memoryRestored.cash,noCrash:true};
 await page.evaluate(()=>{Storage.prototype.getItem=window.__storageGet;Storage.prototype.setItem=window.__storageSet;});

 await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game;g.clearHeat();g.clearEnemies();g.health=100;g.damageCooldown=0;g.sinceDamage=0;g.player.teleport([195,8.3,-192]);g.addHeat(2,true);for(const c of g.police){c.stopped=1e9;c.body.setTranslation({x:198,y:.85,z:-192},true);c.body.setNextKinematicTranslation({x:198,y:.85,z:-192});}});
 await driver.step(180);const roof=await s.state();assert.equal(roof.health,100);assert(roof.position.y>8);
 await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game;g.health=100;g.damageCooldown=0;g.sinceDamage=0;g.player.teleport([195,.2,-178]);for(const c of g.police){c.body.setTranslation({x:198,y:.85,z:-178},true);c.body.setNextKinematicTranslation({x:198,y:.85,z:-178});}});
 await driver.step(120);const street=await s.state();assert(street.health<100,'Same-level police contact must remain active.');
 checks.policeVerticalContact={roofHealth:roof.health,roofY:roof.position.y,streetHealth:street.health,streetY:street.position.y};

 await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game;g.clearHeat();g.clearEnemies();const r=g.rides[0];r.reset([30,1.1,0],0);r.body.setRotation({x:1,y:0,z:0,w:0},true);r.integrity=12;g.player.teleport([33,.2,0]);});
 await driver.step(35);await driver.tap('KeyF');assert.equal((await s.state()).ride?.id,'loaner');
 const before=await page.evaluate(()=>{const r=__PIXEL_ENGINE__.game.ride,q=r.body.rotation();return {upY:1-2*(q.x*q.x+q.z*q.z),integrity:r.integrity};});assert(before.upY<-.9);
 await driver.tap('KeyR',110);await driver.step(45);
 const recovery=await page.evaluate(()=>{const g=__PIXEL_ENGINE__.game,r=g.ride,q=r.body.rotation();return {id:r.id,at:{...r.position},upY:1-2*(q.x*q.x+q.z*q.z),integrity:r.integrity,keyHeld:g.ctx.input.isDown('KeyR')};});
 assert.equal(recovery.id,'loaner');assert(recovery.upY>.95);assert(recovery.integrity>=30);assert(Math.abs(recovery.at.z-4)<1);assert(!recovery.keyHeld);
 checks.occupiedOverturnedRecovery={before,after:recovery};
 assert.equal(s.errors.length,0,s.errors.join('\n'));await s.shot('regressions-complete');
 const report=await s.save('regressions',{checks,scope:'Focused fixtures and public menus/inputs; not a full campaign.'});writeFileSync('docs/completion-regressions.json',JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify(checks,null,2));
}catch(error){await s.save('failure',{checks,error:error.message});throw error;}
finally{await s.close();}
