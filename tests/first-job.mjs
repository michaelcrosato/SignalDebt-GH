// Input-only driving/combat traversal; no position, health, or mission state writes.
import { launchGame, readableError } from './browser.mjs';
import { makeNavigator } from './campaign-driver.mjs';
import {runOpening} from './opening-route.mjs';
const arg = (key, fallback) => process.argv.includes(key) ? process.argv[process.argv.indexOf(key) + 1] : fallback;
const mode = arg('--mode', 'keyboard');
const session = await launchGame(arg('--url', 'http://127.0.0.1:8080/'), { mode, out: `/tmp/signal-debt-first-job-${mode}` });
const { driver } = session;
const {log,record,footTo,vehicleInput,stop,driveTo,route,fight}=makeNavigator(session);

try {
  await runOpening(session,{log,record,footTo,route,fight});
} catch (error) {
  await record(`FAILED ${readableError(error.message)}`).catch(() => {});
  await session.shot('failure').catch(() => {});
  await session.save('failure', { log, failure: readableError(error.message) }).catch(() => {});
  throw Error(readableError(error.message));
} finally { await session.context.storageState({path:`${session.out}/checkpoint-browser.json`}); await session.close(); }
