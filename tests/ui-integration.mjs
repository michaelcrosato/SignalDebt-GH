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
async function screen(page) { return page.evaluate(() => __PIXEL_ENGINE__.game.ui.screen); }
async function screenshot(page, name) { await page.waitForTimeout(180); await page.screenshot({ path: `${out}/${name}.png` }); report.screenshots.push(`${name}.png`); }
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
  await pad(page, 13); await pad(page, 0); check('Replacing a save requires confirmation', await screen(page) === 'title');
  await pad(page, 0); check('Gamepad new story opens briefing', await screen(page) === 'brief');
  await pad(page, 0); check('Gamepad begins story', await screen(page) === null);
  await pad(page, 3); check('Gamepad triangle completes Meet Bo', await page.evaluate(() => __PIXEL_ENGINE__.game.story.stage) === 1);
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
  await touch.locator('.sd-touch-top button').first().tap(); check('Touch pause button', await screen(touch) === 'pause');
  await touch.locator('[data-action=options]').tap(); check('Touch options', await screen(touch) === 'options');
  await screenshot(touch, 'touch-options');
  await touch.locator('[data-action=back]').tap(); check('Touch options back', await screen(touch) === 'pause');
  await touch.locator('[data-action=resume]').tap(); check('Touch resume', await screen(touch) === null);
  check('Portrait has no horizontal overflow', await touch.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await touch.close();
  check('No browser page errors', report.errors.length === 0);
} catch (error) { report.failure = error.stack; throw error; }
finally { writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2)); await browser.close(); }
