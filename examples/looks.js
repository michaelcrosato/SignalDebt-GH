// Look Lab: one scene, six looks. Keys 1-6 pick a look, T toggles chunky pixels on the custom
// one. Walk around (WASD): characters & objects (the 'actors' layer) and the environment each
// get their own look.
import { compileClips, Engine, HERO_CLIPS, HERO_MODEL, HERO_RIG, LOOK_PRESETS, mergeStaticMeshes, PlatformerCharacter, readMoveInput, setLookLayer, THREE, toonMaterial, withUrlOptions } from '../pixel-engine.js';

const { BoxGeometry, Mesh, Vector3 } = THREE;

// A look of our own: pixel-art characters on a clean, cel-shaded world, a vignette on top.
const STORYBOOK_HEROES = {
  scene: [{ id: 'vignette', params: { intensity: 0.35 } }],
  actors: { pixel: { size: 1, outline: 0.85, crease: 0.2 }, filters: [{ id: 'nes' }] },
  environment: { pixel: null, filters: [{ id: 'cel', params: { bands: 4, ink: 0.6 } }] },
};
const LOOKS = [
  ['default', LOOK_PRESETS.none],
  ['storybook heroes', STORYBOOK_HEROES],
  ['pixel heroes', LOOK_PRESETS.pixel_heroes],
  ['noir', LOOK_PRESETS.noir],
  ['sin city', LOOK_PRESETS.sin_city],
  ['handheld', LOOK_PRESETS.handheld],
];

class LookLab {
  name = 'Look Lab';
  assets = [HERO_MODEL, 'assets/coin.glb', 'assets/tree.glb'];
  current = 1;
  target = new Vector3();

  async setup(ctx) {
    const { scene, physics, palette } = ctx;
    const parts = [];
    for (const [x, z, w, h, d, c] of [[0, 0, 16, 1, 12, 'green'], [-4, -3, 2, 2, 2, 'slate'], [4, -3, 3, 1, 2, 'sand'], [0, -5, 6, 3, 1, 'plum']]) {
      const y = c === 'green' ? -0.5 : h / 2;
      physics.addStaticBox({ position: [x, y, z], halfExtents: [w / 2, h / 2, d / 2] });
      const m = new Mesh(new BoxGeometry(w, h, d), toonMaterial(palette[c]));
      m.position.set(x, y, z);
      m.castShadow = m.receiveShadow = true;
      parts.push(m);
    }
    scene.add(...mergeStaticMeshes(parts));
    for (const [x, z] of [[-6, 3], [6, 2], [-2, -4]]) {
      const tree = await ctx.loadModel('assets/tree.glb'); // environment: no layer tag
      tree.scene.position.set(x, 0, z);
      scene.add(tree.scene);
    }
    // Objects on the actors layer: coins and a crate.
    const coin = await ctx.loadModel('assets/coin.glb');
    this.coins = [[-1.5, 0.6, 1], [0, 0.6, 1], [1.5, 0.6, 1]].map(([x, y, z]) => {
      const c = coin.scene.clone(true);
      c.position.set(x, y, z);
      setLookLayer(c, 'actors');
      scene.add(c);
      return c;
    });
    const crate = new Mesh(new BoxGeometry(1, 1, 1), toonMaterial(palette.orange));
    crate.position.set(3, 0.5, 2);
    crate.castShadow = true;
    setLookLayer(crate, 'actors');
    scene.add(crate);
    physics.addStaticBox({ position: [3, 0.5, 2], halfExtents: [0.5, 0.5, 0.5] });

    const hero = await ctx.loadModel(HERO_MODEL);
    this.model = hero.scene;
    setLookLayer(this.model, 'actors');
    scene.add(this.model);
    this.hero = new PlatformerCharacter(physics, { position: [0, 0, 3], lockDepth: ctx.camera.lockDepth });
    this.hero.attachModel(this.model, compileClips(HERO_CLIPS, HERO_RIG, this.model), HERO_RIG);
  }

  fixedUpdate(ctx, dt) {
    this.input = readMoveInput(ctx, this.hero, this.input);
    this.hero.fixedUpdate(dt, this.input);
  }

  update(ctx, dt) {
    this.hero.updateVisual(this.model, dt, ctx.physics.alpha);
    for (const c of this.coins) c.rotation.y += dt * 2;
    for (let i = 0; i < LOOKS.length; i++) {
      if (ctx.input.wasPressed(`Digit${i + 1}`)) {
        this.current = i;
        ctx.engine.setLook(LOOKS[i][1]);
      }
    }
    if (ctx.input.wasPressed('KeyT')) {
      // Parameters and pixel sizes are uniforms: changing them never rebuilds the pipeline.
      STORYBOOK_HEROES.actors.pixel.size = STORYBOOK_HEROES.actors.pixel.size === 1 ? 3 : 1;
      if (this.current === 1) ctx.engine.setLook(STORYBOOK_HEROES);
    }
    ctx.hud.clear();
    ctx.hud.text(6, 6, `LOOK ${this.current + 1}/${LOOKS.length}: ${LOOKS[this.current][0].toUpperCase()}`, { color: 'sand' });
    ctx.hud.text(6, 6, '1-6 LOOKS  T CHUNKY', { anchor: 'bottom-left' });
  }

  cameraTarget() {
    const p = this.model?.position ?? this.target.set(0, 0, 3);
    return this.target.set(p.x, p.y + 0.9, p.z);
  }

  status() {
    return `look ${LOOKS[this.current][0]}`;
  }
}

await Engine.start(new LookLab(), withUrlOptions({ container: document.getElementById('app'), camera: { preset: 'iso', zoom: 1.3 }, look: STORYBOOK_HEROES }));
