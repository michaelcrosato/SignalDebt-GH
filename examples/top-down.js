// Lantern Night: walk (WASD / arrows), push both crates onto the glowing pads (walk into a
// crate to push it), then leave through the gate in the north wall.
import { compileClips, ContactShadow, Engine, HERO_CLIPS, HERO_MODEL, HERO_RIG, LOOK_PRESETS, mergeStaticMeshes, PALETTE, PlatformerCharacter, RAPIER, readMoveInput, setLookLayer, THREE, toonMaterial, withUrlOptions } from '../pixel-engine.js';

const { BoxGeometry, Color, CylinderGeometry, Mesh, Vector3 } = THREE;

const SONG = {
  bpm: 84,
  tracks: { lead: { wave: 'triangle', decay: 0.3, volume: 0.12 }, bass: { wave: 'square', duty: 0.125, decay: 0.25, volume: 0.05 } },
  patterns: { a: { lead: 'A4 . C5 . E5 . . . D5 . C5 . B4 . . .', bass: 'A2 . . . . . . . F2 . . . . . . .' } },
  order: ['a'],
};
const PADS = [[-3, -4], [3, -4]];
const CRATES = [[-3, 1], [3, 1]];

class LanternNight {
  name = 'Lantern Night';
  assets = [HERO_MODEL, 'assets/tree.glb'];
  crates = [];
  pads = [];
  solved = false;
  escaped = false;
  nextFirefly = 0;
  target = new Vector3();
  at = new Vector3();

  async setup(ctx) {
    const { scene, physics, palette, engine } = ctx;
    this.sparkle = ctx.random.fork('fireflies'); // drawn per frame (cosmetic): its own stream, so gameplay's never depends on the frame rate
    // Night: dim the engine's sun and ambient light (reset for the next game on unload).
    engine.sun.color.setHex(PALETTE.sky);
    engine.sun.intensity = 1.2;
    engine.ambient.color.setHex(PALETTE.navy);
    engine.ambient.intensity = 1.4;
    scene.background = new Color(PALETTE.ink);

    const parts = [];
    const wall = (x, z, w, d) => {
      physics.addStaticBox({ position: [x, 0.6, z], halfExtents: [w / 2, 0.6, d / 2] });
      const m = new Mesh(new BoxGeometry(w, 1.2, d), toonMaterial(palette.slate));
      m.position.set(x, 0.6, z);
      m.castShadow = m.receiveShadow = true;
      parts.push(m);
    };
    const floor = new Mesh(new BoxGeometry(30, 1, 30), toonMaterial(palette.teal));
    floor.position.y = -0.5;
    floor.receiveShadow = true;
    parts.push(floor);
    physics.addStaticBox({ position: [0, -0.5, 0], halfExtents: [15, 0.5, 15] });
    wall(-4.75, -8, 6.5, 1); // north wall, with a 3 m gap for the gate
    wall(4.75, -8, 6.5, 1);
    wall(0, 8, 17, 1);
    wall(-8, 0, 1, 15);
    wall(8, 0, 1, 15);
    for (const [x, z] of [[-6.5, -6.5], [6.5, -6.5], [-6.5, 6.5], [6.5, 6.5]]) {
      const post = new Mesh(new CylinderGeometry(0.12, 0.15, 1.6, 6), toonMaterial(palette.plum));
      post.position.set(x, 0.8, z);
      parts.push(post);
      ctx.lights.request({ position: [x, 1.8, z], color: 0xffa040, intensity: 7, radius: 7, flicker: 'torch' });
    }
    scene.add(...mergeStaticMeshes(parts));

    // The gate: a collider we remove when the puzzle is solved.
    this.gate = new Mesh(new BoxGeometry(3, 1.6, 0.6), toonMaterial(palette.red));
    this.gate.position.set(0, 0.8, -8);
    scene.add(this.gate);
    this.gateCollider = physics.addStaticBox({ position: [0, 0.8, -8], halfExtents: [1.5, 0.8, 0.3] });
    physics.trigger({ box: [1.5, 1, 0.5] }, [0, 1, -9.2], { tag: 'character', once: true, onEnter: () => this.escape(ctx) });

    // Pads and crates. A crate is a dynamic Rapier body the hero pushes (tag 'pushable').
    for (const [x, z] of PADS) {
      const mesh = new Mesh(new BoxGeometry(1.2, 0.06, 1.2), toonMaterial(palette.navy));
      mesh.position.set(x, 0.03, z);
      scene.add(mesh);
      this.pads.push({ x, z, mesh, lit: false });
    }
    for (const [x, z] of CRATES) {
      const mesh = new Mesh(new BoxGeometry(0.98, 0.98, 0.98), toonMaterial(palette.orange));
      mesh.castShadow = mesh.receiveShadow = true;
      setLookLayer(mesh, 'actors');
      scene.add(mesh);
      const body = physics.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(x, 0.5, z).setLinearDamping(4).enabledRotations(false, false, false));
      physics.tag(physics.world.createCollider(RAPIER.ColliderDesc.cuboid(0.49, 0.49, 0.49).setFriction(0.1).setDensity(8), body), 'pushable');
      physics.bind(body, mesh);
      this.crates.push(body);
    }

    const tree = await ctx.loadModel('assets/tree.glb');
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const t = tree.scene.clone(true);
      t.position.set(Math.cos(a) * 11.5, 0, Math.sin(a) * 11.5);
      scene.add(t);
    }

    const hero = await ctx.loadModel(HERO_MODEL, { castShadow: false });
    this.model = hero.scene;
    setLookLayer(this.model, 'actors');
    this.shadow = new ContactShadow(0.42);
    scene.add(this.model, this.shadow);
    this.hero = new PlatformerCharacter(physics, { position: [0, 0, 5], lockDepth: ctx.camera.lockDepth });
    this.hero.attachModel(this.model, compileClips(HERO_CLIPS, HERO_RIG, this.model), HERO_RIG);
    ctx.lights.request({ follow: this.model, offset: [0, 1.5, 0], color: 0xffe0a0, intensity: 5, radius: 6, priority: 8 }); // the lantern

    ctx.particles.register('firefly', { count: [1, 1], life: [1.5, 2.5], speed: [0.2, 0.5], gravity: -0.2, size: [1, 1], colors: ['lime', 'sand', 'lime'] });
    ctx.audio.register('chime', { wave: 'triangle', freq: 880, decay: 0.4, volume: 0.3, arp: [0, 4, 7], arpRate: 0.06 });
    ctx.audio.playMusic(SONG, 'night');
  }

  escape(ctx) {
    this.escaped = true;
    this.hero.celebrate();
    ctx.audio.play('fanfare');
  }

  fixedUpdate(ctx, dt) {
    this.input = readMoveInput(ctx, this.hero, this.input);
    if (this.escaped) this.input.move.set(0, 0, 0); // the end: stand and celebrate
    this.hero.fixedUpdate(dt, this.input);
  }

  update(ctx, dt) {
    this.hero.updateVisual(this.model, dt, ctx.physics.alpha);
    const feet = this.model.position;
    this.shadow.place(feet.x, 0, feet.z, feet.y); // flat floor: the ground is y = 0
    // A pad lights when a crate sits on it; both lit opens the gate.
    for (const pad of this.pads) {
      const on = this.crates.some((b) => Math.hypot(b.translation().x - pad.x, b.translation().z - pad.z) < 0.5);
      if (on && !pad.lit) {
        pad.lit = true;
        pad.mesh.material = toonMaterial(ctx.palette.lime);
        ctx.lights.request({ position: [pad.x, 0.6, pad.z], color: 0x9cf060, intensity: 5, radius: 4, flicker: 'pulse' });
        ctx.audio.play('chime');
      }
    }
    if (!this.solved && this.pads.every((p) => p.lit)) {
      this.solved = true;
      ctx.physics.remove(this.gateCollider);
      this.gate.visible = false;
      ctx.particles.burst('smoke', this.gate.position, { count: 24 });
      ctx.audio.play('groundPound');
    }
    if (ctx.time > this.nextFirefly) {
      this.nextFirefly = ctx.time + 0.3;
      ctx.particles.burst('firefly', this.at.set(this.sparkle.range(-7, 7), this.sparkle.range(0.5, 2), this.sparkle.range(-7, 7)));
    }
    const lit = this.pads.filter((p) => p.lit).length;
    ctx.hud.clear();
    ctx.hud.text(6, 6, this.escaped ? 'YOU ESCAPED!' : this.solved ? 'THE GATE IS OPEN' : `PADS ${lit}/${this.pads.length}`, { color: 'sand' });
  }

  cameraTarget() {
    const p = this.model?.position ?? this.target.set(0, 0, 5);
    return this.target.set(p.x, p.y + 0.9, p.z);
  }

  status() {
    return this.escaped ? 'escaped' : `pads ${this.pads.filter((p) => p.lit).length}/${this.pads.length}`;
  }
}

await Engine.start(new LanternNight(), withUrlOptions({ container: document.getElementById('app'), camera: { preset: 'topdown', zoom: 1.1 }, look: LOOK_PRESETS.dream }));
