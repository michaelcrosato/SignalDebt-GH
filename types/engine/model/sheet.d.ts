/**
 * Model sheets for agents (`npm run model -- sheet`, docs/ASSETS.md): a model drawn the ways
 * that answer "is it right?": an 8-angle turntable, front / side / top orthographic views on a
 * 0.1 m grid with its dimensions, game-scale previews (Riftlight's iso camera at the level and
 * town zooms, one art pixel per pixel, then ×4), its palette, part labels, anchors and
 * colliders, the warnings, and the previous version in magenta. Built on the inspect renderer
 * and the software canvas (no GPU, no DOM), so it runs in Node and in the browser.
 */
import { Box3, type Object3D, Vector3 } from 'three/webgpu';
import { type RGB, type SheetImage, type TexelSampler } from '../animation/raster';
import { worldTriangles } from '../inspect/render';
import { type ModelBuild, type ModelReport } from './build';
import { type Bounds, type Compiled } from './compile';
import type { ExpandedModel, ModelOptions } from './expand';
import type { TextureCatalog } from '../texture/catalog';
import type { ModelDef } from './types';
import { type ModelCheck } from './validate';
export { GAME_VIEW, gamePxPerMetre } from './view';
/** 0xrrggbb as [r, g, b]. */
export declare const rgbOf: (hex: number) => RGB;
/** Model-space triangles of compiled parts, with their slot colour (for the ortho views and compare). */
export interface FlatTri {
    readonly p: readonly [Vector3, Vector3, Vector3];
    readonly color: RGB;
    readonly unlit: boolean;
    readonly part: number;
    /** A textured part's triangle: its UVs (a, b, c) and its texture's sampler. */
    readonly tex?: {
        readonly uv: ArrayLike<number>;
        readonly sample: TexelSampler;
    };
}
/** Where textured parts' textures come from, and at what density (the build's own). */
export interface SheetTextures {
    readonly texel: number;
    readonly textures: TextureCatalog;
}
/** Textured parts get their texels when `tex` is given (the ortho views), else their slot colour (compare). */
export declare function flatTriangles(compiled: Compiled, palette: ExpandedModel['palette'], tex?: SheetTextures): FlatTri[];
type Axis = 'front' | 'side' | 'top';
export interface OrthoOptions {
    readonly size?: number;
    /** Pixels per metre (shared by the three views so they compare). */
    readonly scale: number;
    /** The frame (model space) the views are centred on. */
    readonly frame: Box3;
    /** The previous version, drawn as a magenta outline. */
    readonly previous?: readonly FlatTri[];
    /** Write part names at their centres. */
    readonly labels?: readonly {
        text: string;
        at: Vector3;
    }[];
    readonly anchors?: ModelBuild['anchors'];
    readonly colliders?: ModelBuild['colliders'];
}
/** One orthographic view: 0.1 m grid (0.5 m lines brighter), the model, its dimensions. */
export declare function renderOrtho(tris: readonly FlatTri[], axis: Axis, o: OrthoOptions): SheetImage;
/** Nearest-neighbour upscale (game-scale previews are blown up ×4 so single art pixels show). */
export declare function upscale(img: SheetImage, k: number): SheetImage;
/**
 * The model as it reads in the game: Riftlight's iso view at `zoom`, one art pixel per pixel,
 * blown up ×`k` (default 4).
 */
export declare function renderGameScale(object: Object3D, zoom: number, o?: {
    k?: number;
    label?: string;
    tris?: ReturnType<typeof worldTriangles>;
}): SheetImage;
/**
 * What Gate A's judge sees (docs/plans/asset-system.md §12): the turntable and the game-scale
 * previews, with no swatches, labels or check results, so models made either way look alike.
 */
export declare function renderJudge(object: Object3D): SheetImage;
/** Palette swatches: slot, colour name (or hex) and a chip; then each texture's id and a corner of it at 1×. */
export declare function swatches(palette: ExpandedModel['palette'], width: number, used?: ReadonlySet<string>, textures?: readonly {
    id: string;
    rgba: Uint8Array;
    width: number;
    height: number;
}[]): SheetImage;
export interface SheetInput {
    readonly model: ExpandedModel;
    readonly compiled: Compiled;
    readonly build: ModelBuild;
    readonly check: ModelCheck;
    /** The previous version's triangles (magenta). */
    readonly previous?: readonly FlatTri[];
    readonly labels?: boolean;
    readonly rig?: boolean;
    /** Extra lines under the title (params, seed, source). */
    readonly subtitle?: string;
    /** Where the parts' `tex` ids resolve (default `TEXTURE_LIBRARY`, as `buildModel`). */
    readonly textures?: TextureCatalog;
}
/** The model sheet (see the file comment). */
export declare function renderModelSheet(s: SheetInput): SheetImage;
/**
 * `modelSheet`'s options: `buildModel`'s (`params`, `seed`, `palette`, `light`, `catalog` where
 * ids and `use` resolve, `textures` where `tex` resolves), plus what the sheet draws.
 */
export interface ModelSheetOptions extends ModelOptions {
    /** Named parts' and groups' names on the views. */
    readonly labels?: boolean;
    /** Anchors (cyan) and colliders (green) on the views. */
    readonly rig?: boolean;
    /** One more line under the title. */
    readonly note?: string;
}
/** A model's sheet (`image`: width, height and RGBA `data`) and the check it shows. */
export interface ModelSheet {
    readonly image: SheetImage;
    readonly problems: readonly string[];
    readonly warnings: readonly string[];
    /** Tris, draws, materials, parts (null when it can't be built). */
    readonly report: ModelReport | null;
    /** Its bounds in metres: min, max and size (null when it can't be built). */
    readonly bounds: Bounds | null;
}
/**
 * The model sheet `npm run model -- sheet` draws, for a library id or any def (a game's own):
 * the turntable, front / side / top on a 0.1 m grid with the size, the game-scale previews, the
 * palette and `checkModel`'s problems and warnings over every param's range. Software-drawn: no
 * GPU, no DOM, so it runs in Node and in a browser (the kit's `check.mjs --sheets`). A def that
 * can't be built (an unknown slot, `use` or texture) gets a sheet of its problems alone.
 *
 *   const { image, problems } = modelSheet(myStall, { catalog: myModels }); // image: RGBA pixels
 */
export declare function modelSheet(idOrDef: string | ModelDef, opts?: ModelSheetOptions): ModelSheet;
