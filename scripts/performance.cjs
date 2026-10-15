#!/usr/bin/env node
// Real rendered-frame sampling. Never calls engine.step(). Scenario positioning
// is benchmark setup, not campaign verification. Run with other browser jobs idle.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('playwright-core');
const args = process.argv.slice(2);
const value = (key, fallback) => args.includes(key) ? args[args.indexOf(key) + 1] : fallback;
const url = value('--url', 'http://localhost:8080/');
const output = path.resolve(value('--out', 'docs/performance-native.json'));
const seconds = Math.max(3, Number(value('--seconds', 12)));
const warmup = Math.max(1, Number(value('--warmup', 3)));
const browserPath = value('--browser', process.platform === 'win32' ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' : undefined);
const probeOnly = args.includes('--probe-only');
const allowSoftware = args.includes('--allow-software');
const headed = args.includes('--headed');
const width = Number(value('--width', 1920)), height = Number(value('--height', 1080));
const root = path.resolve(__dirname, '..');
const report = {
  schemaVersion: 1, startedAtUtc: new Date().toISOString(), url,
  method: 'Real render callbacks and engine measured FPS; no manual simulation during samples. No screenshots or GPU readback during measured windows.',
  scenarioSetup: 'Script positions player/car and spawns a representative six-enemy/two-pursuer scene. Health is held at 100 during that stress scene. This is not evidence of story completion.',
  runtime: { platform: process.platform, node: process.version, browserExecutable: browserPath ?? 'Playwright Chromium', headless: !headed },
  viewport: { width, height }, warmupSeconds: warmup, sampleSeconds: seconds,
  sourceHashes: Object.fromEntries(['world.js','models.js','vehicles.js','actors.js','city-game.js','game.js'].map(file => [file, crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex')])),
  scenarios: [], errors: [], limitations: ['Representative scenes, not every frame of the full campaign.','Headless Chrome presentation is not a physical TV display measurement.','Galaxy S25 is not verified by this desktop run.'],
};
const save = () => { fs.mkdirSync(path.dirname(output), { recursive: true }); fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n'); };
(async () => {
  let browser;
  try {
    browser = await chromium.launch({ executablePath: browserPath, headless: !headed, args: process.platform === 'win32' ? [] : ['--enable-unsafe-webgpu'] });
    report.runtime.browserVersion = await browser.version();
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    await page.addInitScript(() => {
      window.__performanceAdapterRequests = [];
      if (!navigator.gpu) return;
      const request = navigator.gpu.requestAdapter.bind(navigator.gpu);
      navigator.gpu.requestAdapter = async options => {
        const adapter = await request(options);
        const i = adapter?.info;
        window.__performanceAdapterRequests.push({ options: options ?? null, info: i ? { vendor: i.vendor, architecture: i.architecture, device: i.device, description: i.description, isFallbackAdapter: i.isFallbackAdapter } : null });
        return adapter;
      };
    });
    page.on('pageerror', error => report.errors.push(error.message));
    const cdp = await browser.newBrowserCDPSession();
    const system = await cdp.send('SystemInfo.getInfo');
    report.systemGpu = { devices: system.gpu.devices, features: system.gpu.featureStatus, renderer: system.gpu.auxAttributes.glRenderer, processCrashCount: system.gpu.auxAttributes.processCrashCount };
    await page.goto(url);
    await page.waitForFunction(() => window.__PIXEL_ENGINE__?.game?.ready, { timeout: 120000 });
    report.engine = await page.evaluate(async () => {
      const e = window.__PIXEL_ENGINE__;
      const gameRequests = [...window.__performanceAdapterRequests];
      const queried = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
      const brief = a => a ? { vendor: a.info.vendor, architecture: a.info.architecture, device: a.info.device, description: a.info.description, isFallbackAdapter: a.info.isFallbackAdapter } : null;
      return { version: e.state().version, backend: e.state().backend, adapter: brief(queried), engineAdapter: gameRequests.find(r => r.info)?.info ?? null, engineAdapterRequests: gameRequests, resolution: e.renderer.resolution, quality: e.quality, frameCap: e.maxFps, look: e.renderer.mode };
    });
    const adapter = report.engine.engineAdapter ?? report.engine.adapter;
    report.hardwareAdapter = !!adapter && !adapter.isFallbackAdapter && !/swiftshader|llvmpipe|software/i.test(JSON.stringify(adapter));
    console.log(JSON.stringify({ browser: report.runtime.browserVersion, adapter, devices: report.systemGpu.devices, hardwareAdapter: report.hardwareAdapter }));
    save();
    if (!report.hardwareAdapter && !allowSoftware) throw new Error('Hardware WebGPU adapter not verified; pass --allow-software only for an explicitly software-only diagnostic.');
    if (probeOnly) return;
    await page.evaluate(() => {
      const e = window.__PIXEL_ENGINE__, g = e.game;
      g.action('new'); g.action('begin'); g.ui.hide(); g.story.active = false;
      e.timeScale = 1; e.manual = false;
    });
    for (const scenario of ['garage-on-foot', 'driving-district', 'combat-and-pursuit']) {
      await page.evaluate(async name => {
        const e = window.__PIXEL_ENGINE__, g = e.game;
        for (const key of ['KeyW','KeyS','KeyA','KeyD','KeyJ']) e.input.setKey(key, false);
        g.clearHeat(); g.clearEnemies(); g.exitCar(true); g.ui.hide(); g.health = 100;
        if (name === 'garage-on-foot') g.player.teleport([-18, .2, 18]);
        if (name === 'driving-district') {
          const car = g.rides[0]; car.reset([-185, 1.2, -108], Math.PI / 2); car.integrity = 100;
          g.enterCar(car); e.input.setKey('KeyW', true);
        }
        if (name === 'combat-and-pursuit') {
          g.player.teleport([145, .2, 145]); await g.spawnEnemies({ x: 145, y: 0, z: 145 }, 6); g.addHeat(3);
        }
        e.camera.teleport(g.cameraTarget()); e.manual = false; e.timeScale = 1;
      }, scenario);
      await page.waitForTimeout(warmup * 1000);
      const measurement = await page.evaluate(async ({ seconds, scenario }) => {
        const e = window.__PIXEL_ENGINE__, g = e.game;
        const samples = [], frames = [];
        const stop = e.renderer.onBeforeRender(() => frames.push(performance.now()));
        const start = performance.now(), startFrame = e.frame;
        const timer = setInterval(() => {
          if (scenario === 'combat-and-pursuit') g.health = 100;
          samples.push({ elapsedSeconds: (performance.now() - start) / 1000, engineFps: e.fps, engineFrame: e.frame, physicsStepMs: e.physics.stepMs });
        }, 250);
        await new Promise(resolve => setTimeout(resolve, seconds * 1000));
        const end = performance.now(); stop(); clearInterval(timer);
        const intervals = frames.slice(1).map((t,i) => t - frames[i]).sort((a,b) => a-b);
        const fps = samples.map(s => s.engineFps).sort((a,b) => a-b);
        const q = (arr,p) => arr[Math.min(arr.length-1,Math.floor(arr.length*p))] ?? null;
        const rendering = e.renderer.renderer.info;
        return {
          elapsedSeconds: (end-start)/1000, renderedFrames: frames.length,
          renderedFps: frames.length / ((end-start)/1000), engineFrameDelta: e.frame-startFrame,
          engineFps: { minimum: fps[0], p05: q(fps,.05), median: q(fps,.5), p95: q(fps,.95), maximum: fps.at(-1) },
          frameIntervalMs: { median: q(intervals,.5), p95: q(intervals,.95), p99: q(intervals,.99), maximum: intervals.at(-1) },
          state: { manual: e.manual, paused: e.paused, timeScale: e.timeScale, quality: e.quality, resolution: e.renderer.resolution, position: {...g.position}, speed: g.ride?.speed ?? 0, integrity: g.ride?.integrity ?? null, enemies: g.enemies.filter(x=>x.health>0).length, police: g.police.length, sceneObjects: e.scene.children.length },
          rendererInfo: { calls: rendering.render.calls, triangles: rendering.render.triangles, geometries: rendering.memory.geometries, textures: rendering.memory.textures },
          errors: [...e.errors], gpuErrors: [...e.renderer.gpuErrors], samples,
        };
      }, { seconds, scenario });
      // The image is captured after timing and does not add readback/compositing
      // work to any measured interval.
      const screenshot = path.join(path.dirname(output), `${path.basename(output, '.json')}-${scenario}.png`);
      await page.screenshot({ path: screenshot });
      report.scenarios.push({ name: scenario, ...measurement, screenshot: path.basename(screenshot) }); save();
      console.log(JSON.stringify({ scenario, renderedFps: measurement.renderedFps, engineFps: measurement.engineFps, frameIntervalMs: measurement.frameIntervalMs, errors: measurement.errors }));
    }
  } catch (error) {
    report.errors.push(error.message); process.exitCode = 1;
    console.error(error.message);
  } finally {
    report.finishedAtUtc = new Date().toISOString(); save();
    if (report.scenarios.length) {
      const frames = report.scenarios.reduce((n,s) => n + s.renderedFrames, 0);
      const elapsed = report.scenarios.reduce((n,s) => n + s.elapsedSeconds, 0);
      report.summary = {
        aggregateRenderedFps: frames / elapsed,
        minimumScenarioRenderedFps: Math.min(...report.scenarios.map(s => s.renderedFps)),
        maximumScenarioP95FrameIntervalMs: Math.max(...report.scenarios.map(s => s.frameIntervalMs.p95)),
        assessment: report.scenarios.length === 3 && report.scenarios.every(s => s.renderedFps >= 59.5 && s.engineFps.median >= 60 && !s.errors.length && !s.gpuErrors.length)
          ? 'Nominal 60fps cap sustained in all three sampled scenes. This does not establish every frame of the full campaign.'
          : 'Inspect individual scenarios; the three-scene nominal 60fps condition was not established.',
        nominal60fpsCriterion: 'At least 59.5 average rendered fps per scene (sampling-boundary tolerance), median engine FPS 60, and no engine/GPU errors.',
      };
    }
    save();
    await browser?.close();
  }
})();
