/**
 * Texture patterns: seeded generators that fill a `w × h` field with values on the layer's ramp
 * of slots (0 = the first slot, 1 = the last) or `NaN` where they leave the texel alone. When the
 * texture tiles, every pattern but `gradient` is periodic over its size by construction: value
 * noise on a wrapping lattice, Voronoi distances and scattered shapes that wrap, and layouts
 * (bricks, tiles, planks, stripes, checker) that fit a whole number of cells, spreading any
 * remainder over them a texel at a time, so no sliver of a cell lands on the wrap.
 */
export interface PatternParams {
    readonly [k: string]: number | string;
}
export interface FieldInput {
    readonly w: number;
    readonly h: number;
    readonly tile: boolean;
    /** Ramp length (slots in `colors`). */
    readonly n: number;
    readonly seed: number;
    readonly p: PatternParams;
}
/**
 * A numeric param `[default, min, max]` (with `'whole'` when it counts texels or things), or a
 * list of choices (the first is the default).
 */
export type ParamSpec = readonly [number, number, number] | readonly [number, number, number, 'whole'] | readonly string[];
export interface PatternSpec {
    readonly about: string;
    readonly params: Readonly<Record<string, ParamSpec>>;
    /** Whether it wraps without a seam when the texture tiles (all but `gradient`). */
    readonly periodic: boolean;
    readonly field: (f: FieldInput) => Float32Array;
}
/** A hash of integers to [0, 1): the same inputs give the same value, on every platform. */
export declare function hash01(seed: number, a: number, b?: number, c?: number): number;
export declare const PATTERNS: Readonly<Record<string, PatternSpec>>;
