import type { MeshData, Prim, Slot } from './types';
export type PrimKind = 'box' | 'cyl' | 'cone' | 'ball' | 'lump' | 'wedge' | 'torus' | 'lathe' | 'slab' | 'tube' | 'mesh';
export declare const PRIM_KINDS: readonly PrimKind[];
/** Kinds whose first value is the box `[w, h, d]` they fill. */
export declare const BOX_KINDS: ReadonlySet<PrimKind>;
export declare function primKind(p: object): PrimKind | null;
/** Sides a round kind may have (the checks report a `seg` outside this). */
export declare const SEG_RANGE: readonly [3, 64];
/** Sides of a round kind with no `seg`: 6 under 0.3 m across, 8 under 1 m, else 10. */
export declare function defaultSeg(across: number): number;
/**
 * An n-sided ring starting at +X (angle from +X toward +Z), its bounding box scaled to
 * [-0.5, 0.5]² and centred: a regular polygon's corners when n is even, shifted slightly when
 * odd so the bounds stay centred on the axis.
 */
export declare function ring(n: number): [number, number][];
/**
 * A subset of SVG path syntax (M L H V C Q Z, absolute and relative) as closed outlines, in
 * the slab's XY (y up, not SVG's y down). Each subpath is its own solid: no holes.
 */
export declare function svgOutlines(path: string): [number, number][][];
/** Parse an imported mesh: positions (m) and, per slot, its triangles. Throws on malformed data. */
export declare function parseMesh(m: MeshData): {
    v: number[];
    f: Map<Slot, number[]>;
};
/**
 * The triangles of one primitive in its own frame, per slot: `slot` for every kind but
 * `mesh`, whose faces name their own slots. Throws on malformed input (a bad mesh or path).
 */
export declare function primTriangles(p: Prim, slot: Slot): Map<Slot, number[]>;
