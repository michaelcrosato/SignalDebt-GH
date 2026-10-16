// Isolated system fixtures: setup can position bodies/set resources. All tested
// actions use public inputs. This is NOT campaign completion or pacing evidence.
import assert from 'node:assert/strict';
import {launchGame} from './browser.mjs';
const s=await launchGame('http://127.0.0.1:8080/',{mode:'gamepad',out:'/tmp/signal-debt-systems'});
const {page,driver}=s;const checks={};
try{
 await driver.choose('new');await driver.choose('begin');await driver.tap('KeyF');
 assert.equal((await s.state()).mission.stage,1);
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('signal-debt-save-v1')));
 assert.equal(saved.story.stage,1);checks.realObjectiveCheckpoint=true;
 await page.reload();await page.waitForFunction(()=>window.__PIXEL_ENGINE__?.game?.ready);await page.evaluate(()=>window.__PIXEL_ENGINE__.manual=true);
 await driver.choose('continue');assert.equal((await s.state()).mission.stage,1);checks.continueAfterReload=true;
 async function carFixture(){await driver.release();await page.evaluate(()=>{const g=window.__PIXEL_ENGINE__.game;g.exitCar(true);g.story.active=false;const r=g.rides[0];r.reset([-70,1.1,0],Math.PI/2);r.integrity=100;g.player.teleport([-70,.2,2.5]);});await driver.step(30);await driver.tap('KeyF');assert.equal((await s.state()).ride.id,'loaner');}
 await carFixture();await driver.pad({buttons:{7:.3}});await driver.step(120);checks.partialThrottle=(await s.state()).ride.speed;
 await carFixture();await driver.pad({buttons:{7:1}});await driver.step(120);checks.fullThrottle=(await s.state()).ride.speed;
 assert(checks.fullThrottle>checks.partialThrottle+2,'analog acceleration must retain trigger pressure');
 async function brakeFixture(pressure){await carFixture();await page.evaluate(()=>window.__PIXEL_ENGINE__.game.ride.body.setLinvel({x:12,y:0,z:0},true));await driver.pad({buttons:{6:pressure}});await driver.step(24);return (await s.state()).ride.speed;}
 checks.partialBrake=await brakeFixture(.25);checks.fullBrake=await brakeFixture(1);assert(checks.partialBrake>checks.fullBrake+2,'analog brake pressure must change deceleration');
 await carFixture();await driver.pad({axes:[.7,0,0,0],buttons:{7:1}});await driver.step(120);checks.turnedYaw=(await s.state()).ride.yaw;assert(Math.abs(checks.turnedYaw-Math.PI/2)>.15,'steering must rotate the chassis');
 await driver.release();await page.evaluate(()=>{const g=window.__PIXEL_ENGINE__.game;g.ride.reset([-9,1.1,0]);g.ride.integrity=22;g.cash=1000;});
 await driver.tap('Escape');await driver.choose('repair');checks.repair=await s.state();assert.equal(checks.repair.cash,850);assert.equal(checks.repair.ride.integrity,100);
 await driver.choose('upgrade');checks.upgrade=await page.evaluate(()=>({cash:window.__PIXEL_ENGINE__.game.cash,upgraded:window.__PIXEL_ENGINE__.game.rides[1].upgraded,power:window.__PIXEL_ENGINE__.game.rides[1].vehicle.o.power}));assert.equal(checks.upgrade.cash,250);assert(checks.upgrade.upgraded&&checks.upgrade.power>38);
 await driver.choose('resume');await driver.tap('KeyF');await driver.pad({buttons:{7:1}});await driver.step(80);await driver.release();checks.shots=(await s.state()).ammo;await driver.tap('KeyR');await driver.step(80);assert.equal((await s.state()).ammo,12);checks.reloadAfterShooting=true;
 await driver.tap('Space');checks.dodging=await page.evaluate(()=>window.__PIXEL_ENGINE__.game.player.dodging);assert(checks.dodging);await driver.step(60);assert.equal(await page.evaluate(()=>window.__PIXEL_ENGINE__.game.player.dodging),false);
 await driver.tap('KeyV');assert((await s.state()).engine.look==='night_ops');await driver.step(260);assert.equal(await page.evaluate(()=>window.__PIXEL_ENGINE__.game.scan),0);checks.scanRestoresLook=true;
 await driver.release();
 await page.evaluate(async()=>{const g=window.__PIXEL_ENGINE__.game,p=g.position;g.clearEnemies();await g.spawnEnemies({x:p.x+8,y:0,z:p.z},1);});
 await page.mouse.move(640,350);await page.mouse.down();await driver.step(75);await page.mouse.up();
 assert.equal((await s.state()).enemies.length,0,'real left mouse input must fire and disable the visible guard');checks.mouseFire=true;
 const yawBefore=(await s.state()).engine.cameraRig.yaw;
 await page.mouse.down();await page.mouse.move(710,350);await driver.step(3);await page.mouse.up();
 assert(Math.abs((await s.state()).engine.cameraRig.yaw-yawBefore)>.1,'real mouse drag must orbit the camera');checks.mouseCamera=true;
 await page.evaluate(()=>{const g=window.__PIXEL_ENGINE__.game;g.health=1;g.damageCooldown=0;g.damage(10);});assert.equal((await s.state()).screen,'failure');await driver.choose('retry');assert.equal((await s.state()).screen,null);assert((await s.state()).health>=60);checks.retry=true;
 await s.shot('systems');assert.equal(s.errors.length,0,s.errors.join('\n'));await s.save('systems',{checks,note:'Targeted fixtures; only actual opening objective proves story progress.'});
 console.log(JSON.stringify(checks,null,2));
}finally{await s.close();}
