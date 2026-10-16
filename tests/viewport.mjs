// Actual WebGPU viewport review, distinct from browser fallback-shell checks.
// Start npm run dev, then: node tests/viewport.mjs [--url http://127.0.0.1:8080] [--out /tmp/signal-debt-viewports]
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url); let chromium;
for (const module of ['playwright', 'playwright-core']) { try { chromium = require(module).chromium; break; } catch {} }
assert(chromium, 'Playwright is required.');
const arg = (name, fallback) => process.argv.includes(name) ? process.argv[process.argv.indexOf(name) + 1] : fallback;
const base = arg('--url', 'http://127.0.0.1:8080'); const out = resolve(arg('--out', '/tmp/signal-debt-viewports')); mkdirSync(out, { recursive: true });
const sizes = [
  { name: 'small-phone', width: 360, height: 640, touch: true },
  { name: 'portrait-phone', width: 390, height: 844, touch: true },
  { name: 'portrait-tablet', width: 820, height: 1180, touch: true },
  { name: 'landscape', width: 1920, height: 1080, touch: false },
  { name: 'ultrawide', width: 2560, height: 1080, touch: false },
];
const report = { url: base, backend: 'Chromium WebGPU / SwiftShader', devices: [], limitations: ['WebGPU software rendering is functional coverage, not physical-device performance.', 'Real iOS Safari is unavailable; separate installed viewport-matrix results describe WebKit support.'] };
const browser = await chromium.launch({ headless: true, args: ['--enable-unsafe-webgpu', '--enable-features=Vulkan', '--use-vulkan=swiftshader', '--use-angle=swiftshader', '--use-webgpu-adapter=swiftshader'] });
async function press(page, key) { await page.keyboard.down(key); await page.evaluate(() => __PIXEL_ENGINE__.step(2)); await page.keyboard.up(key); await page.evaluate(() => __PIXEL_ENGINE__.step(2)); }
async function inspect(page, stage, result) {
  const wasManual = await page.evaluate(() => __PIXEL_ENGINE__.manual);
  try {
    await page.evaluate(() => new Promise((resolve, reject) => {
      const e = __PIXEL_ENGINE__; let frames = 0;
      const off = e.renderer.onBeforeRender(() => { if (++frames >= 3) { off(); clearTimeout(timer); resolve(); } });
      const timer = setTimeout(() => { off(); reject(Error('Three actual renders did not arrive')); }, 20000);
      e.manual = false;
    }));
    await page.waitForTimeout(150);
  } finally { await page.evaluate(manual => { __PIXEL_ENGINE__.manual = manual; }, wasManual); }
  const evidence = await page.evaluate(stage => {
    const visible = e => { const r = e.getBoundingClientRect(), s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.display !== 'none' && s.visibility !== 'hidden' && !e.closest('[hidden]'); };
    const rect = e => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, right: r.right, bottom: r.bottom, width: r.width, height: r.height }; };
    const selectors = ['.sd-objective', '.sd-status', '.sd-radar', '.sd-equipment', '.sd-subtitle', '.sd-prompt', '.sd-toast', '.sd-touch-stick', '.sd-touch-top button', '.sd-touch-action'];
    const elements = stage.startsWith('hud') ? selectors.flatMap(selector => [...document.querySelectorAll(selector)].filter(visible).map((e, i) => ({ name: selector + (e.dataset.code || i), ...rect(e) }))) : [];
    const overlaps = [];
    for (let i = 0; i < elements.length; i++) for (let j = i + 1; j < elements.length; j++) {
      const a = elements[i], b = elements[j], w = Math.min(a.right, b.right) - Math.max(a.x, b.x), h = Math.min(a.bottom, b.bottom) - Math.max(a.y, b.y);
      if (w > 2 && h > 2) overlaps.push({ a: a.name, b: b.name, width: w, height: h });
    }
    const outside = elements.filter(r => r.x < -1 || r.y < -1 || r.right > innerWidth + 1 || r.bottom > innerHeight + 1);
    const targets = [...document.querySelectorAll('.sd-touch-action,.sd-touch-top button')].filter(visible).map(e => ({ name: e.textContent, ...rect(e) }));
    return { stage, overflow: document.documentElement.scrollWidth > innerWidth + 1, overlaps, outside, targets, status: __PIXEL_ENGINE__.game.status(), mode: __PIXEL_ENGINE__.game.ui.mode };
  }, stage);
  result.screens.push(evidence); assert.equal(evidence.overflow, false, `${result.name}/${stage}: horizontal overflow`);
  if (evidence.outside.length) result.issues.push({ stage, outside: evidence.outside });
  if (evidence.overlaps.length) result.issues.push({ stage, overlaps: evidence.overlaps });
  for (const target of evidence.targets) assert(target.width >= 44 && target.height >= 44, `${result.name}: touch target ${target.name} is too small`);
  await page.screenshot({ path: `${out}/${result.name}-${stage}.png` });
}
try {
  for (const size of sizes) {
    const result = { ...size, screens: [], errors: [], issues: [] }; report.devices.push(result);
    const page = await browser.newPage({ viewport: { width: size.width, height: size.height }, deviceScaleFactor: 1, hasTouch: size.touch, isMobile: size.touch });
    page.on('pageerror', e => result.errors.push(e.message));
    await page.goto(`${base}/${size.touch ? '?touch=1' : ''}`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.__PIXEL_ENGINE__?.game?.ready, null, { timeout: 120000 });
    await page.evaluate(() => { __PIXEL_ENGINE__.manual = true; });
    await inspect(page, 'title', result);
    const activate = async selector => { if (size.touch) await page.locator(selector).tap(); else await page.locator(selector).click(); await page.evaluate(() => __PIXEL_ENGINE__.step(2)); };
    await activate('[data-action=options]'); await inspect(page, 'options', result);
    await activate('[data-action=back]'); assert.equal(await page.locator('.sd-overlay').evaluate(e => e.scrollTop), 0, 'Returning from options resets menu scroll'); await activate('[data-action=new]'); await activate('[data-action=begin]');
    await page.evaluate(() => __PIXEL_ENGINE__.step(8));
    assert.equal(await page.evaluate(() => __PIXEL_ENGINE__.game.ui.screen), null);
    await inspect(page, 'hud-interact', result);
    if (size.touch) { await activate('.sd-touch-action[data-code=KeyF]'); } else await press(page, 'f');
    assert.equal(await page.evaluate(() => __PIXEL_ENGINE__.game.story.stage), 1, `${size.name}: real Meet Bo objective must complete`);
    await inspect(page, 'hud-checkpoint', result);
    assert.equal(result.errors.length, 0, `${size.name}: browser page errors`);
    console.log(`${size.name}: ${result.screens.length} views, ${result.issues.length} layout issues`);
    await page.close();
  }
} catch (error) { report.failure = error.stack; throw error; }
finally { writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 2)); await browser.close(); }
assert.equal(report.devices.reduce((n, d) => n + d.issues.length, 0), 0, 'Critical HUD/touch overlap or viewport clipping found; inspect report and PNGs.');
console.log(`Viewport review passed; screenshots and report: ${out}`);
