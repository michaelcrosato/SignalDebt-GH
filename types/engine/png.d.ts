/**
 * A PNG decoder in plain TypeScript (no DOM, no Node), for tools that read images headless: the
 * model importer's texture atlases (docs/plans/asset-system.md §7.2) and, later, `tex -- import`.
 * It reads greyscale, RGB, palette, grey + alpha and RGBA images at 8 bits a channel (and the
 * 1, 2, 4 and 16-bit depths those types allow), the five scanline filters, and `tRNS`
 * transparency. Adam7-interlaced images are refused. Decompression is injected (`inflate`), so
 * browser code never pulls in a Node module: tools pass `node:zlib`'s `inflateSync`.
 *
 *   const img = decodePng(readFileSync('colormap.png'), inflateSync);
 */
/** zlib inflate: the IDAT stream (zlib header included) → raw bytes. */
export type Inflate = (bytes: Uint8Array) => Uint8Array;
/** RGBA, 4 bytes a pixel, row by row from the top (the shape `encodePng` takes). */
export interface RgbaImage {
    readonly width: number;
    readonly height: number;
    readonly data: Uint8ClampedArray;
}
/** A PNG the decoder can't read, with what is wrong. */
export declare class PngError extends Error {
    constructor(message: string);
}
/** Decode a PNG file's bytes to RGBA (see the file comment for what it reads). */
export declare function decodePng(bytes: Uint8Array, inflate: Inflate): RgbaImage;
