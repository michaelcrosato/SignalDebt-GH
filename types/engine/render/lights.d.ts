import { Color, type ColorRepresentation, Group, type Object3D, PointLight, Vector3 } from 'three/webgpu';
/**
 * Dynamic lighting: a fixed pool of real `PointLight`s shared by any number of *light
 * requests* (torches, spells, projectiles, loot beams, glowing monsters...).
 *
 * Every light the toon material sees is part of its compiled shader, so changing the number
 * of lights recompiles every material. The pool therefore never adds or removes lights: it
 * keeps `size` lights in the scene at all times (unused ones at intensity 0) and, every
 * frame, hands them to the most important requests: intensity × priority × proximity to the
 * camera focus. Requests that hold a light get a hysteresis bonus, and every switch fades
 * (the old owner out, then the new one in), so lights never pop. Moving a light or changing
 * its colour, intensity or radius only updates uniforms: no shader work at all.
 *
 *   const torch = ctx.lights.request({ position: [3, 1.6, 4], color: 0xffa040, intensity: 6, radius: 7, flicker: 'torch' });
 *   torch.update({ intensity: 9 });          // or torch.position.set(...)
 *   torch.release();                          // fades out, frees its light
 *
 * The assignment itself is pure (`LightAssigner`, unit-tested); `LightPool` adds the
 * three.js lights, flicker and following.
 */
/** Flicker presets: intensity multipliers over time (deterministic per request seed). */
export type FlickerPreset = 'none' | 'torch' | 'candle' | 'brazier' | 'pulse' | 'strobe' | 'spell';
export declare const FLICKER_PRESETS: readonly FlickerPreset[];
/**
 * Intensity multiplier of a flicker preset at time `t` (seconds). Averages ~1, stays within
 * roughly 0.6..1.25 for fire so a torch never goes dark.
 */
export declare function flicker(preset: FlickerPreset, t: number, seed?: number): number;
/** One request as the assigner sees it. `slot`/`level` are owned by the assigner. */
export interface AssignItem {
    /** Importance this frame (≥ 0); 0 = not wanted (out of range, off). */
    score: number;
    /** False once released: fades out, then leaves. */
    alive: boolean;
    /** Seconds to fade in / out. */
    fadeIn: number;
    fadeOut: number;
    /** Pool slot held, or -1. */
    slot: number;
    /** Shown fraction 0..1 (fades). */
    level: number;
}
export interface AssignStats {
    /** Requests that got a slot this step. */
    assigned: number;
    /** Requests that lost their slot (faded to 0) this step. */
    freed: number;
    /** Requests wanted but waiting for a slot to fade out. */
    waiting: number;
}
/**
 * Pure light assignment: `capacity` slots, many items. Each step picks the `capacity`
 * highest-scoring live items (items already holding a slot score × `hysteresis`, so two
 * similar requests don't trade a light back and forth), fades winners in and losers out,
 * and moves a slot to a new owner only once the old one has faded to 0. A fade changes a
 * level by at most `dt / fade` per step: nothing ever pops.
 */
export declare class LightAssigner<T extends AssignItem> {
    /** Slot → item holding it. */
    readonly slots: (T | null)[];
    hysteresis: number;
    private readonly ranked;
    private readonly wanted;
    constructor(capacity: number);
    get capacity(): number;
    /** Change the slot count (the pool's lights are rebuilt: a one-off shader recompile). */
    resize(capacity: number, items: Iterable<T>): void;
    /** Effective rank of an item (score with the hysteresis bonus for holders). */
    rank(it: T): number;
    step(dt: number, items: readonly T[]): AssignStats;
}
export interface LightRequestOptions {
    /** World position (copied). Ignored while `follow` is set (then it is `follow` + `offset`). */
    position?: Vector3 | readonly [number, number, number];
    /** Follow an object's world position every frame (a projectile, a monster, the hero). */
    follow?: Object3D | null;
    /** Offset from `follow` (world axes). */
    offset?: readonly [number, number, number];
    color?: ColorRepresentation;
    /** Point light intensity at full strength (before flicker and fades). Default 4. */
    intensity?: number;
    /** Reach in metres (PointLight.distance: light is 0 beyond it). Default 6. */
    radius?: number;
    /** Distance falloff exponent (PointLight.decay; a uniform, free to change). Default 1.2. */
    decay?: number;
    flicker?: FlickerPreset;
    /** Importance multiplier: the hero's light 4, a loot beam 2, a torch 1 (default). */
    priority?: number;
    /** Fade times in seconds (defaults 0.25 in, 0.2 out). */
    fadeIn?: number;
    fadeOut?: number;
    /** Release automatically after this many seconds (spell flashes, explosions). */
    lifetime?: number;
    /** Optional label for debugging (`pool.describe()`). */
    name?: string;
}
/** A light request. Change it freely; the pool decides whether it currently owns a real light. */
export interface LightHandle {
    readonly id: number;
    /** World position (mutable; ignored while following). */
    readonly position: Vector3;
    /** Colour (mutable). */
    readonly color: Color;
    intensity: number;
    radius: number;
    decay: number;
    flicker: FlickerPreset;
    priority: number;
    follow: Object3D | null;
    readonly offset: Vector3;
    name: string;
    /** Seconds left before auto-release (Infinity = until `release()`). */
    lifetime: number;
    /** Set several fields at once. */
    update(options: LightRequestOptions): this;
    /** Fade out and give the light back. Safe to call twice. */
    release(): void;
    readonly alive: boolean;
    /** Whether it holds one of the pool's real lights right now. */
    readonly lit: boolean;
    /** 0..1: how much of it is shown (fades). */
    readonly level: number;
}
/** Pool sizes by quality level (`QUALITY[level].lights`). */
export declare const LIGHT_POOL_SIZES: {
    readonly low: 4;
    readonly medium: 8;
    readonly high: 16;
};
export interface LightPoolOptions {
    /** Real lights in the pool (constant: changing it recompiles materials). Default 8. */
    size?: number;
    /** Parent for the pool's lights (added to it). Usually the scene. */
    parent?: Object3D;
}
export interface LightPoolStats {
    size: number;
    requests: number;
    lit: number;
    /** Slot hand-overs since creation (a request got a light). */
    assignments: number;
    /** Requests that wanted a light but had to wait last frame. */
    waiting: number;
    /** Milliseconds spent in the last update (CPU). */
    updateMs: number;
}
/**
 * A fixed pool of point lights shared by many requests (see the file comment). Available
 * to games as `ctx.lights` (sized by quality: low 4, medium 8, high 16), or create your
 * own with `new LightPool({ size, parent: scene })` and call `update` every frame.
 */
export declare class LightPool {
    readonly group: Group<import("three").Object3DEventMap>;
    readonly lights: PointLight[];
    private readonly requests;
    private readonly assigner;
    private nextId;
    private time;
    private assignments;
    private waiting;
    private updateMs;
    private readonly tmp;
    constructor(options?: LightPoolOptions);
    /** Number of real lights (constant unless `resize`d). */
    get size(): number;
    /** Ask for a light. Returns a handle to move, recolour or release. */
    request(options?: LightRequestOptions): LightHandle;
    /**
     * Assign lights for this frame. `focus` is what the camera looks at; requests further
     * than `range` + their radius from it are not lit. Call once per rendered frame.
     */
    update(dt: number, focus: Vector3, range?: number): void;
    /** Release every request at once and darken the lights (level unload). */
    clear(): void;
    /**
     * Change the number of real lights. Every material using lights recompiles once, so do it
     * rarely (a quality change), never per frame.
     */
    resize(size: number): void;
    stats(): LightPoolStats;
    /** Every live request with its score and slot (debugging, inspectors). */
    describe(): {
        id: number;
        name: string;
        score: number;
        slot: number;
        level: number;
        alive: boolean;
    }[];
    dispose(): void;
    private worldPosition;
    private build;
}
