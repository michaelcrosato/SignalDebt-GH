/**
 * Helpers for writing models. Each one only returns parts (plain data), so a def stays data
 * and `expandModel` can print it. Domain helpers are rare on purpose: `boxFrame` sets the bar.
 */
import { Rng } from '../random';
import type { GroupPart, ModelDef, Part, Slot, Vec3 } from './types';
/** Returns the def as written, typed, so tuples and literals don't widen. */
export declare function model<const T extends ModelDef>(def: T): T;
type Each<A extends unknown[]> = Part | ((...args: A) => Part);
/**
 * `n` copies turned about Y, `360 / n` degrees apart from `phase`. `r` first pushes each copy
 * out along its own +Z; with the default 0 the part's own `at` places it.
 */
export declare function around(n: number, part: Each<[i: number]>, o?: {
    r?: number;
    phase?: number;
}): Part[];
/** `n` copies, copy `i` offset by `i × step`. */
export declare function rowOf(n: number, step: Vec3, part: Each<[i: number]>): Part[];
/** `nx × nz` copies on the floor plane, copy (ix, iz) offset by `(ix × sx, 0, iz × sz)`. */
export declare function gridOf(nx: number, nz: number, step: number | readonly [number, number], part: Each<[ix: number, iz: number]>): Part[];
/**
 * `n` copies scattered over a `w × d` area centred on the origin, from their own `seed` (so the
 * result does not depend on the build's seed); `part(i, rng)` may draw from the same stream.
 */
export declare function scatterOf(n: number, [w, d]: readonly [number, number], seed: number, part: Each<[i: number, rng: Rng]>): Part[];
/**
 * The 12 beams along the edges of a box of outer size `size` centred on `at`: crates, cages,
 * windows.
 */
export declare function boxFrame(o: {
    size: Vec3;
    beam: number;
    at?: Vec3;
    c?: Slot;
    name?: string;
}): GroupPart;
export {};
