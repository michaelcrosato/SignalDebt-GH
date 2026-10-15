/** Tiny RGBA software canvas shared by contact sheets, curve plots and filmstrips (no GPU, no DOM). */
export interface SheetImage {
    width: number;
    height: number;
    data: Uint8ClampedArray;
}
export declare const BG: RGB;
export declare const CELL_BG: RGB;
export declare const GRID: RGB;
export declare const GROUND: RGB;
export declare const TEXT: RGB;
export declare const DIM: RGB;
export declare const RIGHT: RGB;
export declare const LEFT: RGB;
export declare const CENTRE: RGB;
export declare const CONTACT: RGB;
export declare const BAD: RGB;
export declare const WARN: RGB;
export type RGB = [number, number, number];
/** A colour per pixel from its barycentric weights on the triangle's corners a, b and c. */
export type Shader = (wa: number, wb: number, wc: number) => RGB;
/** Reads a texture's colour (sRGB 0..255) at (u, v), nearest texel, v = 0 at the bottom row. */
export type TexelSampler = (u: number, v: number) => RGB;
/**
 * A nearest-texel sampler over RGBA bytes, as the GPU samples a pixel-art map: repeat-wrapped
 * (else clamped), and `bottomFirst` when row 0 of the data is the texture's bottom (a
 * `DataTexture` with `flipY` false), else its top (a baked texture, an image).
 */
export declare function texelSampler(data: ArrayLike<number>, width: number, height: number, o: {
    repeat: boolean;
    bottomFirst: boolean;
}): TexelSampler;
/** A shader that samples `sample` at the triangle's UVs (6 numbers: a, b, c) and tints it. */
export declare function texturedShader(uv: ArrayLike<number>, sample: TexelSampler, tint: RGB): Shader;
/**
 * Per-triangle preview colours for the software rasterizers (contact sheets, inspect,
 * portraits). A geometry whose shader colours it procedurally (vertex attributes, TSL
 * patterns) can carry `userData.triColors`: 4 bytes per triangle in draw order, sRGB r, g,
 * b and flags (bit 0 = unlit, bits 1..7 = which merged piece it came from, so outlines
 * still separate parts merged into one mesh). Returns null when the geometry has none, so
 * callers fall back to the material colour.
 */
export declare function presetTriangleColour(userData: {
    triColors?: Uint8Array;
} | undefined, triangle: number): {
    rgb: RGB;
    unlit: boolean;
    piece: number;
} | null;
/** Outline id of a triangle: its mesh, and its merged piece when the mesh carries `triColors`. */
export declare function outlineId(mesh: number, preset: {
    piece: number;
} | null): number;
export declare class Canvas {
    readonly width: number;
    readonly height: number;
    readonly data: Uint8ClampedArray;
    readonly depth: Float32Array;
    readonly ids: Uint16Array;
    constructor(width: number, height: number);
    set(x: number, y: number, c: RGB, a?: number): void;
    rect(x: number, y: number, w: number, h: number, c: RGB, a?: number): void;
    line(x0: number, y0: number, x1: number, y1: number, c: RGB, a?: number, thick?: number): void;
    text(s: string, x: number, y: number, c: RGB, scale?: number): void;
    /** A depth-tested triangle in one colour, or a colour per pixel (`Shader`). */
    tri(ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number, c: RGB | Shader, id: number, clip: Rect): void;
    /** Cel outlines: darken covered pixels whose neighbour belongs to another mesh. */
    outline(clip: Rect): void;
}
export interface Rect {
    x: number;
    y: number;
    w: number;
    h: number;
}
