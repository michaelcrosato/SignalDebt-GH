import { type Camera, Color, type ColorRepresentation, Vector3 } from 'three/webgpu';
import { type PaletteColor } from '../palette';
/**
 * Screen effects every output graph ends with (pixel and raw mode, every look): retro
 * **transitions** that cover the picture in art-pixel patterns, a **flash**, and up to four
 * **shockwave** rings that push the picture outwards. All of it is uniforms, so starting
 * one never rebuilds or recompiles a graph. `engine.screen`:
 *
 *   await engine.screen.cover('iris', { center: hero.position });   // closes on the hero
 *   await engine.loadGame(next);
 *   await engine.screen.reveal('iris');
 *   engine.screen.flash('white', { duration: 0.1 });
 *   engine.screen.shockwave(blastPosition, { radius: 0.4, strength: 1 });
 *
 * Transitions and flashes run on real time (they keep moving while the game is paused and
 * while a level builds; the loop only stops while new shaders precompile); shockwaves too.
 * Patterns are per **art pixel**, so an iris is a pixel circle at any scale. Shockwaves and
 * the mosaic's growing blocks resample the art-resolution picture where it is upscaled
 * (pixel-art layers; a clean, full-resolution look or Raw mode gets the transitions, the
 * mosaic's fade and the flash, but no ripple). Colours are palette names or hex (display
 * colours, as they appear on screen). While nothing runs, the stage costs a uniform test per
 * pixel.
 */
export type TransitionKind = 'fade' | 'iris' | 'diamonds' | 'dissolve' | 'dither' | 'blinds' | 'wipe' | 'curtain' | 'mosaic';
/** Every transition, in the order a picker lists them. */
export declare const TRANSITIONS: readonly TransitionKind[];
/** Art pixels per diamond cell, blind band, dissolve block; the most a mosaic block grows to. */
export declare const TRANSITION_CELLS: {
    readonly diamonds: 16;
    readonly blinds: 12;
    readonly dissolve: 3;
    readonly mosaic: 20;
};
/** A palette name (`'white'`, `'ink'`…) or any three.js colour (hex: as it shows on screen). */
export type ScreenColor = PaletteColor | ColorRepresentation;
export interface TransitionOptions {
    /** Seconds (real time). Default 0.45. */
    duration?: number;
    /** Colour it covers with. Default ink (palette black). */
    color?: ScreenColor;
    /**
     * Where an iris closes / a shockwave starts: a world point (a Vector3 is followed while it
     * moves), or `[u, v]` on the screen (0..1 from the top-left). Default the middle.
     */
    center?: Vector3 | readonly [number, number];
}
export interface FlashOptions {
    /** Seconds to fade out (real time). Default 0.15. */
    duration?: number;
    /** 0..1 at the start. Default 0.8. */
    strength?: number;
}
export interface ShockwaveOptions {
    /** Final radius in screen heights. Default 0.45. */
    radius?: number;
    /** Seconds (real time). Default 0.6. */
    duration?: number;
    /** Push strength (1 = a strong blast). Default 1. */
    strength?: number;
}
/** What `state()` reports (tests, tools). */
export interface ScreenFxState {
    transition: TransitionKind | null;
    /** 0 clear … 1 covered. */
    progress: number;
    /** A transition is animating. */
    moving: boolean;
    flash: number;
    shockwaves: number;
}
/**
 * Put a colour into a uniform as it should look on screen: this stage mixes after the output
 * colour transform (display space), so the uniform holds the sRGB values themselves (hex / 255),
 * not three's linear working colours.
 */
export declare function displayColor(target: Color, c: ScreenColor): Color;
export declare class ScreenFx {
    private readonly uKind;
    private readonly uProgress;
    private readonly uCenter;
    private readonly uColor;
    private readonly uFlash;
    private readonly uFlashColor;
    private readonly uWaves;
    /** 1 while a transition or a flash shows (else the colour stage is skipped). */
    private readonly uActive;
    /** 1 while a ring or a mosaic moves pixels (else the upscale is a plain lookup). */
    private readonly uWarp;
    private kind;
    private progress;
    private from;
    private to;
    private t;
    private duration;
    private center;
    private pending;
    private flashLeft;
    private flashDuration;
    private flashStrength;
    private readonly waves;
    private readonly tmp;
    /**
     * Cover the picture (progress → 1). Resolves when it stops: `true` when it is fully covered,
     * `false` when another transition (or `set`, `clear`) took over first.
     */
    cover(kind?: TransitionKind, o?: TransitionOptions): Promise<boolean>;
    /** Uncover it (progress → 0) with `kind` (default: the one that covered it). Resolves like `cover`. */
    reveal(kind?: TransitionKind, o?: TransitionOptions): Promise<boolean>;
    /**
     * Cover, run `between` (load a level, teleport), then reveal, also when `between` throws
     * (the error is passed on). Resolves to whether the cover completed.
     */
    transition(kind: TransitionKind, between: () => unknown, o?: TransitionOptions & {
        revealCenter?: TransitionOptions['center'];
    }): Promise<boolean>;
    /** Jump straight to a progress (0 clear, 1 covered), no animation. */
    set(kind: TransitionKind | null, progress: number): void;
    /** A full-screen flash that fades out. */
    flash(color?: ScreenColor, o?: FlashOptions): void;
    /** A ring that pushes the picture outwards from `at` (oldest ring is replaced when 4 run). */
    shockwave(at: Vector3 | readonly [number, number], o?: ShockwaveOptions): void;
    /** Stop everything (a clear picture). */
    clear(): void;
    state(): ScreenFxState;
    /** Engine, every rendered frame (real seconds; `camera` projects world centres). */
    update(dt: number, camera: Camera | null): void;
    /**
     * Sample an art-resolution picture for the device pass, pushed by the shockwaves and
     * blocked up by a mosaic transition, with the rings' bright edge. `tex` is the art target
     * (a texture node); `scale` is device pixels per art pixel.
     */
    sampleNode(tex: any, scale: any): any;
    /** The transition and the flash over a finished colour (device pass). */
    colorNode(color: any, scale: any): any;
    private run;
    private finishPending;
    private flashAmount;
    private sync;
    /** A centre as screen uv (0..1 from the top-left); null when a world point is behind the camera. */
    private toUv;
}
/**
 * Whether an art pixel is covered by a transition: the same rules as the shader, on the CPU
 * (unit tests, tools). `x, y` art pixel, `w, h` art size, `center` uv.
 */
export declare function coversPixel(kind: TransitionKind, progress: number, x: number, y: number, w: number, h: number, center?: readonly [number, number]): number;
