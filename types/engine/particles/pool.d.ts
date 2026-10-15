import type { PaletteColor } from '../palette';
type Vec3 = readonly [number, number, number];
type Range = number | readonly [number, number];
/**
 * A particle effect as data. Sizes are in art pixels (whole pixels, so particles stay crisp
 * squares), colors are palette names stepped over each particle's life (no blending).
 */
export interface ParticlePreset {
    /** Particles per burst. */
    count: Range;
    /** Seconds each particle lives. */
    life: Range;
    /** Launch speed, world units / s. */
    speed: Range;
    /** Main launch direction (default straight up). */
    direction?: Vec3;
    /** Cone half-angle around `direction`, degrees (180 = every direction). Default 180. */
    spread?: number;
    /** Multiply vertical launch speed (0.2 = dust that hugs the ground). Default 1. */
    flatten?: number;
    /** Downward acceleration, world units / s² (negative floats up). Default 0. */
    gravity?: number;
    /** Velocity damping per second (0 = none). */
    drag?: number;
    /** Size in art pixels at birth and at death (rounded to whole pixels). */
    size: readonly [number, number];
    /** Palette colors stepped through over the lifetime. */
    colors: readonly PaletteColor[];
    /** Random spawn offset radius, world units. */
    radius?: number;
    /** Pool size (max alive at once). Default 256. */
    max?: number;
}
export interface BurstOptions {
    /** Override the particle count. */
    count?: number;
    /** Override the launch direction (e.g. opposite to a skid). */
    direction?: Vec3;
    /** Multiply launch speed. */
    speed?: number;
    /** Multiply size. */
    scale?: number;
    /** Override the colors for this burst. */
    colors?: readonly PaletteColor[];
}
/**
 * Fixed-size particle storage with CPU simulation. Alive particles are packed at the
 * front (swap-remove), so the GPU draws exactly `alive` instances from one buffer.
 * Pure (no three.js): unit-tested.
 */
export declare class ParticlePool {
    readonly preset: ParticlePreset;
    readonly max: number;
    alive: number;
    readonly pos: Float32Array;
    readonly vel: Float32Array;
    readonly age: Float32Array;
    readonly life: Float32Array;
    readonly size0: Float32Array;
    readonly size1: Float32Array;
    /** Index into `colorSets` per particle. */
    readonly colorSet: Uint8Array;
    /** Color lists in use: [0] is the preset's, bursts with custom colors add more. */
    readonly colorSets: (readonly PaletteColor[])[];
    constructor(preset: ParticlePreset);
    /** Bursts spawned without a random source draw from the pool's own seeded stream. */
    private readonly own;
    private readonly ownRandom;
    /** Spawn a burst at `at`. Returns how many particles were spawned (the pool may be full). `random` in [0, 1): seeded, so bursts repeat. */
    spawn(at: Vec3, o?: BurstOptions, random?: () => number): number;
    /** Advance every particle by `dt` seconds and drop the dead ones. */
    step(dt: number): void;
    /** Life fraction 0..1 of particle `i`. */
    t(i: number): number;
    /** Size in whole art pixels (0 = invisible). */
    sizeAt(i: number): number;
    /** Current palette color name: stepped through the particle's color list. */
    colorAt(i: number): PaletteColor;
    clear(): void;
    private kill;
    private colorSetIndex;
}
export {};
