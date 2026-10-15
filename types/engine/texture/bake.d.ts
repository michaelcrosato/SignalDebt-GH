/**
 * TextureDef → texels. `bakeTexture` draws the layers in order onto a grid of palette indices
 * (0 = transparent) and resolves them to RGBA, with no DOM and no GPU, so tools, tests and the
 * game all see the same texels. Everything that stops a texture baking right (a malformed def or
 * layer, an unknown slot or colour, a pixel missing from its legend, ragged rows, a bad pattern
 * parameter, frames that don't divide the width) is collected as a problem, not thrown;
 * `validateTexture` reports them with the warnings, and the converters refuse a texture that has
 * any.
 */
import { type PaletteColor } from '../palette';
import type { Layer, PatternLayer, PixelsLayer, TexSlot, TextureDef } from './types';
export interface BakedTexture {
    readonly id: string;
    readonly width: number;
    readonly height: number;
    /** Per texel, row by row from the top: the slot's index in `slots` + 1, or 0 (transparent). */
    readonly indices: Uint8Array;
    /** The palette's slots, in order. */
    readonly slots: readonly TexSlot[];
    /** RGBA per texel (sRGB), row by row from the top; transparent texels are 0, 0, 0, 0. */
    readonly rgba: Uint8Array;
    readonly problems: readonly string[];
}
export interface BakeOptions {
    /** Re-bind slots to other PALETTE colours or hex numbers (a theme's tint). */
    readonly palette?: Readonly<Record<TexSlot, PaletteColor | number>>;
}
export declare const isPattern: (l: Layer) => l is PatternLayer;
export declare const isPixels: (l: Layer) => l is PixelsLayer;
export declare function bakeTexture(def: TextureDef, opts?: BakeOptions): BakedTexture;
/** The mean colour of the opaque texels (0xrrggbb, sRGB): what a textured surface reads as from afar. */
export declare function meanColour(b: BakedTexture): number;
