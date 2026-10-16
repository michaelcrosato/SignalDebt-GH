// Bounded visual fixture, not a campaign playthrough: place Ren beside an untouched
// evidence case, activate scan through V, and capture real rendered active/restored frames.
import assert from 'node:assert/strict';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { launchGame } from './browser.mjs';

const root = resolve(new URL('..', import.meta.url).pathname);
const out = '/tmp/signal-debt-scan-review';
const session = await launchGame('http://127.0.0.1:8080/', { mode: 'keyboard', viewport: { width: 1280, height: 720 }, out });
const { page, driver } = session;
const report = { purpose: 'Rendered signal scan and normal-look restoration', fixture: 'Player placement only, six metres south of uncollected evidence case 3; not a campaign completion test.', input: 'Real keyboard KeyV', backend: 'Chromium WebGPU with SwiftShader software rendering; visual verification only', browser: session.browser.version(), checks: [] };
const check = (label, result) => { report.checks.push({ label, result }); assert(result, label); };
const state = () => page.evaluate(async () => {
  const { LOOK_PRESETS, looksEqual, THREE } = await import('/pixel-engine.js');
  const e = __PIXEL_ENGINE__, g = e.game, cache = g.caches[3];
  const projected = cache.mesh.getWorldPosition(new THREE.Vector3()).project(e.camera.camera);
  return { scan: g.scan, cooldown: g.scanCooldown, nightLook: looksEqual(e.look, LOOK_PRESETS.night_ops), look: JSON.parse(JSON.stringify(e.look)), scale: cache.mesh.scale.toArray(), taken: cache.taken, visible: cache.mesh.visible, casePosition: { ...cache.at }, caseOnScreen: { x: (projected.x + 1) * innerWidth / 2, y: (1 - projected.y) * innerHeight / 2 }, scanLabelVisible: !document.querySelector('.sd-scan').hidden, engineErrors: [...e.errors], gpuErrors: e.state().gpuErrors };
});
try {
  await driver.choose('new'); await driver.choose('begin'); await driver.tap('KeyF');
  report.baseline = await page.evaluate(() => {
    const e = __PIXEL_ENGINE__, g = e.game, cache = g.caches[3];
    const from = g.position.clone?.().toArray() ?? [g.position.x, g.position.y, g.position.z];
    g.player.teleport([cache.at.x, .3, cache.at.z + 6]); e.step(120);
    return { from, placed: [g.position.x, g.position.y, g.position.z], look: JSON.parse(JSON.stringify(e.look)), scale: cache.mesh.scale.toArray(), taken: cache.taken };
  });
  check('Evidence is untouched before scan', !report.baseline.taken);
  await driver.tap('KeyV');
  const activeFile = await session.shot('scan-active'); report.active = await state();
  check('V activates scan while the image is rendered', report.active.scan > 0 && report.active.scanLabelVisible);
  check('Rendered active frame uses night-ops look', report.active.nightLook);
  check('Evidence case doubles in size and stays uncollected', report.active.scale.every(n => n === 2) && !report.active.taken && report.active.visible);
  check('Evidence case is inside the captured viewport', report.active.caseOnScreen.x > 0 && report.active.caseOnScreen.x < 1280 && report.active.caseOnScreen.y > 0 && report.active.caseOnScreen.y < 720);
  await driver.step(300);
  const restoredFile = await session.shot('scan-restored'); report.restored = await state();
  check('Scan expires and removes its HUD label', report.restored.scan === 0 && !report.restored.scanLabelVisible);
  check('Original look returns after scan', JSON.stringify(report.restored.look) === JSON.stringify(report.baseline.look));
  check('Evidence returns to its original size', report.restored.scale.every(n => n === 1) && !report.restored.taken);
  check('Rendered effect has no browser or engine errors', session.errors.length === 0 && report.active.engineErrors.length === 0 && report.restored.engineErrors.length === 0 && Array.isArray(report.active.gpuErrors) && report.active.gpuErrors.length === 0 && Array.isArray(report.restored.gpuErrors) && report.restored.gpuErrors.length === 0);
  report.sourceHashes = session.sourceHashes;
  report.images = ['scan-active.png', 'scan-restored.png'];
  report.rendering = 'Each capture waits for three PixelRenderer.onBeforeRender callbacks and a presentation frame with the live render loop, then restores manual mode.';
  report.review = 'PNG visual inspection is recorded separately after generation.';
  mkdirSync(resolve(root, 'docs'), { recursive: true });
  copyFileSync(activeFile, resolve(root, 'docs/scan-active.png')); copyFileSync(restoredFile, resolve(root, 'docs/scan-restored.png'));
} catch (error) { report.failure = error.stack; throw error; }
finally { writeFileSync(resolve(out, 'report.json'), JSON.stringify(report, null, 2)); writeFileSync(resolve(root, 'docs/scan-review.json'), JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2)); await session.close(); }
