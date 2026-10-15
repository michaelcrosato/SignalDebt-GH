/**
 * Water you can disturb: the height of a water surface at any point and time, as the sum of
 * a few travelling waves (analytic, the same function the water shader uses, so floating
 * things bob exactly with the drawn surface) plus a ripple field: a 2D wave equation on a
 * grid that anything crossing the surface dents (a wading hero, a crate splashing in, rain).
 * Pure; `render/water.ts` draws it, `Buoyancy` floats bodies on it. Unit-tested.
 *
 *   const ripples = new RippleField({ size: [12, 8], cells: [96, 64], center: [0, 0] });
 *   ripples.splash(x, z, 0.3, 0.6);       // radius, strength (m)
 *   ripples.step(dt);                      // per fixed step
 *   const h = waterHeight(WAVES_CALM, x, z, t) + ripples.heightAt(x, z);
 */
/** One travelling wave: direction (unit x, z), wavelength (m), amplitude (m), speed (m/s). */
export interface Wave {
    readonly dir: readonly [number, number];
    readonly length: number;
    readonly amplitude: number;
    readonly speed: number;
}
/** A pond on a still day. */
export declare const WAVES_CALM: readonly Wave[];
/** A choppy lake. */
export declare const WAVES_CHOPPY: readonly Wave[];
/** Height of the waves above the water's rest level at (x, z), time t. */
export declare function waterHeight(waves: readonly Wave[], x: number, z: number, t: number): number;
export interface RippleOptions {
    /** Width and depth of the water (m). */
    size: readonly [number, number];
    /** Grid cells across and down (more: finer ripples, more cost). */
    cells: readonly [number, number];
    /** World x, z of the water's middle. */
    center?: readonly [number, number];
    /** Wave speed (m/s). Default 2.2. */
    speed?: number;
    /** Energy kept per second (0..1). Default 0.35. */
    damping?: number;
}
/**
 * The 2D wave equation on a grid (two height buffers, leapfrog): each cell is pulled toward
 * the average of its neighbours, so a dent spreads out as rings, bounces off the edges and
 * dies away. Stable for speed × dt / cell < 0.7; `step` substeps when it has to.
 */
export declare class RippleField {
    readonly cols: number;
    readonly rows: number;
    readonly width: number;
    readonly depth: number;
    readonly cx: number;
    readonly cz: number;
    speed: number;
    damping: number;
    /** Heights now and one step ago. */
    h: Float32Array;
    private prev;
    private next;
    constructor(o: RippleOptions);
    get cell(): number;
    /** Grid coordinates (fractional) of a world point; null outside. */
    private toGrid;
    /** Is (x, z) over this water? */
    contains(x: number, z: number): boolean;
    /** Ripple height at a world point (bilinear between cells; 0 outside). */
    heightAt(x: number, z: number): number;
    /** Push the surface down (strength > 0) in a disc: a splash, a footstep, a raindrop. */
    splash(x: number, z: number, radius: number, strength: number): void;
    /** Total |height| (tests: ripples spread and die away). */
    energy(): number;
    step(dt: number): void;
}
