/**
 * A water surface you can disturb, drawn in the engine's look: a subdivided plane whose
 * vertices ride the same travelling waves `physics/water.ts` sums on the CPU (so floating
 * things bob exactly with the drawn surface), plus a ripple field (a 2D wave equation on the
 * CPU, uploaded as a small float texture) that a wading hero, a splash or rain dents. Toon
 * shaded from the waves' own normals, lighter on crests, white foam where it is high, sun
 * glints as hard pixels, and optionally see-through by ordered dither (no blending, no sort).
 *
 *   const ripples = new RippleField({ size: [12, 8], cells: [96, 64], center: [0, 2] });
 *   const water = new WaterSurface({ size: [12, 8], at: [0, 0.5, 2], waves: WAVES_CALM, ripples, opacity: 0.75 });
 *   scene.add(water);
 *   // per frame: water.update(physics.time, engine.sunDir)
 *   const y = water.heightAt(x, z);          // the drawn surface's height there
 */
import { Mesh, type Vector3 } from 'three/webgpu';
import { type RippleField, type Wave } from '../physics/water';
/** Waves the shader sums (more are ignored). */
export declare const MAX_WAVES = 4;
export interface WaterOptions {
    /** Width (x) and depth (z) of the surface, m. */
    size: readonly [number, number];
    /** Centre of the surface at rest. */
    at: readonly [number, number, number];
    /** Grid quads along x and z (default: one per ripple cell, or 4 per metre without ripples). */
    segments?: readonly [number, number];
    waves?: readonly Wave[];
    /** A ripple field covering the same rectangle (its size and centre must match). */
    ripples?: RippleField | null;
    /** Colours (hex): troughs, crests, foam. */
    deep?: number;
    shallow?: number;
    foam?: number;
    /** Height above rest (m) where foam starts. Default: 75% of the waves' combined height (the tallest crests). */
    foamAt?: number;
    /** 1: opaque; less: see-through by a 4×4 ordered dither per art pixel. */
    opacity?: number;
}
export declare class WaterSurface extends Mesh {
    readonly size: readonly [number, number];
    waves: Wave[];
    readonly ripples: RippleField | null;
    private readonly uTime;
    /** Where the surface is (x, z): waves are in world space, so a moved surface stays in step. */
    private readonly uOrigin;
    private shown;
    private readonly uWave;
    private readonly uOmega;
    private readonly uSun;
    readonly uOpacity: import("three/webgpu").UniformNode<"float", number>;
    readonly uFoamAt: import("three/webgpu").UniformNode<"float", number>;
    private readonly rippleTex;
    private readonly rippleData;
    private time;
    private readonly autoFoam;
    constructor(o: WaterOptions);
    /** Change the waves (up to MAX_WAVES; the CPU height follows too). */
    setWaves(waves: readonly Wave[]): void;
    /** Per frame: the waves' clock (use physics time: floaters read the same), the ripples, the sun. */
    update(time: number, sun?: Vector3): void;
    /** World height of the drawn surface at (x, z) (waves and ripples), at the last `update` time or `t`. */
    heightAt(x: number, z: number, t?: number): number;
    /** Is (x, z) over this water? */
    covers(x: number, z: number): boolean;
    dispose(): void;
}
