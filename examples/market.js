// Market Corner: library models and the game's own fruit stall on a cobbled square at dusk.
// Nothing to play: a scene to look at, and to build yours from (ASSETS.md).
import { addModelColliders, buildModel, DEFAULT_TEXEL, Engine, hudSprite, PALETTE, TEXTURE_LIBRARY, textureMap, THREE, toonMaterial, withUrlOptions } from '../pixel-engine.js';
import { MODELS } from './market-models.js';

const { Color, Mesh, PlaneGeometry, Vector3 } = THREE;

// [id, position, options]: buildModel's options (params, palette, seed, light) and a turn in degrees
const SCENE = [
  ['fruit-stall', [0, 0, -1.4]], // ours (market-models.js)
  ['market-stall', [-4, 0, 0.6], { turn: 90, palette: { cloth: 'blue' } }], // re-coloured
  ['lamp-post', [1, 0, 1.6], { light: { intensity: 10 } }], // it carries a light: brighter
  ['well', [3.8, 0, -2.2]],
  ['fence', [-0.5, 0, -3.4], { params: { length: 7 } }],
  ['barrel', [-1.8, 0, 1.2]],
  ['crate', [-1.1, 0, 1.7], { turn: 20 }],
  ['sack', [2.4, 0, 1], { params: { h: 0.6 } }],
  ['oak', [-3.2, 0, -3.4], { params: { h: 3 }, seed: 2 }],
];

class MarketCorner {
  name = 'Market Corner';
  placed = [];
  lights = [];
  target = new Vector3(-0.3, 1, -0.9);

  setup(ctx) {
    const { scene, physics, engine } = ctx;
    engine.sun.intensity = 1.4; // dusk, so the lamp shows (the engine resets it for the next game)
    engine.ambient.color.setHex(PALETTE.navy);
    scene.background = new Color(PALETTE.night);

    // The floor: a library surface on a plain mesh. A 32-texel tile at 8 texels a metre covers
    // 4 m, so the UVs count tiles (the map is cached and shared: never scale it).
    const tile = TEXTURE_LIBRARY.get('cobbles').size[0] / DEFAULT_TEXEL;
    const ground = new PlaneGeometry(16, 16).rotateX(-Math.PI / 2);
    ground.attributes.uv.array.forEach((v, i, uv) => (uv[i] = (v * 16) / tile));
    const floor = new Mesh(ground, toonMaterial(PALETTE.white, { map: textureMap('cobbles') }));
    floor.receiveShadow = true;
    scene.add(floor);
    physics.addStaticBox({ position: [0, -0.5, 0], halfExtents: [8, 0.5, 8] });

    for (const [id, at, { turn = 0, ...options } = {}] of SCENE) {
      const m = buildModel(id, { ...options, catalog: MODELS });
      m.object.position.set(...at);
      m.object.rotation.y = (turn * Math.PI) / 180;
      m.object.updateMatrixWorld();
      scene.add(m.object);
      addModelColliders(physics, m, at, m.object.rotation.y);
      // a model's light is in its own space: place it with the model
      if (m.light) this.lights.push(ctx.lights.request({ ...m.light, position: m.object.localToWorld(new Vector3(...m.light.at)) }));
      this.placed.push(m);
    }
    this.icon = hudSprite('gold-icon');
  }

  update(ctx) {
    ctx.hud.clear();
    ctx.hud.sprite(6, 6, this.icon.rows, this.icon.colors);
    ctx.hud.text(26, 10, 'MARKET CORNER', { color: 'sand' });
  }

  cameraTarget() {
    return this.target;
  }

  status() {
    return `market: ${this.placed.length} models, ${this.lights.length} light`;
  }
}

await Engine.start(new MarketCorner(), withUrlOptions({ container: document.getElementById('app'), camera: { preset: 'iso', zoom: 1.6 } }));
