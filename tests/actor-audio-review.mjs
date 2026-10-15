// Reproducible engine API review. Output stays outside the repository.
// node tests/actor-audio-review.mjs [--out /tmp/signal-debt-actor-review]
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : '/tmp/signal-debt-actor-review');
mkdirSync(out, { recursive: true });
const require = createRequire(import.meta.url);
let chromium;
for (const name of ['playwright', 'playwright-core']) {
  try { chromium = require(name).chromium; break; } catch {}
}
if (!chromium) {
  const globalRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();
  for (const name of ['playwright', 'playwright-core']) {
    try { chromium = require(join(globalRoot, name)).chromium; break; } catch {}
  }
}
assert(chromium, 'Install playwright or playwright-core beside the game before running this review.');
const html = `<!doctype html><html><head><link rel="icon" href="data:,"></head><body><div id="app"></div><script type="module">
import {Engine,THREE,toonMaterial,mergeStaticMeshes} from '/pixel-engine.js';
import {createActor} from '/actors.js';
import {CityAudio} from '/audio.js';
class Review {
 name='Signal Debt actor review'; control={};
 async setup(ctx){this.ctx=ctx;this.actor=await createActor(ctx,{at:[0,0,0]});this.sound=new CityAudio(ctx);const floor=new THREE.Mesh(new THREE.BoxGeometry(30,1,30),toonMaterial(ctx.palette.slate));floor.position.y=-.5;floor.receiveShadow=true;ctx.scene.add(floor);ctx.physics.addStaticBox({position:[0,-.5,0],halfExtents:[15,.5,15]});ctx.physics.addStaticBox({position:[4,1,0],halfExtents:[.3,1,4]});const wall=new THREE.Mesh(new THREE.BoxGeometry(.6,2,8),toonMaterial(ctx.palette.orange));wall.position.set(4,1,0);ctx.scene.add(wall);}
 fixedUpdate(ctx,dt){this.actor.move(dt,this.control);}
 update(ctx,dt){this.actor.update(dt);this.sound.update(dt,{speed:this.actor.hero.speed,heat:this.heat??0,inVehicle:this.driving??false});}
 cameraTarget(){return this.actor?.model.position??new THREE.Vector3();}
 status(){return this.actor?.hero.anim??'starting';}
}
await Engine.start(new Review(),{container:document.getElementById('app'),aspect:'fill',camera:{preset:'iso',zoom:1.8},settings:{button:false},quality:'low',touch:false});
</script></body></html>`;
const server = createServer((req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (path === '/' || path === '/review.html') return res.writeHead(200, { 'Content-Type': 'text/html' }).end(html);
  if (path === '/favicon.ico') return res.writeHead(204).end();
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) return res.writeHead(404).end('Missing');
  res.writeHead(200, { 'Content-Type': extname(file) === '.js' ? 'text/javascript' : 'application/json' }).end(readFileSync(file));
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const browser = await chromium.launch({ headless: true, args: ['--enable-unsafe-webgpu', '--enable-features=Vulkan', '--use-vulkan=swiftshader', '--use-angle=swiftshader', '--use-webgpu-adapter=swiftshader'] });
try {
  const page = await browser.newPage({ viewport: { width: 960, height: 720 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/review.html`);
  await page.waitForFunction(() => window.__PIXEL_ENGINE__?.state().ready, null, { timeout: 60000 });
  const runtime = await page.evaluate(() => {
    const e = window.__PIXEL_ENGINE__, g = e.game;
    e.manual = true;
    e.step(60);
    const ground = g.actor.position().toArray();
    g.control = { x: 1, z: 0 };
    e.step(45);
    const jog = g.actor.position().toArray();
    e.step(120);
    const wall = g.actor.position().toArray();
    g.actor.teleport([0, 0, 0]);
    g.control = { x: 0, z: 1, sprint: true };
    e.step(45);
    const sprint = g.actor.position().toArray();
    g.actor.teleport([0, 0, 0]);
    g.control = {};
    e.step(4);
    g.control = { x: -1, z: 0, dodge: true };
    e.step(4);
    const dodge = { at: g.actor.position().toArray(), active: g.actor.dodging, animation: g.actor.hero.anim, mix: g.actor.hero.animationMix() };
    g.control = {};
    e.step(60);
    const recovered = { at: g.actor.position().toArray(), active: g.actor.dodging, animation: g.actor.hero.anim };
    g.heat = 2;
    e.step(1);
    const pursuit = g.sound.mood;
    g.heat = 0; g.driving = true;
    e.step(1);
    const driving = g.sound.mood;
    for (const name of ['shoot', 'hit', 'mission', 'interact', 'reload', 'punch', 'crash', 'repair']) g.sound.event(name);
    g.driving = false;g.actor.teleport([0,0,0]);e.step(60);
    return { ground, jog, wall, sprint, dodge, recovered, pursuit, driving, soundCounts: e.audio.counts, errors: e.errors, gpuErrors: e.state().gpuErrors };
  });
  assert(runtime.ground[1] > -0.08 && runtime.ground[1] < 0.15, 'actor should stand on the floor');
  assert(runtime.jog[0] > 1.8, 'jog should respond and move');
  assert(runtime.wall[0] < 3.6, 'solid wall should stop the capsule');
  assert(runtime.sprint[2] > runtime.jog[0] + 0.5, 'sprint must be meaningfully faster');
  assert(runtime.dodge.active && runtime.dodge.animation === 'Roll', 'dodge must visibly animate');
  assert(!runtime.recovered.active && runtime.recovered.at[1] < 0.15, 'dodge must end grounded');
  assert.equal(runtime.pursuit, 'pursuit'); assert.equal(runtime.driving, 'driving');
  assert.equal(runtime.errors.length, 0); assert.equal(runtime.gpuErrors.length, 0);
  await page.evaluate(async () => { const e = window.__PIXEL_ENGINE__; await e.renderer.capture(); });
  await page.screenshot({ path: join(out, 'actor.png') });
  await page.mouse.click(24, 24);
  const soundReview = await page.evaluate(async () => {
    const { renderSound } = await import('/pixel-engine.js');
    const { CITY_SOUNDS } = await import('/audio.js');
    const sounds = {};
    for (const [name, def] of Object.entries(CITY_SOUNDS)) {
      const samples = renderSound(def);
      let peak = 0, energy = 0;
      for (const value of samples) { peak = Math.max(peak, Math.abs(value)); energy += value * value; }
      sounds[name] = { samples: samples.length, peak, rms: Math.sqrt(energy / samples.length) };
    }
    const audio = window.__PIXEL_ENGINE__.audio;
    return { unlocked: audio.unlocked, contextState: audio.context?.state, sounds };
  });
  assert(soundReview.unlocked && soundReview.contextState === 'running', 'a pointer gesture must unlock audio');
  for (const [name, sound] of Object.entries(soundReview.sounds)) assert(sound.rms > 0 && sound.peak <= 1, `${name} must synthesize audible, bounded samples`);

  const review = await page.evaluate(async () => {
    const {loadModel,HERO_MODEL,HERO_RIG,compileClips,renderSheet,analyzeClip,validateClip,ENGINE_VERSION} = await import('/pixel-engine.js');
    const {ACTOR_CLIPS,styleActor} = await import('/actors.js');
    const model = (await loadModel(HERO_MODEL)).scene;
    const clips = compileClips(ACTOR_CLIPS,HERO_RIG,model);
    styleActor(model);
    const sheets=[];
    for(const def of ACTOR_CLIPS){
      const clip=clips.find(c=>c.name===def.name);
      const report=analyzeClip(model,HERO_RIG,def,clip);
      const sheet=renderSheet(model,HERO_RIG,def,clip,{views:['side','front','three'],scale:64,skeleton:true,trails:true,report});
      const canvas=document.createElement('canvas');canvas.width=sheet.width;canvas.height=sheet.height;
      canvas.getContext('2d').putImageData(new ImageData(sheet.data,sheet.width,sheet.height),0,0);
      sheets.push({name:def.name,report,validation:validateClip(def,HERO_RIG),width:sheet.width,height:sheet.height,png:canvas.toDataURL('image/png').split(',')[1]});
    }
    return {engine:ENGINE_VERSION,sheets};
  });
  for (const sheet of review.sheets) {
    writeFileSync(join(out, `${sheet.name}.png`), Buffer.from(sheet.png, 'base64'));
    delete sheet.png;
    assert.equal(sheet.validation.length, 0, `${sheet.name}: invalid clip data`);
  }
  assert.equal(errors.length, 0, errors.join('\n'));
  const disposed = await page.evaluate(() => { const g = window.__PIXEL_ENGINE__.game; g.actor.dispose(); g.sound.dispose(); return { removed: !g.actor.model.parent, loopsStopped: g.sound.engine.stopped && g.sound.siren.stopped }; });
  assert(disposed.removed && disposed.loopsStopped, 'owned actors and loops must clean up');
  writeFileSync(join(out, 'report.json'), JSON.stringify({ ...review, runtime, soundReview, disposed, errors }, null, 2));
  console.log(JSON.stringify({ out, runtime, clips: review.sheets.map(sheet => ({ name: sheet.name, problems: sheet.report.problems, warnings: sheet.report.warnings })) }, null, 2));
} finally {
  await browser.close();
  server.close();
}
