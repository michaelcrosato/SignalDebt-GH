/**
 * Restrained 16-color palette (Sweetie 16 by GrafxKid). Every color in a game should come
 * from here: authentic pixel art reads as "designed" because the palette is small.
 * Keep in sync with scripts/generate-assets.mjs.
 */
export declare const PALETTE: {
    readonly ink: 1711148;
    readonly plum: 6104925;
    readonly red: 11615827;
    readonly orange: 15695191;
    readonly sand: 16764277;
    readonly lime: 11006064;
    readonly green: 3716964;
    readonly teal: 2453881;
    readonly navy: 2700911;
    readonly blue: 3890633;
    readonly sky: 4302582;
    readonly cyan: 7598071;
    readonly white: 16053492;
    readonly mist: 9744578;
    readonly slate: 5663878;
    readonly night: 3357783;
};
export type PaletteColor = keyof typeof PALETTE;
/** Whether a value names a PALETTE colour. */
export declare const isPaletteName: (v: unknown) => v is PaletteColor;
