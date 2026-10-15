import { type Camera, Group, Vector3 } from 'three/webgpu';
import { type BurstOptions, type ParticlePreset } from './pool';
import { Rng } from '../random';
/** What the particle system needs to size particles in art pixels. */
export interface ParticleView {
    camera: Camera;
    /** Point the camera looks at (sizes are exact there). */
    focus: Vector3;
    /** Internal (art) resolution height. */
    height: number;
}
/**
 * Pixel-art particles: CPU-simulated pools, drawn as camera-facing square sprites in flat
 * palette colors. One emitter (one instanced draw call, one pooled instance buffer) per
 * preset; sizes are whole art pixels, so in Pixel mode a particle is a crisp N×N block.
 * Available as `ctx.particles`; emitters are created on first use and freed by `clear()`
 * (the engine calls it when a level unloads).
 *
 *   ctx.particles.burst('dust', hero.feet);
 *   ctx.particles.burst('skid', feet, { direction: [-vx, 0.3, -vz], count: 2 });
 */
export declare class Particles {
    private readonly view;
    /** Engine-owned group holding every emitter. */
    readonly group: Group<import("three").Object3DEventMap>;
    /** Preset registry: the built-ins plus anything registered. */
    readonly presets: Map<string, ParticlePreset>;
    /** World units per art pixel at the camera focus (updated every frame). */
    readonly pixelWorld: import("three/webgpu").UniformNode<"float", number>;
    /** Emitters by key: `@name` for registered presets, `#<json>` for inline preset objects. */
    private readonly emitters;
    private readonly inlineKeys;
    private readonly geometry;
    private warnedMany;
    /** Where bursts get their randomness: the level's stream (the engine reseeds it per level). */
    private rng;
    private readonly random;
    constructor(view: () => ParticleView);
    /** Add or replace a named preset. Replacing frees the old preset's emitter. */
    register(name: string, preset: ParticlePreset): void;
    /**
     * Spawn a burst of `preset` (a name or a ParticlePreset) at `at`. Returns the number of
     * particles spawned (fewer when the pool is full, 0 for an unknown preset). Inline
     * preset objects share one emitter per distinct content, so `burst({ ...literal }, at)`
     * every frame stays one pool and one draw call; prefer `register` + a name, and vary a
     * burst with `options` (count, direction, speed, scale, colors).
     */
    burst(preset: string | ParticlePreset, at: Vector3 | readonly [number, number, number], options?: BurstOptions): number;
    /** Particles alive right now, over all emitters. */
    get alive(): number;
    /** Emitters (= draw calls at most) currently allocated. */
    get emitterCount(): number;
    /** Simulate and upload. Called by the engine every frame (frozen while paused). */
    update(dt: number): void;
    /** Take bursts' randomness from `rng` (the engine passes each level's `ctx.random` fork). */
    reseed(rng: Rng): void;
    /** Kill every particle and free the emitters (GPU buffers, materials). */
    clear(): void;
    dispose(): void;
    private inlineKey;
    private free;
    private emitter;
    private updatePixelSize;
}
