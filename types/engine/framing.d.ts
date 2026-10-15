/**
 * Pure layout math for pixel-perfect presentation. No DOM, no three.js: unit-tested.
 *
 * The canvas backing store is sized to `art × scale` device pixels with an integer
 * `scale`, and the scene renders at exactly the art resolution (pixelSize = scale). Every
 * art pixel therefore covers an integer block of device pixels, and the canvas is centered
 * inside the viewport. Fixed/adaptive framing letterboxes; fill framing crops only the
 * excess device pixels at the edges of the last art pixel.
 *
 * Three aspect modes:
 * - `fixed`: the art resolution is exactly `internal` (16:9); other screen shapes letterbox.
 * - `adaptive`: the art *height* stays `internal.height` and the art width follows the
 *   screen's aspect (clamped to ADAPTIVE_ASPECT), so phones in portrait or landscape and
 *   odd window shapes fill the screen. Still integer-scaled. On a 16:9 screen it is
 *   identical to `fixed`.
 * - `fill`: the art width and height follow the viewport at the nearest integer scale
 *   to `internal.height`. The canvas covers every edge without stretching art pixels.
 */
export interface Resolution {
    readonly width: number;
    readonly height: number;
}
export declare const RESOLUTIONS: {
    /** Default internal resolution (16:9, 4× → 1920×1080). */
    readonly default: {
        readonly width: 480;
        readonly height: 270;
    };
    /** Chunkier comparison resolution (16:9, 6× → 1920×1080). */
    readonly compare: {
        readonly width: 320;
        readonly height: 180;
    };
};
export type AspectMode = 'fixed' | 'adaptive' | 'fill';
/** Art aspect ratios (width / height) the adaptive mode allows; beyond them it letterboxes. */
export declare const ADAPTIVE_ASPECT: {
    readonly min: 0.4;
    readonly max: 2.4;
};
export interface Framing {
    /** Art (internal) resolution actually rendered. Equals `internal` in fixed mode. */
    readonly artWidth: number;
    readonly artHeight: number;
    /** Device pixels per art pixel. Integer whenever `integer` is true. */
    readonly scale: number;
    /** True when every art pixel maps to an integer block of device pixels. */
    readonly integer: boolean;
    /** Canvas backing-store size in device pixels. */
    readonly canvasWidth: number;
    readonly canvasHeight: number;
    /** Canvas CSS size and offset inside the viewport, in CSS pixels. */
    readonly cssWidth: number;
    readonly cssHeight: number;
    readonly offsetX: number;
    readonly offsetY: number;
}
/**
 * @param viewportWidth  viewport width in CSS pixels
 * @param viewportHeight viewport height in CSS pixels
 * @param devicePixelRatio window.devicePixelRatio
 * @param internal the art resolution (in adaptive mode: its height, and the 16:9 fallback)
 * @param aspect `fixed` (exactly `internal`), `adaptive` (art width follows the screen),
 * or `fill` (both art dimensions follow the screen, with no letterbox)
 */
export declare function computeFraming(viewportWidth: number, viewportHeight: number, devicePixelRatio: number, internal: Resolution, aspect?: AspectMode): Framing;
/**
 * Size of one art pixel in world units for an orthographic camera whose visible
 * height is `viewHeight` world units. Used to snap the *camera* (never physics) to the
 * pixel grid so static geometry doesn't shimmer while the camera moves.
 */
export declare function worldUnitsPerPixel(viewHeight: number, internal: Resolution): number;
export declare function snapToGrid(value: number, step: number): number;
