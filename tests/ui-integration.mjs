// Real-engine UI review. Start the game server first: npm run dev.
// node tests/ui-integration.mjs [--url http://127.0.0.1:8080] [--out /tmp/signal-debt-ui-integration]
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url);
let chromium;
for (const name of ['playwright', 'playwright-core']) { try { chromium = require(name).chromium; break; } catch {} }
assert(chromium, 'Playwright or playwright-core must be installed.');
const arg = (name, fallback) => process.argv.includes(name) ? process.argv[process.argv.indexOf(name) + 1] : fallback;
const url = arg('--url', 'http://127.0.0.1:8080');
const out = resolve(arg('--out', '/tmp/signal-debt-ui-integration')); mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--enable-unsafe-webgpu', '--enable-features=Vulkan', '--use-vulkan=swiftshader', '--use-angle=swiftshader', '--use-webgpu-adapter=swiftshader'] });
const report = { url, checks: [], errors: [], screenshots: [], limitations: ['Software WebGPU is not the RTX 3060 Ti or Galaxy S25 performance target.', 'Chromium touch emulation does not verify real iOS Safari.'] };
const check = (label, result) => { report.checks.push({ label, result }); assert(result, label); };
async function boot(options = {}) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, ...options });
  page.on('pageerror', e => report.errors.push(e.message));
  await page.goto(url + (options.hasTouch ? '/?touch=1' : '/'), { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__PIXEL_ENGINE__?.game?.ready, null, { timeout: 120000 });
  return page;
}
async function waitScreen(page, expected) {
  try { await page.waitForFunction(value => __PIXEL_ENGINE__.game.ui.screen === value, expected, { timeout: 15000 }); }
  catch (error) {
    report.failedScreenState = await page.evaluate(() => ({ screen: __PIXEL_ENGINE__.game.ui.screen, mode: __PIXEL_ENGINE__.game.ui.mode, frame: __PIXEL_ENGINE__.frame, commandFrame: __PIXEL_ENGINE__.game.ui.commandFrame, input: __PIXEL_ENGINE__.input.state(), commands: __PIXEL_ENGINE__.recording().frames.flatMap(frame => frame.commands || []).slice(-12), engineErrors: __PIXEL_ENGINE__.errors }));
    throw error;
  }
}
async function screen(page) { return page.evaluate(() => __PIXEL_ENGINE__.game.ui.screen); }
async function screenshot(page, name) {
  const wasManual = await page.evaluate(() => __PIXEL_ENGINE__.manual);
  try {
    await page.evaluate(() => new Promise((resolve, reject) => {
      const e = __PIXEL_ENGINE__; let renders = 0;
      const off = e.renderer.onBeforeRender(() => { if (++renders >= 3) { off(); clearTimeout(timer); resolve(); } });
      const timer = setTimeout(() => { off(); reject(Error('Three actual rendered frames did not arrive')); }, 20000);
      e.manual = false;
    }));
    await page.waitForTimeout(150);
  } finally { await page.evaluate(manual => { __PIXEL_ENGINE__.manual = manual; }, wasManual); }
  await page.screenshot({ path: `${out}/${name}.png` }); report.screenshots.push(`${name}.png`);
}
async function key(page, code, frames = 2) {
  await page.keyboard.down(code); await page.evaluate(n => __PIXEL_ENGINE__.step(n), frames); await page.keyboard.up(code); await page.evaluate(() => __PIXEL_ENGINE__.step(2));
}
async function pad(page, index, frames = 2) {
  await page.evaluate(({ index, frames }) => { __uiPad.buttons[index] = { pressed: true, value: 1 }; __PIXEL_ENGINE__.step(frames); __uiPad.buttons[index] = { pressed: false, value: 0 }; __PIXEL_ENGINE__.step(2); }, { index, frames });
}
try {
  const page = await boot();
  await screenshot(page, 'desktop-title');
  await page.evaluate(() => { __PIXEL_ENGINE__.manual = true; });
  check('Initial title', await screen(page) === 'title');
  await key(page, 'Enter'); check('Keyboard new story opens briefing', await screen(page) === 'brief');
  await screenshot(page, 'desktop-brief');
  await key(page, 'Enter'); check('Keyboard briefing starts play', await screen(page) === null);
  await page.evaluate(() => __PIXEL_ENGINE__.step(12));
  await key(page, 'f');
  const objective = await page.evaluate(() => ({ stage: __PIXEL_ENGINE__.game.story.stage, label: __PIXEL_ENGINE__.game.story.current.label }));
  check('F completes the real Meet Bo objective', objective.stage === 1); report.objective = objective;
  await screenshot(page, 'desktop-hud');
  await key(page, 'Escape'); check('Escape opens pause', await screen(page) === 'pause');
  await key(page, 'Escape'); check('Escape closes pause without reopening', await screen(page) === null);
  await key(page, 'm'); check('M opens map', await screen(page) === 'map'); await screenshot(page, 'desktop-map');
  await key(page, 'Escape'); check('Escape closes map without opening pause', await screen(page) === null);
  await key(page, 'Escape'); await key(page, 'ArrowDown'); await key(page, 'ArrowDown'); await key(page, 'ArrowDown'); await key(page, 'Enter');
  check('Keyboard navigates pause to options', await screen(page) === 'options');
  const before = await page.evaluate(() => __PIXEL_ENGINE__.settings.values.pixelArt ?? true);
  await key(page, 'ArrowDown'); await key(page, 'ArrowRight');
  check('Picture option changes real engine settings', await page.evaluate(() => __PIXEL_ENGINE__.settings.values.pixelArt) === !before);
  await key(page, 'ArrowLeft');
  await screenshot(page, 'desktop-options');
  await key(page, 'Escape'); check('Options returns to pause', await screen(page) === 'pause');
  await key(page, 'Escape'); check('Pause resumes after options', await screen(page) === null);
  await page.evaluate(() => { window.__uiPad = { id: 'Scripted standard gamepad', index: 0, connected: true, mapping: 'standard', axes: [0, 0, 0, 0], buttons: Array.from({ length: 17 }, () => ({ pressed: false, value: 0 })) }; navigator.getGamepads = () => [window.__uiPad]; });
  await pad(page, 9); check('Gamepad Options opens pause', await screen(page) === 'pause');
  await pad(page, 13); await pad(page, 0); check('Gamepad confirms district map', await screen(page) === 'map');
  await pad(page, 1); check('Gamepad back returns map to pause', await screen(page) === 'pause');
  await pad(page, 13); await pad(page, 13); await pad(page, 13); await pad(page, 0); check('Gamepad navigates options', await screen(page) === 'options');
  await pad(page, 15); check('Gamepad adjusts real look', Boolean(await page.evaluate(() => __PIXEL_ENGINE__.settings.values.look)));
  await pad(page, 14); await pad(page, 1); await pad(page, 1); check('Gamepad back resumes gameplay', await screen(page) === null);
  check('Gamepad prompts follow last input', await page.evaluate(() => __PIXEL_ENGINE__.game.ui.mode) === 'gamepad');
  await screenshot(page, 'gamepad-hud');
  await pad(page, 9); await pad(page, 12); await pad(page, 0); check('Gamepad returns to title', await screen(page) === 'title');
  await pad(page, 0); check('Gamepad Continue resumes checkpoint', await screen(page) === null && await page.evaluate(() => __PIXEL_ENGINE__.game.story.stage) === 1);
  const continued = await page.evaluate(() => __PIXEL_ENGINE__.recording().frames.flatMap(frame => frame.commands || []).filter(command => command.type === 'ui-action' && command.action === 'continue').at(-1));
  check('Continue recording embeds the actual checkpoint', continued?.value?.checkpoint?.story?.stage === 1 && continued.value.checkpoint.version === 1);
  await pad(page, 9); await pad(page, 12); await pad(page, 0); check('Gamepad can return to title after Continue', await screen(page) === 'title');
  await pad(page, 13); await pad(page, 0); check('Replacing a save requires confirmation', await screen(page) === 'title');
  await pad(page, 0); check('Gamepad new story opens briefing', await screen(page) === 'brief');
  await pad(page, 0); check('Gamepad begins story', await screen(page) === null);
  await pad(page, 3); check('Gamepad triangle completes Meet Bo', await page.evaluate(() => __PIXEL_ENGINE__.game.story.stage) === 1);
  await page.evaluate(() => __PIXEL_ENGINE__.game.ui.show('help'));
  await pad(page, 13);
  const helpLabel = () => page.evaluate(() => [...document.querySelectorAll('.sd-help-table>div')].find(row => row.firstElementChild.textContent === 'Signal scan').lastElementChild.textContent);
  check('Open Help shows controller scan binding', await helpLabel() === 'L1');
  await key(page, 'z');
  check('Open Help refreshes keyboard binding without rebuilding focus', await helpLabel() === 'V' && await page.evaluate(() => document.activeElement === __PIXEL_ENGINE__.game.ui.controls[0].element));
  await pad(page, 4);
  check('Open Help switches back to controller binding with focus preserved', await helpLabel() === 'L1' && await page.evaluate(() => document.activeElement === __PIXEL_ENGINE__.game.ui.controls[0].element));
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.evaluate(() => __PIXEL_ENGINE__.game.ui.show('ending', { title: 'The signal stays.', body: 'The ledger is public. The evictions are frozen. Bo’s garage is still open, Iona has a new frequency, and Ren finally owes the city nothing. Explore the Breakwater, take a courier run, or replay the story.', stats: { time: 1898.2999999986023, cash: 7375 } }));
  const formatted = await page.locator('.sd-stats dd').allTextContents();
  check('Ending formats elapsed time and money', formatted[0] === '31:38' && formatted[1] === '$7,375');
  await screenshot(page, 'ending-format-fixture');
  await pad(page, 12);
  check('Controller can reveal the final ending action at 720p', await page.evaluate(() => { const ui = __PIXEL_ENGINE__.game.ui, selected = ui.controls[ui.selected], r = selected.element.getBoundingClientRect(); return selected.action === 'quit' && r.top >= 0 && r.bottom <= innerHeight && ui.overlay.scrollTop > 0; }));
  await screenshot(page, 'ending-final-action-fixture');
  const fullscreenMessages = await page.evaluate(async () => {
    const ui = __PIXEL_ENGINE__.game.ui, element = document.documentElement;
    const request = element.requestFullscreen, query = navigator.permissions.query;
    const queried = [];
    try {
      element.requestFullscreen = async () => { throw new TypeError('Fullscreen request denied'); };
      navigator.permissions.query = async descriptor => { queried.push(descriptor); return { state: 'granted' }; };
      await ui.fullscreen(); const automatic = ui.notice.textContent;
      navigator.permissions.query = async () => ({ state: 'prompt' });
      await ui.fullscreen(); return { automatic, gesture: ui.notice.textContent, queried };
    } finally { element.requestFullscreen = request; navigator.permissions.query = query; }
  });
  check('Fullscreen rejection with automatic permission explains Chrome cooldown', fullscreenMessages.automatic === 'Chrome briefly limits repeat fullscreen requests. Try again in five seconds.' && fullscreenMessages.queried[0]?.name === 'fullscreen' && fullscreenMessages.queried[0]?.allowWithoutGesture === true);
  check('Fullscreen rejection without automatic permission explains gesture requirement', fullscreenMessages.gesture === 'Fullscreen needs a click or key press on this browser.');
  const persisted = await page.evaluate(async () => {
    const { loadSettings } = await import('/pixel-engine.js');
    const e = __PIXEL_ENGINE__, ui = e.game.ui; ui.show('options');
    const option = label => ui.controls.find(control => control.element.querySelector('.sd-action-label')?.textContent === label);
    for (const label of ['Scene look', 'Pixel rendering', 'Pixel size', 'Frame rate', 'Performance display']) option(label).adjust(1);
    for (let i = 0; i < 4 && e.settings.values.quality !== 'low'; i++) option('Lighting quality').adjust(1);
    for (const label of ['Master', 'Sound effects', 'Music']) option(label).adjust(-1);
    return { picture: { ...e.settings.values }, sound: { ...e.audio.volume }, key: e.settings.key, stored: loadSettings(e.settings.key) };
  });
  check('Picture menu writes the stable per-game storage key', persisted.key === 'signal-debt-picture-v1' && Object.keys(persisted.stored).length > 0);
  await page.reload({ waitUntil: 'domcontentloaded' }); await page.waitForFunction(() => window.__PIXEL_ENGINE__?.game?.ready, null, { timeout: 120000 });
  const reloaded = await page.evaluate(() => ({ picture: { ...__PIXEL_ENGINE__.settings.values }, sound: { ...__PIXEL_ENGINE__.audio.volume }, quality: __PIXEL_ENGINE__.quality, fps: __PIXEL_ENGINE__.maxFps, debug: __PIXEL_ENGINE__.debugShown }));
  report.settingsReload = { before: persisted, after: reloaded };
  for (const field of ['look', 'pixelArt', 'pixelSize', 'quality', 'fps', 'debugInfo']) check(`Picture ${field} survives a real page reload`, reloaded.picture[field] === persisted.picture[field]);
  check('Reloaded picture choices are applied to the engine', reloaded.quality === persisted.picture.quality && reloaded.fps === persisted.picture.fps && reloaded.debug === persisted.picture.debugInfo);
  for (const field of ['master', 'sfx', 'music']) check(`Audio ${field} survives a real page reload`, Math.abs(reloaded.sound[field] - persisted.sound[field]) < 0.000001);
  await page.close();
  const touch = await boot({ viewport: { width: 360, height: 780 }, hasTouch: true, isMobile: true });
  await screenshot(touch, 'touch-title');
  await touch.locator('.sd-menu-button[data-action=new]').tap();
  await touch.waitForFunction(() => __PIXEL_ENGINE__.game.ui.screen === 'brief');
  await touch.locator('.sd-menu-button[data-action=begin]').tap();
  await touch.waitForFunction(() => !__PIXEL_ENGINE__.game.ui.screen);
  await touch.locator('.sd-touch-action[data-code=KeyF]').tap();
  await touch.waitForFunction(() => __PIXEL_ENGINE__.game.story.stage === 1, null, { timeout: 15000 });
  check('Touch interaction completes Meet Bo', true);
  const cdp = await touch.context().newCDPSession(touch); const r = await touch.locator('.sd-touch-stick').boundingBox(); const x = r.x + r.width / 2, y = r.y + r.height / 2;
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x + 20, y: y - 20 }] });
  const analog = await touch.evaluate(() => ({ ...__PIXEL_ENGINE__.input.analog })); check('Touch stick supplies analog movement', analog.x > 0.3 && analog.y > 0.3);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  check('Touch stick releases to zero', await touch.evaluate(() => __PIXEL_ENGINE__.input.analog.x === 0 && __PIXEL_ENGINE__.input.analog.y === 0));
  await screenshot(touch, 'touch-hud');
  await touch.locator('.sd-touch-top button').first().tap(); await waitScreen(touch, 'pause'); check('Touch pause button', await screen(touch) === 'pause');
  await touch.locator('[data-action=options]').tap(); await waitScreen(touch, 'options'); check('Touch options', await screen(touch) === 'options');
  await screenshot(touch, 'touch-options');
  await touch.locator('[data-action=back]').tap(); await waitScreen(touch, 'pause'); check('Touch options back', await screen(touch) === 'pause');
  await touch.locator('[data-action=resume]').tap(); await waitScreen(touch, null); check('Touch resume', await screen(touch) === null);
  check('Portrait has no horizontal overflow', await touch.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  const commandEvidence = await touch.evaluate(() => __PIXEL_ENGINE__.recording().frames.flatMap(frame => frame.commands || []).filter(command => command.type === 'ui-action').map(command => command.action));
  report.recordedTouchActions = commandEvidence;
  for (const action of ['new', 'begin', 'pause', 'options', 'back', 'resume']) check(`Touch ${action} is recorded as input`, commandEvidence.includes(action));
  const replayEvidence = await touch.evaluate(async () => {
    const e = __PIXEL_ENGINE__, recording = e.recording(); e.manual = true;
    const { SignalDebt } = await import('/city-game.js');
    await e.replay(recording, () => e.loadGame(new SignalDebt()));
    return { stage: e.game.story.stage, screen: e.game.ui.screen, engineErrors: [...e.errors] };
  });
  report.inputReplay = replayEvidence;
  check('Engine replay reproduces touch Meet Bo without DOM clicks', replayEvidence.stage === 1 && replayEvidence.screen === null && replayEvidence.engineErrors.length === 0);
  const once = await touch.evaluate(() => {
    const e = __PIXEL_ENGINE__, g = e.game, update = g.update, onAction = g.ui.onAction; let calls = 0;
    g.ui.onAction = (action, value) => { if (action === 'options') calls++; onAction(action, value); };
    g.update = function(ctx, dt) { update.call(this, ctx, dt); this.ui.update(dt || 1 / 60); };
    e.input.send({ type: 'ui-action', action: 'options' }); e.step(1);
    g.update = update; g.ui.onAction = onAction; return calls;
  });
  check('A delivered UI command runs once even if UI update repeats in the frame', once === 1);
  const replayPresentation = await touch.evaluate(() => {
    const ui = __PIXEL_ENGINE__.game.ui;
    ui.show('brief', { title: 'Borrowed Ignition', replay: true }); const note = ui.overlay.querySelector('.sd-replay-note')?.textContent;
    ui.show('debrief', { title: 'Borrowed Ignition', replay: true }); const next = ui.overlay.querySelector('[data-action=next]')?.textContent;
    return { note, next };
  });
  check('Replay briefing explains campaign checkpoint preservation', replayPresentation.note?.includes('campaign checkpoint is preserved'));
  check('Replay debrief offers Return to story', replayPresentation.next?.includes('Return to story'));
  await touch.evaluate(() => {
    const e = __PIXEL_ENGINE__, g = e.game, car = g.rides[0], p = car.position;
    e.manual = true; g.ui.hide(); g.player.teleport([p.x + 2, 0.3, p.z]); e.step(3);
    e.input.setKey('KeyF', true); e.step(2); e.input.setKey('KeyF', false); e.step(2);
    window.__recoverCalls = 0; const recover = g.recoverCar;
    g.recoverCar = function() { window.__recoverCalls++; return recover.call(this); };
  });
  check('Portrait recovery fixture enters the loaner through interaction', await touch.evaluate(() => __PIXEL_ENGINE__.game.ride?.id) === 'loaner');
  const recover = touch.locator('.sd-touch-drive[data-code=KeyR]'); const recoverRect = await recover.boundingBox();
  check('Drive RECOVER has a safe touch target', recoverRect?.width >= 44 && recoverRect?.height >= 44);
  const driveOverlap = await touch.evaluate(() => {
    const controls = [...document.querySelectorAll('.sd-touch-action')].map(e => ({ element: e, rect: e.getBoundingClientRect() })).filter(x => x.rect.width > 0);
    return controls.flatMap((a, i) => controls.slice(i + 1).filter(b => Math.min(a.rect.right, b.rect.right) - Math.max(a.rect.left, b.rect.left) > 1 && Math.min(a.rect.bottom, b.rect.bottom) - Math.max(a.rect.top, b.rect.top) > 1)).length;
  });
  check('Portrait drive buttons do not overlap', driveOverlap === 0);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: recoverRect.x + recoverRect.width / 2, y: recoverRect.y + recoverRect.height / 2 }] });
  await touch.evaluate(() => __PIXEL_ENGINE__.step(105));
  check('Holding RECOVER invokes vehicle recovery', await touch.evaluate(() => __recoverCalls) === 1);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await touch.evaluate(() => __PIXEL_ENGINE__.step(3));
  check('Releasing RECOVER releases R', await touch.evaluate(() => !__PIXEL_ENGINE__.input.isDown('KeyR')));
  await screenshot(touch, 'touch-drive-recovery');
  await touch.close();
  check('No browser page errors', report.errors.length === 0);
} catch (error) { report.failure = error.stack; throw error; }
finally { writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2)); await browser.close(); }
