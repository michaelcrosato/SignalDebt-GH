// Cliff Run: a side-scroller. Run (A/D or arrows), jump (Space; again on landing for a higher
// one), stomp the slimes, reach the flag. Two levels, then it starts over.
import { compileClips, ContactShadow, Engine, HERO_CLIPS, HERO_MODEL, HERO_RIG, mergeStaticMeshes, PALETTE, PlatformerCharacter, readMoveInput, setLookLayer, THREE, toonMaterial, withUrlOptions } from '../pixel-engine.js';

const { BoxGeometry, CylinderGeometry, Group, Mesh, SphereGeometry, Vector3 } = THREE;

// Levels are data. platforms: [left x, right x, top y]; slimes: [x, patrol half-width]; flag: x.
const LEVELS = [
  { platforms: [[-4, 10, 0], [12, 15, 1.2], [17, 20, 2.2], [22, 32, 0], [34, 37, 1.4], [39, 48, 0]], slimes: [[27, 3], [43, 2]], flag: 46 },
  { platforms: [[-4, 6, 0], [8, 10, 1.4], [12, 14, 2.6], [16, 18, 1.4], [20, 28, 0], [30, 31.5, 1.2], [33.5, 35, 2.2], [37, 48, 0]], slimes: [[24, 3], [41, 2]], flag: 46 },
];
const START = [-2, 0, 0];

class CliffRun {
  name = 'Cliff Run';
  assets = [HERO_MODEL, 'assets/tree.glb'];
  slimes = [];
  stomps = 0;
  falls = 0;
  clearedAt = null;
  leaving = false;
  startTime = null;
  feet = new Vector3();
  from = new Vector3();
  target = new Vector3();

  constructor(level = 0) {
    this.level = level;
    this.data = LEVELS[level];
  }

  async setup(ctx) {
    const { scene, physics, palette } = ctx;
    const parts = [];
    for (const [x0, x1, top] of this.data.platforms) {
      const w = x1 - x0;
      const h = top + 4; // every platform reaches down out of view
      physics.addStaticBox({ position: [(x0 + x1) / 2, top - h / 2, 0], halfExtents: [w / 2, h / 2, 2] });
      const body = new Mesh(new BoxGeometry(w, h, 4), toonMaterial(palette.sand));
      body.position.set((x0 + x1) / 2, top - h / 2, 0);
      const grass = new Mesh(new BoxGeometry(w + 0.1, 0.3, 4.1), toonMaterial(palette.green));
      grass.position.set((x0 + x1) / 2, top - 0.14, 0);
      for (const m of [body, grass]) m.receiveShadow = m.castShadow = true;
      parts.push(body, grass);
    }
    // The flag: no collider, a trigger ends the level.
    const pole = new Mesh(new CylinderGeometry(0.06, 0.06, 3, 6), toonMaterial(palette.white));
    pole.position.set(this.data.flag, 1.5, -1);
    const cloth = new Mesh(new BoxGeometry(0.9, 0.6, 0.06), toonMaterial(palette.red));
    cloth.position.set(this.data.flag + 0.45, 2.65, -1);
    parts.push(pole, cloth);
    scene.add(...mergeStaticMeshes(parts));
    physics.trigger({ box: [0.5, 2, 2] }, [this.data.flag, 2, 0], { tag: 'character', once: true, onEnter: () => this.clear(ctx) });

    // Scenery behind the lane: trees (a built-in model) and clouds.
    const tree = await ctx.loadModel('assets/tree.glb');
    for (const x of [2, 25, 41]) {
      const t = tree.scene.clone(true);
      t.position.set(x, 0, -1.4);
      scene.add(t);
    }
    for (const [x, y] of [[0, 7], [14, 8], [30, 6.5], [44, 7.5]]) {
      const cloud = new Mesh(new BoxGeometry(3, 0.8, 0.8), toonMaterial(palette.white));
      cloud.position.set(x, y, -6);
      scene.add(cloud);
    }

    // Slimes: a squashed sphere with eyes, patrolling; stomp them from above.
    for (const [x, range] of this.data.slimes) {
      const mesh = new Group();
      const blob = new Mesh(new SphereGeometry(0.45, 12, 8), toonMaterial(palette.lime));
      blob.scale.y = 0.7;
      blob.position.y = 0.3;
      blob.castShadow = true;
      mesh.add(blob);
      for (const ex of [-0.15, 0.15]) {
        const eye = new Mesh(new BoxGeometry(0.1, 0.14, 0.05), toonMaterial(palette.ink));
        eye.position.set(ex, 0.42, 0.4);
        mesh.add(eye);
      }
      mesh.position.set(x, 0, 0);
      setLookLayer(mesh, 'actors');
      scene.add(mesh);
      this.slimes.push({ mesh, x, range, phase: x, dead: false });
    }

    const hero = await ctx.loadModel(HERO_MODEL, { castShadow: false });
    this.model = hero.scene;
    setLookLayer(this.model, 'actors');
    this.shadow = new ContactShadow(0.42);
    scene.add(this.model, this.shadow);
    this.hero = new PlatformerCharacter(physics, { position: START, lockDepth: ctx.camera.lockDepth });
    this.hero.attachModel(this.model, compileClips(HERO_CLIPS, HERO_RIG, this.model), HERO_RIG);
  }

  clear(ctx) {
    this.clearedAt = ctx.time;
    this.hero.celebrate();
    ctx.audio.play('fanfare');
    ctx.particles.burst('sparkle', [this.data.flag, 3, -1], { count: 30 });
  }

  fixedUpdate(ctx, dt) {
    this.input = readMoveInput(ctx, this.hero, this.input);
    if (this.clearedAt !== null) this.input.move.set(0, 0, 0); // level clear: stand still and celebrate
    this.hero.fixedUpdate(dt, this.input);
    const f = this.hero.feetInto(this.feet);
    for (const s of this.slimes) {
      if (s.dead) continue;
      s.phase += dt * 1.3;
      s.mesh.position.x = s.x + Math.sin(s.phase) * s.range;
      const dx = f.x - s.mesh.position.x;
      if (Math.abs(dx) > 0.7 || f.y > 0.9 || f.y < -0.3) continue;
      if (this.hero.vy < 0 && f.y > 0.3) {
        // landed on it: stomp and bounce
        s.dead = true;
        s.mesh.visible = false;
        this.stomps++;
        ctx.audio.play('punch');
        ctx.particles.burst('impact', s.mesh.position);
        this.hero.jump('Jump');
      } else if (this.hero.hurt(this.from.set(-dx, 0, 0))) {
        // `from` points from the hero to what hit it (slime - hero): knocked back the other way
        ctx.audio.play('hurt');
      }
    }
    if (f.y < -8) {
      this.falls++;
      ctx.audio.play('hurt');
      this.hero.teleport(START);
    }
  }

  update(ctx, dt) {
    this.startTime ??= ctx.time;
    this.hero.updateVisual(this.model, dt, ctx.physics.alpha);
    const feet = this.model.position;
    const ground = ctx.physics.groundBelow(this.target.set(feet.x, feet.y + 0.1, feet.z), 20, this.hero.body);
    this.shadow.visible = !!ground;
    if (ground) this.shadow.place(feet.x, ground.y, feet.z, feet.y - ground.y);
    if (this.clearedAt !== null && ctx.time - this.clearedAt > 2.5 && !this.leaving) {
      this.leaving = true;
      void ctx.engine.loadGame(new CliffRun((this.level + 1) % LEVELS.length));
    }
    const time = (this.clearedAt ?? ctx.time) - this.startTime;
    ctx.hud.clear();
    ctx.hud.text(6, 6, `LEVEL ${this.level + 1}`, { color: 'sand' });
    ctx.hud.text(6, 16, `TIME ${time.toFixed(1)}  STOMPS ${this.stomps}`);
    if (this.clearedAt !== null) ctx.hud.text(0, 0, 'LEVEL CLEAR!', { anchor: 'center', scale: 2, shadow: 'navy' });
  }

  cameraTarget() {
    const p = this.model?.position ?? this.feet.set(...START);
    return this.target.set(p.x, p.y + 1.2, p.z);
  }

  onCameraChange(ctx) {
    this.hero.setLockDepth(ctx.camera.lockDepth);
    this.model.visible = !ctx.camera.hidesTarget;
  }

  status() {
    return `level ${this.level + 1}${this.clearedAt !== null ? ' clear' : ''}, stomps ${this.stomps}, falls ${this.falls}`;
  }
}

await Engine.start(new CliffRun(), withUrlOptions({ container: document.getElementById('app'), camera: { preset: 'side', zoom: 1.2 }, background: PALETTE.sky }));
