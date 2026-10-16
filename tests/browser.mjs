// Browser helpers for input-only playthroughs. Game state is observed, never assigned.
// The only test hooks are a standard Gamepad device and the engine's manual clock.
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import {createHash} from 'node:crypto';

export const WEBGPU_ARGS = ['--enable-unsafe-webgpu', '--enable-features=Vulkan', '--use-vulkan=swiftshader', '--use-angle=swiftshader', '--use-webgpu-adapter=swiftshader'];
export const readableError = value => String(value).replace(/data:application\/wasm;base64,[A-Za-z0-9+/=]+/g, '<bundled Rapier WASM>');

export function browserToolkit() {
  const require = createRequire(import.meta.url);
  for (const name of ['playwright', 'playwright-core']) {
    try { return require(name); } catch {}
  }
  const root = execSync('npm root -g', { encoding: 'utf8' }).trim();
  for (const name of ['playwright', 'playwright-core']) {
    try { return require(join(root, name)); } catch {}
  }
  throw Error('Install playwright or playwright-core before running browser verification.');
}

export async function launchGame(url = 'http://127.0.0.1:8080/', { mode = 'keyboard', viewport = mode === 'touch' ? { width: 390, height: 844 } : { width: 1280, height: 720 }, out = `/tmp/signal-debt-${mode}`, storageState } = {}) {
  const { chromium } = browserToolkit();
  const browser = await chromium.launch({ headless: true, args: WEBGPU_ARGS });
  const context = await browser.newContext({ viewport, hasTouch: mode === 'touch', isMobile: mode === 'touch', storageState });
  const page = await context.newPage();
  const errors = [], warnings = [], rumble = [], sourceHashes={};
  page.on('response',async response=>{const name=new URL(response.url()).pathname.split('/').at(-1);if(['city-game.js','missions.js','ui.js','navigation.js','world.js','actors.js','vehicles.js','game.js'].includes(name))try{sourceHashes[name]=createHash('sha256').update(await response.body()).digest('hex');}catch{}});
  page.on('pageerror', error => errors.push(readableError(error.message)));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(readableError(message.text()));
    else if (message.type() === 'warning') warnings.push(readableError(message.text()));
  });
  await page.exposeFunction('__reviewRumble', effect => rumble.push(effect));
  await page.addInitScript(({ connected }) => {
    const pad = {
      id: 'DualSense / scripted standard controller', index: 0, connected,
      mapping: 'standard', timestamp: 0, axes: [0, 0, 0, 0],
      buttons: Array.from({ length: 18 }, () => ({ pressed: false, touched: false, value: 0 })),
      vibrationActuator: { type: 'dual-rumble', playEffect: async (type, values) => { window.__reviewRumble({ type, ...values }); return 'complete'; } },
    };
    window.__reviewPad = pad;
    Object.defineProperty(navigator, 'getGamepads', { configurable: true, value: () => pad.connected ? [pad, null, null, null] : [] });
  }, { connected: mode === 'gamepad' });
  mkdirSync(out, { recursive: true });
  const destination = new URL(url);
  if (mode === 'touch') destination.searchParams.set('touch', '1');
  await page.goto(destination.href);
  await page.waitForFunction(() => window.__PIXEL_ENGINE__?.state().ready, null, { timeout: 90000 });
  await page.evaluate(() => { window.__PIXEL_ENGINE__.manual = true; });
  const cdp = await context.newCDPSession(page);
  const driver = new GameDriver(page, cdp, mode);
  return {
    browser, context, page, driver, mode, out, errors, warnings, rumble, sourceHashes,
    async state() { return inspectGame(page); },
    async shot(name) {
      await page.evaluate(async () => {
        const engine = window.__PIXEL_ENGINE__;
        const previous=engine.manual;
        await new Promise((resolve,reject)=>{
          let rendered=0;
          const timeout=setTimeout(()=>{off();engine.manual=previous;reject(Error('Three rendered frames were not produced for screenshot'));},8000);
          const off=engine.renderer.onBeforeRender(()=>{if(++rendered===3){off();clearTimeout(timeout);requestAnimationFrame(resolve);}});
          engine.manual=false;
        });
        engine.manual = previous;
      });
      const path = join(out, `${name}.png`);
      await page.screenshot({ path });
      return path;
    },
    async save(name, data = {}) {
      const report = { mode, url: destination.href,sourceHashes,inputDrivenSeconds:driver.playedSeconds,scriptedFrames:driver.frames,inputEvents:{keyboard:driver.keyboardEvents,gamepad:driver.padCommands,touch:driver.touchEvents,touchMenus:driver.touchMenus},state: await inspectGame(page), errors, warnings, rumble, ...data };
      writeFileSync(join(out, `${name}.json`), JSON.stringify(report, null, 2));
      return report;
    },
    async close() { await browser.close(); },
  };
}

export async function inspectGame(page) {
  return page.evaluate(() => {
    const e = window.__PIXEL_ENGINE__, g = e.game;
    const p = g.position ?? g.player?.position?.() ?? g.actor?.position?.() ?? null;
    const story = g.story;
    const vec = v => v ? { x: v.x, y: v.y, z: v.z } : null;
    return {
      engine: e.state(), position: vec(p), health: g.health, ammo: g.ammo, reserve: g.reserve,
      heat: g.heat, heatState: g.heatState, playTime: g.playTime, cash: g.cash, signalHealth:g.signalHealth,
      ride: g.ride ? { id: g.ride.id, position: vec(g.ride.position), speed: g.ride.speed, yaw: g.ride.yaw, integrity: g.ride.integrity } : null,
      screen: g.ui?.screen, inputMode: g.ui?.mode, selected: g.ui?.selected,
      menus: g.ui?.controls?.map(control => ({ action: control.action, value: control.value, label: control.element?.innerText })),
      mission: story ? { mission: story.mission, stage: story.stage, active: story.active, finished: story.finished, completed: story.completed, progress: story.progress,wave:story.wave,approach:story.approach,target: vec(story.target()), current: story.current, history: story.history } : null,
      enemies: g.enemies?.filter(enemy => enemy.health > 0).map(enemy => ({ health: enemy.health, attack:enemy.attack,telegraph:enemy.telegraph,at: vec(enemy.actor?.position?.() ?? enemy.position ?? enemy.mesh?.position) })),
      pendingSpawns:g.pendingSpawns,
      courier: g.courier ? { at: vec(g.courier.position),velocity:vec(g.courier.body.linvel()),damage:g.courierDamage,stopped: g.courierStopped } : null,
      rides:g.rides?.map(ride=>({id:ride.id,at:vec(ride.position),yaw:ride.yaw,speed:ride.speed,integrity:ride.integrity,kind:ride.kind})),
      lift:g.world?.lift?{at:vec(g.world.lift.body.translation()),velocity:vec(g.world.lift.body.linvel()),collider:g.world.lift.body.collider(0).handle,landing:g.world.lift.landing}:null,
      hero:g.player?{state:g.player.hero.state,grounded:g.player.hero.grounded,groundCollider:g.player.hero.groundCollider,animation:g.player.hero.anim}:null,
      input: { w:e.input.isDown('KeyW'),s:e.input.isDown('KeyS'),a:e.input.isDown('KeyA'),d:e.input.isDown('KeyD'),analog:{...e.input.analog},pad:{...e.input.padAxis},touchHeld:[...(g.ui?.touchHeld??[])] },
      prompt: g.contextPrompt,
      basis: { right: e.camera.groundBasis().right.toArray(), forward: e.camera.groundBasis().forward.toArray() },
    };
  });
}

export class GameDriver {
  constructor(page, cdp, mode) { Object.assign(this, { page, cdp, mode }); this.keys = new Set(); this.touches = new Map(); this.buttons = {};this.playedSeconds=0;this.frames=0;this.keyboardEvents=0;this.padCommands=0;this.touchEvents=0;this.touchMenus=0; }
  async step(frames = 1) { const played=await this.page.evaluate(n=>{const e=window.__PIXEL_ENGINE__,before=e.game.playTime??0;e.step(n);const elapsed=(e.game.playTime??0)-before;return elapsed>=0&&elapsed<=n/60+.1?elapsed:0;},frames);this.playedSeconds+=played;this.frames+=frames; }
  async keyboard(held = []) {
    const next = new Set(held);
    for (const key of this.keys) if (!next.has(key)) {await this.page.keyboard.up(key);this.keyboardEvents++;}
    for (const key of next) if (!this.keys.has(key)) {await this.page.keyboard.down(key);this.keyboardEvents++;}
    this.keys = next;
  }
  async pad({ axes = [0, 0, 0, 0], buttons = {} } = {}) {
    this.padCommands++;
    await this.page.evaluate(({ axes, buttons }) => {
      const pad = window.__reviewPad;
      pad.connected = true; pad.timestamp += 1; pad.axes = axes;
      pad.buttons = pad.buttons.map((_, i) => { const value = Number(buttons[i] ?? 0); return { value, pressed: value > 0.5, touched: value > 0 }; });
    }, { axes, buttons });
  }
  async touch(id, at) {
    this.touchEvents++;
    const existed = this.touches.has(id);
    const previous = this.touches.get(id);
    if (at) this.touches.set(id, { id, x: at.x, y: at.y }); else this.touches.delete(id);
    // CDP touchEnd names the contact being lifted. Passing all remaining contacts
    // instead releases the joystick while leaving the old gas pedal pressed.
    await this.cdp.send('Input.dispatchTouchEvent', { type: !at ? 'touchEnd' : existed ? 'touchMove' : 'touchStart', touchPoints: !at ? (previous ? [previous] : []) : [...this.touches.values()] });
  }
  async stick(x = 0, y = 0) {
    if (Math.hypot(x, y) < 0.001) { if (this.touches.has(1)) await this.touch(1, null); return; }
    const r = await this.page.locator('.sd-touch-stick').boundingBox();
    if (!r) throw Error('Touch joystick is unavailable');
    await this.touch(1, { x: r.x + r.width / 2 + x * r.width * 0.34, y: r.y + r.height / 2 - y * r.width * 0.34 });
  }
  async touchButton(code, held = true) {
    const codes = ['KeyV', 'ShiftLeft', 'Space', 'KeyR', 'KeyC', 'KeyJ', 'KeyS', 'KeyW', 'KeyF'];
    const id = 10 + codes.indexOf(code);
    if (!held) { if (this.touches.has(id)) await this.touch(id, null); return; }
    const button = this.page.locator(`.sd-touch-action[data-code="${code}"]:visible`).first();
    const r = await button.boundingBox();
    if (!r) throw Error(`Touch button ${code} is unavailable`);
    await this.touch(id, { x: r.x + r.width / 2, y: r.y + r.height / 2 });
  }
  async release() {
    await this.keyboard([]);
    if (this.mode === 'gamepad') await this.pad();
    for (const id of [...this.touches.keys()]) await this.touch(id, null);
  }
  async tap(key, frames = 2) {
    if (this.mode === 'gamepad') {
      const map = { Enter: 0, Escape: 1, ArrowUp: 12, ArrowDown: 13, ArrowLeft: 14, ArrowRight: 15, KeyF: 3, KeyR: 2, Space: 0, KeyV: 4, ShiftLeft: 5, KeyC: 6, KeyJ: 7 };
      if (map[key] === undefined) throw Error(`No controller mapping for ${key}`);
      await this.pad({ buttons: { [map[key]]: 1 } }); await this.step(frames); await this.pad(); await this.step(2);
    } else if (this.mode === 'touch' && key !== 'Enter' && key !== 'Escape' && !key.startsWith('Arrow')) {
      await this.touchButton(key, true); await this.step(frames); await this.touchButton(key, false); await this.step(2);
    } else { await this.keyboard([key]); await this.step(frames); await this.keyboard([]); await this.step(2); }
  }
  async choose(action, value) {
    for (let attempts = 0; attempts < 30; attempts++) {
      const state = await inspectGame(this.page);
      const index = state.menus?.findIndex(item => item.action === action && (value === undefined || item.value === value));
      if (index < 0 || index === undefined) throw Error(`Menu ${state.screen} has no ${action}:${value}`);
      if (this.mode === 'touch') {
        this.touchMenus++;
        await this.page.locator(`.sd-menu-button[data-action="${action}"]`).nth(state.menus.slice(0, index).filter(item => item.action === action).length).tap();
        await this.step(3); return;
      }
      if (state.selected === index) { await this.tap('Enter'); return; }
      await this.tap('ArrowDown');
    }
    throw Error(`Could not select ${action}`);
  }
}
