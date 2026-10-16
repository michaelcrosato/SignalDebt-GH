import assert from 'node:assert/strict';
import {makeNavigator} from './campaign-driver.mjs';

// The complete first story job, performed through the same public input driver.
export async function runOpening(session, nav=makeNavigator(session)) {
  const {driver}=session;
  const {log,record,footTo,route,fight}=nav;
  await driver.choose('new'); await driver.choose('begin'); await driver.tap('KeyF', 4);
  await record('Bo met');
  await footTo({ x: -9, z: 0 }, 2.8); await driver.tap('KeyF');
  assert.equal((await session.state()).ride?.id, 'loaner');
  await record('loaner entered');
  await route([[-108, 0], [-108, -216], [-187, -216], [-187, -187]]);
  await driver.tap('KeyF'); await fight(); await record('impound clear');
  await footTo({ x: -186, z: -181 }, 3.2); await driver.tap('KeyF', 160);
  // Walk around the solid hood, then approach the passenger side away from the
  // loaner; walking straight through the car is deliberately not permitted.
  await footTo({ x: -179, z: -185 }, 1.1);
  await footTo({ x: -180, z: -192 }, 1.1); await driver.tap('KeyF');
  assert.equal((await session.state()).ride?.id, 'cormorant');
  await record('Cormorant recovered');
  await route([[-187,-216],[-108,-216],[-108,108],[-80,108],[-80,90]]);
  await route([[-80,108],[216,108],[216,120],[235,120]]);
  await route([[216,120],[216,108],[-216,108],[-216,145],[-185,145]]);
  await route([[-216,145],[-216,108],[108,108],[108,-108],[145,-108],[145,-80]]);
  await route([[145,-108],[108,-108],[108,108],[145,108],[145,145]]);
  await route([[145,108],[0,108],[0,0],[-9,0]]);
  await driver.tap('KeyF'); await footTo({ x: -18, z: 15 }, 3.2); await driver.tap('KeyF', 4);
  const state = await record('job complete');
  assert.equal(state.mission.completed, 1);
  assert.equal(session.errors.length, 0, session.errors.join('\n'));
  await session.shot('first-job-complete');
  await session.save('first-job', { log, completion: 'First story job through public inputs only' });
  return {state,log};
}
