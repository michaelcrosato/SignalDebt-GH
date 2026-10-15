// Coin Garden: walk (WASD / arrows / stick), jump (Space), collect every coin.
import { compileClips, ContactShadow, Engine, HERO_CLIPS, HERO_MODEL, HERO_RIG, mergeStaticMeshes, PlatformerCharacter, readMoveInput, setLookLayer, THREE, toonMaterial, withUrlOptions } from './pixel-engine.js';

const { BoxGeometry, Mesh, Vector3 } = THREE;

/** A box you can see (toon material, palette colour) and stand on (a static collider). */
function block(ctx, [x, y, z], [w, h, d], color) {
  ctx.physics.addStaticBox({ position: [x, y, z], halfExtents: [w / 2, h / 2, d / 2] });
  const mesh = new Mesh(new BoxGeometry(w, h, d), toonMaterial(color));
  mesh.position.set(x, y, z);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

class CoinGarden {
  name = 'Coin Garden';
  assets = [HERO_MODEL, 'assets/coin.glb']; // start downloading before setup runs
  coins = [];
  collected = 0;
  won = false;
  target = new Vector3();
  ground = new Vector3();

  async setup(ctx) {
    const { scene, physics, palette } = ctx;
    // Level: static geometry merged into one draw call per material; one collider per block.
    scene.add(
      ...mergeStaticMeshes([
        block(ctx, [0, -0.5, 0], [24, 1, 24], palette.green),
        block(ctx, [4, 0.5, -2], [3, 1, 3], palette.slate),
        block(ctx, [7, 1.25, -2], [3, 2.5, 3], palette.teal),
        block(ctx, [-5, 0.75, 4], [2, 1.5, 2], palette.orange),
      ]),
    );
    // Coins: a model, spinning; a trigger volume collects it when the hero walks in.
    const coin = await ctx.loadModel('assets/coin.glb', { castShadow: false });
    for (const [x, y, z] of [[4, 1.4, -2], [7, 2.9, -2], [-5, 1.9, 4], [-2, 0.4, -5]]) {
      const mesh = coin.scene.clone(true);
      mesh.position.set(x, y, z);
      setLookLayer(mesh, 'actors'); // characters & objects can get their own look
      scene.add(mesh);
      const item = { mesh, taken: false };
      physics.trigger({ cylinder: { halfHeight: 0.6, radius: 0.5 } }, [x, y, z], { tag: 'character', once: true, onEnter: () => this.collect(ctx, item) });
      this.coins.push(item);
    }
    // The hero: the bundled model and clips on a Mario-64-style controller.
    const hero = await ctx.loadModel(HERO_MODEL, { castShadow: false });
    this.model = hero.scene;
    setLookLayer(this.model, 'actors');
    this.shadow = new ContactShadow(0.42);
    scene.add(this.model, this.shadow);
    this.hero = new PlatformerCharacter(physics, { position: [0, 0, 4], lockDepth: ctx.camera.lockDepth });
    this.hero.attachModel(this.model, compileClips(HERO_CLIPS, HERO_RIG, this.model), HERO_RIG);
  }

  collect(ctx, item) {
    item.taken = true;
    item.mesh.visible = false;
    this.collected++;
    ctx.audio.play('coin');
    ctx.particles.burst('sparkle', item.mesh.position);
  }

  fixedUpdate(ctx, dt) {
    this.input = readMoveInput(ctx, this.hero, this.input); // filled in place after the first step
    this.hero.fixedUpdate(dt, this.input); // movement and forces: fixed 60 Hz step
  }

  update(ctx, dt) {
    this.hero.updateVisual(this.model, dt, ctx.physics.alpha); // pose and interpolate
    const feet = this.model.position;
    const ground = ctx.physics.groundBelow(this.ground.set(feet.x, feet.y + 0.1, feet.z), 20, this.hero.body);
    if (ground) this.shadow.place(feet.x, ground.y, feet.z, feet.y - ground.y);
    for (const c of this.coins) if (!c.taken) c.mesh.rotation.y += dt * 3;
    if (!this.won && this.collected === this.coins.length) {
      this.won = true;
      this.hero.celebrate();
      ctx.audio.play('fanfare');
    }
    ctx.hud.clear();
    ctx.hud.text(6, 6, `COINS ${this.collected}/${this.coins.length}`, { color: 'sand' });
    if (this.won) ctx.hud.text(0, 0, 'YOU WIN!', { anchor: 'center', scale: 2, shadow: 'navy' });
  }

  cameraTarget() {
    const p = this.model?.position ?? this.target.set(0, 0, 4);
    return this.target.set(p.x, p.y + 0.9, p.z);
  }

  onCameraChange(ctx) {
    this.hero.setLockDepth(ctx.camera.lockDepth); // side view: stay on the lane
    this.model.visible = !ctx.camera.hidesTarget; // first person: no body in the way
  }

  status() {
    return `coins ${this.collected}/${this.coins.length}`;
  }
}

await Engine.start(new CoinGarden(), withUrlOptions({ container: document.getElementById('app'), camera: { preset: 'iso' } }));
