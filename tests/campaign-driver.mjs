import assert from 'node:assert/strict';

// Navigation through actual keyboard, standard gamepad, or touch events only.
export function makeNavigator(session) {
  const {driver,mode}=session;
  const log = [];
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
  const angle = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));
  
  async function record(event) { const state = await session.state(); log.push({ event, state }); console.log(event, JSON.stringify({ at: state.position, ride: state.ride?.id, speed: state.ride?.speed, yaw: state.ride?.yaw, stage: state.mission?.stage, time: state.playTime, health: state.health })); return state; }
  
  async function footTo(target, tolerance = 1.6) {
    let previous = null, stagnant = 0;
    for (let tick = 0; tick < 1200; tick++) {
      const s = await session.state();
      assert(!s.screen, `foot navigation blocked by ${s.screen}`);
      const d = distance(s.position, target);
      if (d < tolerance) { await driver.release(); await driver.step(8); return; }
      const dx = (target.x - s.position.x) / d, dz = (target.z - s.position.z) / d;
      const x = dx * s.basis.right[0] + dz * s.basis.right[2], y = dx * s.basis.forward[0] + dz * s.basis.forward[2];
      if (mode === 'gamepad') await driver.pad({ axes: [x, -y, 0, 0], buttons: { 5: 1 } });
      else if (mode === 'touch') { await driver.stick(x, y); await driver.touchButton('ShiftLeft', true); }
      else await driver.keyboard(['ShiftLeft', ...(x > .26 ? ['KeyD'] : x < -.26 ? ['KeyA'] : []), ...(y > .26 ? ['KeyW'] : y < -.26 ? ['KeyS'] : [])]);
      await driver.step(d < 4 ? 4 : 12);
      if (previous && distance(s.position, previous) < .025) stagnant++; else stagnant = 0;
      if (stagnant > 25) throw Error(`Foot navigation stuck at ${JSON.stringify(s.position)} targeting ${JSON.stringify(target)}`);
      previous = s.position;
    }
    throw Error('Foot navigation exceeded frame budget');
  }
  
  async function vehicleInput(throttle, steer, brake = false) {
    if (mode === 'gamepad') await driver.pad({ axes: [steer, 0, 0, 0], buttons: { 7: Math.max(0, throttle), 6: brake || throttle < 0 ? Math.max(.8, -throttle) : 0 } });
    else if (mode === 'touch') {
      await driver.stick(steer, 0);
      if(brake||throttle<0){await driver.touchButton('KeyW',false);await driver.touchButton('KeyS',true);}
      else{await driver.touchButton('KeyS',false);await driver.touchButton('KeyW',throttle>.1);}
    } else await driver.keyboard([...(throttle > .1 ? ['KeyW'] : []), ...(brake || throttle < 0 ? ['KeyS'] : []), ...(steer > .16 ? ['KeyD'] : steer < -.16 ? ['KeyA'] : [])]);
  }
  
  async function stop() {
    for (let i = 0; i < 100; i++) {
      const s = await session.state();
      if (!s.ride || Math.abs(s.ride.speed) < .6) { await driver.release(); return; }
      if(s.ride.integrity<=0){await driver.release();await driver.tap('KeyR',110);await record('recover disabled car before stopping');return;}
      await vehicleInput(s.ride.speed<0?1:0, 0, s.ride.speed>=0); await driver.step(3);
    }
    throw Error('Vehicle would not stop');
  }
  
  async function driveTo(target, tolerance = 5, stopAtEnd = true) {
    let previous = null, stagnant = 0, turnSign = 0, passing = null, passes = 0,slowTime=0;
    for (let tick = 0; tick < 1800; tick++) {
      const s = await session.state();
      assert(!s.screen, `driving blocked by ${s.screen}`);assert(s.ride, 'driver unexpectedly left car');
      if(s.ride.integrity<=0){await driver.release();await driver.tap('KeyR',110);await record('recover disabled car while navigating');passing=null;turnSign=0;stagnant=0;slowTime=0;continue;}
      const d = distance(s.position, target);
      if (d < tolerance) { if (stopAtEnd) await stop(); return; }
      if(passing&&distance(s.position,passing)<4)passing=null;
      let aim=passing??target;
      if(!passing&&d>45){
        if(Math.abs(target.x-s.position.x)<20)aim={x:target.x,z:s.position.z+Math.sign(target.z-s.position.z)*40};
        else if(Math.abs(target.z-s.position.z)<20)aim={x:s.position.x+Math.sign(target.x-s.position.x)*40,z:target.z};
      }
      const desired = Math.atan2(aim.x - s.position.x, aim.z - s.position.z);
      const delta = angle(desired, s.ride.yaw);
      if(Math.abs(delta)>2.2&&!turnSign)turnSign=Math.sign(delta);
      if(Math.abs(delta)<1.7)turnSign=0;
      // Vehicle +steer turns clockwise, toward negative world yaw.
    const steer = -(turnSign || clamp(delta * 1.6, -1, 1));
      const targetSpeed = passing?5:Math.abs(delta) > 1 ? 4.5 : Math.abs(delta) > .35 ? 8 : Math.min(18, Math.max(4, d * .75));
      const brake = s.ride.speed > targetSpeed + 1;
    await vehicleInput(brake ? 0 : 1, steer, brake);
    const frames=brake?2:d<15?4:9;await driver.step(frames);
    slowTime=!brake&&Math.abs(s.ride.speed)<1?slowTime+frames/60:0;
    if(slowTime>4){await driver.release();await driver.tap('KeyR',110);await record('recover car after sustained blocked throttle');passing=null;turnSign=0;stagnant=0;slowTime=0;continue;}
      if (previous && distance(s.position, previous) < .02) stagnant++; else stagnant = 0;
      if (stagnant > 20) {
        if(++passes>4)throw Error(`Driving stuck at ${JSON.stringify(s.position)} targeting ${JSON.stringify(target)}`);
        const streetDistance=Math.min(Math.abs(s.position.x-Math.round(s.position.x/108)*108),Math.abs(s.position.z-Math.round(s.position.z/108)*108));
        if(streetDistance>12||passes>=2){
          await driver.release();await driver.tap('KeyR',110);
          passing=null;turnSign=0;stagnant=0;await record('recover trapped car through held control');continue;
        }
        await vehicleInput(-1,0);await driver.step(45);await stop();
        const vertical=Math.abs(target.z-s.position.z)>Math.abs(target.x-s.position.x);
        const lane=vertical?Math.round(s.position.x/108)*108:Math.round(s.position.z/108)*108;
        passing=vertical?{x:lane+(s.position.x>lane?-5:5),z:s.position.z+Math.sign(target.z-s.position.z)*15}:{x:s.position.x+Math.sign(target.x-s.position.x)*15,z:lane+(s.position.z>lane?-5:5)};
        turnSign=0;stagnant=0;await record(`pass blocked traffic ${passes}`);
      }
      previous = s.position;
      if (tick && tick % 200 === 0) await record(`driving ${target.x},${target.z} tick ${tick}`);
    }
    throw Error(`Driving frame budget exhausted targeting ${JSON.stringify(target)}`);
  }
  
  async function route(points) { for (const [x, z] of points) { await driveTo({ x, z }); await record(`waypoint ${x},${z}`); } }
  
  async function fight() {
    for (let i = 0; i < 80; i++) {
      const s = await session.state();
      assert(!s.screen, `combat interrupted by ${s.screen}`);
      if (s.mission.current.type !== 'combat') { await driver.release(); return; }
      if (mode === 'gamepad') await driver.pad({ buttons: { 6: 1, 7: 1 } });
      else if (mode === 'touch') { await driver.touchButton('KeyC', true); await driver.touchButton('KeyJ', true); }
      else await driver.keyboard(['KeyC', 'KeyJ']);
      await driver.step(15);
    }
    throw Error('Combat exceeded twenty seconds');
  }
  return {log,record,footTo,vehicleInput,stop,driveTo,route,fight};
}
