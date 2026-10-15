/**
 * Breaking a box into pieces: cut planes along each axis at jittered positions, so the
 * chunks tile the box exactly (nothing missing, nothing overlapping) but look hand-broken,
 * not like a grid. Pure and seeded (the same box breaks the same way every time).
 *
 *   const chunks = fractureBox([2, 3, 0.4], { cuts: [3, 4, 1], jitter: 0.35, seed: 7 });
 *   // [{ center: [x, y, z], size: [w, h, d] }, ...] in the box's own space
 */
export interface Chunk {
    /** Centre in the box's local space (the box is centred on the origin). */
    readonly center: [number, number, number];
    readonly size: [number, number, number];
}
export interface FractureOptions {
    /** Pieces along x, y and z (default [3, 3, 1]). */
    cuts?: readonly [number, number, number];
    /** How far a cut may wander from even spacing, as a share of a piece (0..0.45). Default 0.3. */
    jitter?: number;
    seed?: number;
}
/** A small seeded random number generator (mulberry32). */
export declare function seeded(seed: number): () => number;
export declare function fractureBox(size: readonly [number, number, number], o?: FractureOptions): Chunk[];
