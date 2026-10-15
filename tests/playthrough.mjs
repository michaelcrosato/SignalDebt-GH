// Usage: node tests/playthrough.mjs --mode keyboard|gamepad|touch [--url URL]
// This smoke phase starts a real objective via public inputs. Campaign navigation
// can import launchGame/GameDriver; no teleport or completion hooks are used.
import assert from 'node:assert/strict';
import { launchGame } from './browser.mjs';

const option = (key, fallback) => process.argv.includes(key) ? process.argv[process.argv.indexOf(key) + 1] : fallback;
const mode = option('--mode', 'keyboard');
const session = await launchGame(option('--url', 'http://127.0.0.1:8080/'), { mode });
const checkpoints = [];
try {
  const first = await session.state();
  assert.equal(first.screen, 'title', 'integrated game must open at its title menu');
  await session.shot('title');
  await session.driver.choose('new');
  let state = await session.state();
  if (state.screen === 'title') await session.driver.choose('new'); // explicit overwrite confirmation, if a save exists
  state = await session.state();
  assert.equal(state.screen, 'brief');
  checkpoints.push({ kind: 'brief', state });
  await session.shot('brief');
  await session.driver.choose('begin');
  state = await session.state();
  assert.equal(state.mission?.active, true);
  checkpoints.push({ kind: 'started', state });
  await session.driver.tap('KeyF', 12);
  state = await session.state();
  checkpoints.push({ kind: 'interaction', state });
  await session.shot('first-objective');
  await session.save('playthrough', { checkpoints, scope: 'Title, brief, campaign start and first interaction. This smoke does not claim a full campaign.' });
  assert.equal(session.errors.length, 0, session.errors.join('\n'));
  console.log(JSON.stringify({ mode, stage: state.mission?.stage, status: state.engine.status, out: session.out }, null, 2));
} catch (error) {
  await session.shot('failure').catch(() => {});
  await session.save('failure', { checkpoints, failure: error.message }).catch(() => {});
  throw error;
} finally { await session.close(); }
