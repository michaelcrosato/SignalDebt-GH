/**
 * Post-processing filters, all TSL, applied in display (sRGB) space after the pipeline's
 * output color transform and before presentation. Stackable in any order; pixel-space
 * filters (dithering, palettes, LCD grid, grain) work per *art pixel*, so they stay
 * authentic at any integer scale. Raw 3D mode bypasses all of them.
 *
 * Every filter declares the resolution it runs at (`space`):
 * - `art`: one result per art pixel (palettes, dither, colour grades, grain, …). These run
 *   in the art-resolution stage, before the single nearest-neighbour upscale, so they cost
 *   1/scale² of a device-resolution pass (1/16 at 4×).
 * - `display`: needs sub-art-pixel detail (scanlines, LCD gaps, CRT mask/curvature, VHS
 *   wobble, chromatic split, bloom, halftone dots, ink lines). Runs per device pixel.
 * A stack runs its leading `art` filters at art resolution and everything from the first
 * `display` filter on at device resolution (so the order you asked for is kept exactly).
 */
type N = any;
export interface FilterContext {
    /** Device pixels per art pixel (uniform). 1 in the art-resolution stage. */
    pixelSize: N;
    /**
     * Render a node into a texture at the current stage's resolution (art-sized in the art
     * stage). Defaults to `convertToTexture` (drawing-buffer sized).
     */
    texture?(node: N): N;
    /**
     * A filter parameter's value as a node. The renderer hands out one uniform per layer,
     * filter and parameter, so moving a slider never rebuilds or recompiles a graph.
     * Without it every parameter is its default, as a constant.
     */
    param?(id: string, key: string): N;
    /** Scene depth (0 near … 1 far) at a screen uv, where the stage has one (the cel filter's ink). */
    depth?(uv: N): N;
}
export type FilterSpace = 'art' | 'display';
export type FilterGroup = 'shading' | 'era' | 'palette' | 'color' | 'display' | 'signal' | 'stylize';
/** A tunable number of a filter (a slider in a look editor). */
export interface FilterParam {
    readonly key: string;
    readonly label: string;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    readonly default: number;
    /** How a value reads: `%` (0..1 as a percentage), `x` (a multiplier), `px` (art pixels). */
    readonly unit?: '%' | 'x' | 'px';
}
/** Reads one of the filter's own parameters (by key) as a node. */
export type ParamReader = (key: string) => N;
export interface FilterDef {
    readonly id: string;
    readonly label: string;
    readonly group: FilterGroup;
    /** Resolution the filter runs at (see the module comment). */
    readonly space: FilterSpace;
    /** Tunable numbers besides `amount` (every filter has that one: see `filterParams`). */
    readonly params?: readonly FilterParam[];
    /** Named parameter sets ("subtle", "heavy", …). Missing keys keep their defaults. */
    readonly presets?: Readonly<Record<string, Readonly<Record<string, number>>>>;
    apply(color: N, fx: FilterContext, p: ParamReader): N;
    /**
     * Moves pixels (curves, splits, smears): runs on the whole scene only. A layer's filters
     * run before the layers are composed by depth, so a warp there would no longer line up
     * with the other layer (render/look.ts drops these from layer stacks).
     */
    readonly sceneOnly?: boolean;
    /** Side effects outside the post pass (e.g. PS1 vertex snapping), toggled with the filter. */
    setActive?(active: boolean): void;
}
/** Every filter's strength: the filtered colour mixed over the input (0 = off, 1 = full). */
export declare const AMOUNT: FilterParam;
export declare const PALETTES: {
    readonly sweetie16: (1711148 | 6104925 | 11615827 | 15695191 | 16764277 | 11006064 | 3716964 | 2453881 | 2700911 | 3890633 | 4302582 | 7598071 | 16053492 | 9744578 | 5663878 | 3357783)[];
    readonly pico8: readonly [0, 1911635, 8267091, 34641, 11227702, 6248271, 12764103, 16773608, 16711757, 16753408, 16772135, 58422, 2731519, 8615580, 16742312, 16764074];
    readonly c64: readonly [0, 16777215, 8912896, 11206638, 13386956, 52309, 170, 15658615, 14518357, 6702080, 16742263, 3355443, 7829367, 11206502, 35071, 12303291];
    readonly zx: readonly [0, 215, 14090240, 14090455, 55040, 55255, 14145280, 14145495, 255, 16711680, 16711935, 65280, 65535, 16776960, 16777215];
    readonly ega: readonly [0, 170, 43520, 43690, 11141120, 11141290, 11162880, 11184810, 5592405, 5592575, 5635925, 5636095, 16733525, 16733695, 16777045, 16777215];
    readonly cga: readonly [0, 5636095, 16733695, 16777215];
    readonly nes: readonly [0, 16579836, 12369084, 8158332, 10806524, 3980540, 30968, 252, 12105976, 6850812, 22776, 188, 14203128, 9992440, 6833404, 4466876, 16300280, 16283896, 14155980, 9699460, 16295104, 16275608, 14942296, 11010080, 15782064, 16283736, 16267264, 11014144, 16572584, 16556100, 14965776, 8918016, 16308344, 16300032, 11303936, 5255168, 14219384, 12122136, 47104, 30720, 12122296, 5822548, 43008, 26624, 12122328, 5830808, 43076, 22528, 64764, 59608, 34952, 16472];
};
export declare const FILTERS: readonly FilterDef[];
export declare const FILTER_IDS: string[];
export declare function getFilter(id: string): FilterDef | undefined;
/** A filter's parameters: its own, then `amount` (strength), which every filter has. */
export declare function filterParams(def: FilterDef): readonly FilterParam[];
/** Every parameter of a filter at its default. */
export declare function defaultParams(def: FilterDef): Record<string, number>;
/** Named parameter sets of a filter: its own presets, or strengths for filters with none. */
export declare function filterPresets(def: FilterDef): Readonly<Record<string, Readonly<Record<string, number>>>>;
/** Clamp a value into a parameter's range, on its step. */
export declare function clampParam(p: FilterParam, v: number): number;
/** Named stacks that read well together. */
export declare const FILTER_PRESETS: Record<string, readonly string[]>;
/**
 * Split a stack into the part that runs at art resolution (its leading `art` filters) and
 * the part that runs per device pixel (from the first `display` filter on, in order).
 * Unknown ids are dropped.
 */
export declare function splitFilters(ids: readonly string[]): {
    art: string[];
    display: string[];
};
/**
 * Apply one filter: its parameters come from `fx.param` (defaults without it), and the
 * result is mixed over the input by its `amount`. Unknown ids return the input.
 */
export declare function applyFilter(color: N, id: string, fx: FilterContext): N;
/** Apply filters in order. Unknown ids are skipped. */
export declare function applyFilters(color: N, ids: readonly string[], fx: FilterContext): N;
export {};
