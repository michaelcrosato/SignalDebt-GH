import type { Framing, Resolution } from '../framing';
import { type PaletteColor } from '../palette';
/** Where an element is attached on screen; it is also aligned that way (right-anchored text grows left). */
export type HudAnchor = 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';
export type HudColor = PaletteColor | number;
export interface HudOptions {
    /** Default 'white'. */
    color?: HudColor;
    /** 1-pixel drop shadow color, or false. Default 'ink'. */
    shadow?: HudColor | false;
    /** Integer art-pixel scale (2 = double-size glyphs). Default 1. */
    scale?: number;
    /** Default 'top-left': x/y are offsets from that screen corner/edge, in art pixels. */
    anchor?: HudAnchor;
}
/**
 * Pixel HUD: crisp text and icons drawn in art pixels on top of the game, never through
 * the post filters. It is a 2D canvas at the internal resolution (480×270 / 320×180),
 * laid over the game canvas with the same integer scale and letterbox offset
 * (`framing.ts`), so one HUD pixel is exactly one art pixel at every resolution.
 *
 * Retained: what you add stays on screen until `clear()`. Redraw everything each frame
 * (clear + add) or only when something changes; the canvas repaints only when the content,
 * resolution or framing changed. Available as `ctx.hud`.
 *
 *   ctx.hud.clear();
 *   ctx.hud.text(4, 4, `COINS ${n}/12`, { color: 'sand' });
 *   ctx.hud.text(4, 4, 'PAUSED', { anchor: 'center', scale: 2 });
 */
export declare class Hud {
    private readonly container;
    /** The overlay canvas (created on the first draw; null when nothing was ever drawn). */
    canvas: HTMLCanvasElement | null;
    visible: boolean;
    private items;
    private drawn;
    private size;
    private layoutKey;
    constructor(container: HTMLElement | null);
    /** HUD width/height in art pixels (the internal resolution). */
    get width(): number;
    get height(): number;
    /** Text in the 5×7 bitmap font (uppercase; digits and common punctuation). */
    text(x: number, y: number, text: string, options?: HudOptions): void;
    /** A filled rectangle (panels, bars). */
    rect(x: number, y: number, w: number, h: number, color: HudColor, anchor?: HudAnchor): void;
    /**
     * A tiny pixel-art icon as data: one string per row, one character per pixel, mapped
     * through `colors` ('.' or ' ' = transparent).
     *
     *   hud.sprite(4, 4, ['.yy.', 'ywyy', 'yyyy', '.yy.'], { y: 'sand', w: 'white' });
     */
    sprite(x: number, y: number, rows: readonly string[], colors: Record<string, HudColor>, options?: HudOptions): void;
    /** Remove everything. */
    clear(): void;
    /** Size of `text` in art pixels at `scale`. */
    measure(text: string, scale?: number): {
        width: number;
        height: number;
    };
    /** Engine: follow the renderer's resolution and framing, and repaint if needed. */
    sync(resolution: Resolution, framing: Framing): void;
    dispose(): void;
    private createCanvas;
    private paint;
    private glyphs;
    private place;
}
/**
 * Top-left corner, in whole art pixels, of a w×h element placed at offset (x, y) from
 * `anchor` on a screen of `size` art pixels. Pure (unit-tested).
 */
export declare function hudPlace(x: number, y: number, w: number, h: number, anchor: HudAnchor, size: Resolution): [number, number];
