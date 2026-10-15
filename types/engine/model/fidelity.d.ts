/**
 * Fidelity scoring (docs/plans/asset-system.md §7.6): how faithfully one set of coloured
 * triangles (a translation: an import's ModelDef, later an agent's trace) draws another (its
 * source). Both are drawn by the software rasterizer the model sheets use, at 4 yaws, at game
 * scale (Riftlight's camera at the level zoom) and close up. Per view: the silhouette IoU
 * (pixels either covers, the background left out) and the mean OKLab distance between their
 * flat colours where both cover a pixel; overall, the bounds delta. Pure, so tools and tests
 * share it.
 *
 *   const score = scoreFidelity(imported.source, modelTriangles(def));
 *   score.iou       // the worst game-scale view; an import below 0.98 is an importer bug
 */
import { Box3 } from 'three/webgpu';
import { type SheetImage } from '../animation/raster';
import type { ModelOptions } from './expand';
import type { ModelDef, Vec3 } from './types';
/** Triangles with a colour each: any source, any translation. */
export interface ColouredTris {
    /** 9 numbers a triangle, metres, model space. */
    readonly positions: ArrayLike<number>;
    /** sRGB per triangle (0xrrggbb). */
    readonly colours: ArrayLike<number>;
}
/** The yaws both scales are drawn at: the game's own and the other three diagonals. */
export declare const FIDELITY_YAWS: readonly [45, 135, 225, 315];
/** Pixels across the frame's diagonal at close scale. */
export declare const CLOSE_PX = 240;
export interface FidelityView {
    readonly yaw: number;
    readonly scale: 'game' | 'close';
    /** Pixels per metre. */
    readonly ppm: number;
    readonly iou: number;
    /** Mean OKLab distance where both cover a pixel (null when nothing overlaps). */
    readonly colour: number | null;
    readonly pixels: {
        readonly source: number;
        readonly translation: number;
        readonly both: number;
    };
}
export interface FidelityScore {
    /** The worst game-scale IoU. */
    readonly iou: number;
    /** The worst close-scale IoU. */
    readonly iouClose: number;
    /** Mean OKLab distance over every overlapping pixel of every view. */
    readonly colour: number;
    /** Translation's size minus source's (m). */
    readonly bounds: Vec3;
    readonly views: readonly FidelityView[];
}
export interface FidelityRaster {
    readonly side: number;
    readonly ids: Uint16Array;
    readonly data: Uint8ClampedArray;
}
/** One view of `fidelityViews`: square, `side` pixels, `ppm` pixels a metre, centred on `frame`. */
export interface FidelityViewFrame {
    readonly yaw: number;
    readonly scale: 'game' | 'close';
    readonly pitch: number;
    readonly ppm: number;
    readonly side: number;
    readonly frame: Box3;
}
/** Flat colours through one view (ids mark coverage): what the scores count. */
export declare function fidelityRaster(t: ColouredTris, yaw: number, pitch: number, ppm: number, frame: Box3, side: number): FidelityRaster;
/** The 8 views both are drawn in (4 yaws at game scale, then close), framed on both. */
export declare function fidelityViews(source: ColouredTris, translation: ColouredTris): FidelityViewFrame[];
/** Score a translation against its source (see the file comment). */
export declare function scoreFidelity(source: ColouredTris, translation: ColouredTris): FidelityScore;
/**
 * A ModelDef's triangles as the sheets draw them (`flatTriangles`), wound outward, with their
 * bound colours; a textured face takes its texel at the face's UV centroid, as the importer
 * samples an atlas.
 */
export declare function modelTriangles(idOrDef: string | ModelDef, opts?: ModelOptions): ColouredTris;
/** Shaded, the sheets' look: the inspect renderer over triangles of our own. */
export declare function fidelityShaded(t: ColouredTris, v: FidelityViewFrame): SheetImage;
/** Where they differ: the source alone magenta, the translation alone cyan, both grey to red by colour distance. */
export declare function fidelityDifference(s: FidelityRaster, t: FidelityRaster): SheetImage;
export interface FidelitySheetOptions {
    readonly title: string;
    readonly subtitle?: string;
    /** Source and mapped colours side by side, one row a slot. */
    readonly swatches?: readonly {
        readonly slot: string;
        readonly source: number;
        readonly mapped: number;
        readonly name: string;
    }[];
    /** More lines under the scores (parts, notes). */
    readonly notes?: readonly string[];
    /** The IoU an import should reach (drawn green at or above, red below). */
    readonly threshold?: number;
}
/**
 * The fidelity sheet: per view (4 yaws, game scale ×4 and close), the source, the translation
 * and their difference; the scores; the colour swatches when given.
 */
export declare function renderFidelity(source: ColouredTris, translation: ColouredTris, score: FidelityScore, o: FidelitySheetOptions): SheetImage;
