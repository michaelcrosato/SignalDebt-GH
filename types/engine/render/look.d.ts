/**
 * Looks: which filters run on which part of the picture.
 *
 * A frame has two kinds of things in it: **actors** (characters and objects: the hero,
 * monsters, townsfolk, loot, chests; anything a game tags with `setLookLayer(obj, 'actors')`)
 * and the **environment** (everything else: floors, walls, buildings, trees). A `Look` gives
 * each of them its own source and filter stack, and then runs a third stack over the whole
 * composed frame:
 *
 *   actors      → pixel art (or clean) + actor filters   ─┐
 *                                                         ├─ composed by depth ─▶ scene filters ─▶ screen
 *   environment → pixel art (or clean) + world filters   ─┘
 *
 * So a clean, full-resolution world with pixel-art characters is
 * `{ actors: { pixel: crisp }, environment: { pixel: null } }`. When both layers are the
 * same (the default: pixel art everywhere, filters on the whole scene) the renderer draws
 * the scene once, exactly as before; only a look that differs per layer pays for a second
 * scene pass. Filter parameters are uniforms, so moving a slider never rebuilds a shader.
 *
 * Everything here is plain data (unit-tested in `look.test.ts`): the renderer turns a look
 * into a node graph (`PixelRenderer.setLook`).
 */
import { type FilterParam } from './filters';
import type { LookLayer } from './lookLayer';
export { LOOK_LAYER_KEY, lookLayerOf, setLookLayer, type LookLayer } from './lookLayer';
/** Where a filter stack applies: the whole composed frame, or one layer. */
export type LookTarget = 'scene' | LookLayer;
export declare const LOOK_TARGETS: readonly LookTarget[];
export declare const LOOK_TARGET_LABELS: Readonly<Record<LookTarget, string>>;
/** Pixel-art rendering of a layer: the scene at the art resolution with outlines. */
export interface PixelLook {
    /** Art pixels per rendered pixel: 1 = the native art resolution, 2+ = chunkier. */
    size: number;
    /** Silhouette (depth) outline darkening, 0..1. */
    outline: number;
    /** Internal crease highlight (normal edges), 0..1. Keep it weak. */
    crease: number;
}
/** One filter in a stack, with its parameter values (missing ones are the defaults). */
export interface LookFilter {
    id: string;
    params?: Record<string, number>;
}
/** A layer's own look: its source (pixel art or clean) and its filters. */
export interface LayerLook {
    /** Pixel-art settings, or null for clean full-resolution rendering. */
    pixel: PixelLook | null;
    filters: LookFilter[];
}
export interface Look {
    /** Filters on the composed frame (both layers). */
    scene: LookFilter[];
    actors: LayerLook;
    environment: LayerLook;
}
export declare const PIXEL_PARAMS: readonly FilterParam[];
export declare const PIXEL_PRESETS: Readonly<Record<string, Readonly<PixelLook>>>;
export declare const DEFAULT_PIXEL: Readonly<PixelLook>;
/** The engine default: pixel art everywhere, no filters. */
export declare function defaultLook(): Look;
/** A plain stack of filters on the whole scene (what `setFilters(ids)` means), keeping `base`'s layers. */
export declare function lookFromFilters(ids: readonly string[], base?: Look): Look;
export declare function cloneLook(look: Look): Look;
/** The filters of one target (scene stack or a layer's). */
export declare function lookFilters(look: Look, target: LookTarget): LookFilter[];
export declare function normalizePixel(raw: unknown): PixelLook | null;
/**
 * A complete, valid look from anything (storage, the URL, an agent): unknown filters and
 * duplicates dropped (and `sceneOnly` filters from layer stacks), every parameter present
 * and clamped to its range, layers defaulted.
 */
export declare function normalizeLook(raw: unknown): Look;
export declare function looksEqual(a: Look, b: Look): boolean;
export declare function pixelsEqual(a: PixelLook | null, b: PixelLook | null): boolean;
/** The layers' pixel settings when they are the same (what "whole scene" pixel art means), else undefined. */
export declare function scenePixel(look: Look): PixelLook | null | undefined;
/** One scene render the renderer needs: the whole scene, or one layer. */
export interface LookSource {
    layer: 'all' | LookLayer;
    pixel: PixelLook | null;
    /** Filters of this source before composing (empty for `all`). */
    filters: LookFilter[];
}
export interface LookPlan {
    /** Two scene passes (actors and environment) composed by depth. */
    split: boolean;
    sources: LookSource[];
    /** Filters on the composed frame. */
    scene: LookFilter[];
    /**
     * What decides the node graph: pixel on/off per source and the filter ids in order.
     * Parameter values and pixel sizes are uniforms and stay out of it.
     */
    key: string;
}
/**
 * What a look needs from the renderer. One scene pass when both layers look the same
 * (same pixel settings, no per-layer filters), two otherwise.
 */
export declare function planLook(look: Look): LookPlan;
/** Filter ids active in a target (setActive side effects such as the PS1 wobble). */
export declare function activeIds(look: Look, target: LookTarget): string[];
/**
 * Named looks: the default (`none`: pixel art, no filters), `no_filters` (nothing at all:
 * full resolution, no pixel art, no outlines, no filters), every plain filter stack
 * (`FILTER_PRESETS`) as a whole-scene look, then looks that mix layers and stacks.
 */
export declare const LOOK_PRESETS: Readonly<Record<string, Look>>;
/** Names looks used to have (stored settings, links): `hd_clean` is `no_filters` now. */
export declare const LOOK_ALIASES: Readonly<Record<string, string>>;
/** The `LOOK_PRESETS` name a name means (aliases resolved), or null when there is none. */
export declare function lookPresetName(name: string): string | null;
/** How a menu shows a look's name: `none` is the default, underscores are spaces. */
export declare function lookPresetLabel(name: string): string;
/** The preset name a look matches, or null (custom). */
export declare function lookPresetOf(look: Look): string | null;
/**
 * The parameter preset a filter's values match, or null (custom). A preset sets its own
 * keys and the defaults for the rest; strength (`amount`) only counts when the preset sets it,
 * so a half-strength "heavy" is still "heavy".
 */
export declare function filterPresetOf(presets: Readonly<Record<string, Readonly<Record<string, number>>>>, defaults: Record<string, number>, values: Record<string, number>): string | null;
/** Parameter values of a filter in a look (defaults filled in). */
export declare function paramsOf(f: LookFilter): Record<string, number>;
/** Canonical position of a filter (the order of FILTERS), so stacks edited by a UI stay in a sensible order. */
export declare function filterOrder(id: string): number;
