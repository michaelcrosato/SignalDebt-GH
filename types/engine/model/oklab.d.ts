/**
 * OKLab (Björn Ottosson's perceptual colour space) for comparing palette colours: lightness
 * L in 0..1, a and b around 0. Model checks use L (do two touching masses read apart?); the
 * importer's palette mapper (docs/plans/asset-system.md §7.3) uses all three.
 */
export interface OkLab {
    readonly L: number;
    readonly a: number;
    readonly b: number;
}
/** An sRGB colour (0xrrggbb) in OKLab. */
export declare function oklab(hex: number): OkLab;
/** An OKLab colour back in sRGB (0xrrggbb), clamped to the gamut. */
export declare function oklabHex({ L, a, b }: OkLab): number;
/** Lightness, chroma and hue (radians) of an OKLab colour. */
export declare function lch(c: OkLab): {
    readonly L: number;
    readonly C: number;
    readonly h: number;
};
/** Euclidean distance in OKLab (about 0.02 is a just-noticeable step). */
export declare const oklabDistance: (p: OkLab, q: OkLab) => number;
