export declare const GLYPH_W = 6;
export declare const GLYPH_H = 8;
/** Call `plot(x, y)` for every lit pixel of `text` at (x, y), top-left origin. */
export declare function drawText(text: string, x: number, y: number, plot: (x: number, y: number) => void, scale?: number): number;
export declare function textWidth(text: string, scale?: number): number;
