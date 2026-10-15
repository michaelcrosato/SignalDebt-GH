/**
 * Render quality presets. Pure data + decisions (no DOM, no three.js): unit-tested.
 *
 * The pixel pipeline is cheap by design (the scene and every art-pixel filter render at
 * the art resolution), so quality trades the shadow map size and the number of dynamic
 * point lights (`ctx.lights`, render/lights.ts). `auto` picks `low` on
 * phones/tablets and `medium` elsewhere, then lowers it once if the first seconds of play
 * run well below the frame-rate target.
 */
export type QualityLevel = 'low' | 'medium' | 'high';
export type QualityOption = QualityLevel | 'auto';
export declare const QUALITY_LEVELS: readonly QualityLevel[];
export interface QualitySettings {
    /** Directional-light shadow map size (texels per side). */
    readonly shadowMapSize: number;
    /** Real point lights in the dynamic light pool (`ctx.lights`); constant per level. */
    readonly lights: number;
}
/**
 * At the iso preset's default zoom the shadow box spans ~30 world units, i.e. ~600 art
 * pixels: 512² is about one shadow texel per art pixel, 1024² is finer than the art can show.
 */
export declare const QUALITY: Readonly<Record<QualityLevel, QualitySettings>>;
/** Starting level for `auto`: phones and tablets (coarse pointer, no hover) start low. */
export declare function defaultQuality(env: {
    coarsePointer: boolean;
}): QualityLevel;
/**
 * The one-shot `auto` adjustment after the startup measurement: one level down below 75%
 * of the target frame rate, straight to `low` below 40%. Never raises quality.
 */
export declare function qualityForFps(level: QualityLevel, fps: number, targetFps: number): QualityLevel;
/**
 * Frame cap for `requestAnimationFrame` loops. Returns whether the frame at `now` (ms)
 * should run, and advances the schedule so the long-run rate is `maxFps` even when the
 * display rate isn't a multiple of it (90 Hz, 144 Hz) and timestamps jitter.
 */
export declare class FrameLimiter {
    maxFps: number;
    private next;
    constructor(maxFps: number);
    shouldRun(now: number): boolean;
}
