import type { AnimationClip, Object3D } from 'three/webgpu';
import { type SheetImage } from './raster';
import type { ClipDef, RigSpec } from './types';
/**
 * Motion curves — the animator's graph editor, as a PNG. Contact sheets show *poses*;
 * curves show *timing*: where a move eases in and out, whether it anticipates and
 * overshoots, holds that read as dead, pops and snaps, and how the loop wraps.
 *
 *   HEIGHTS   world height of the feet, hands, head and pelvis (the bouncing-ball view:
 *             arcs, contacts, hang time); the floor is the grey line at 0
 *   ROOT      pelvis offset (x/y/z) and squash, as authored
 *   <joint>   one panel per moving joint: X red, Y green, Z blue (degrees, as authored);
 *             red ticks underneath mark frames where it turns faster than 1200°/s
 *   SPEED     fastest joint rotation per frame (°/s) — spikes are pops
 *
 * Dashed verticals are keys (numbered). Loops are drawn twice so the wrap is visible.
 * `compare` draws a previous version of the clip in grey underneath.
 */
export interface CurveOptions {
    /** Cycles to draw (default 2 for loops, 1 otherwise). */
    cycles?: number;
    /** Joints to plot (default: every joint that moves more than 1°). */
    joints?: readonly string[];
    /** Plot width in pixels (default: 24 px per frame, 640..1400). */
    width?: number;
    /** Previous version of the clip, drawn in grey under the current curves. */
    compare?: {
        def: ClipDef;
        clip: AnimationClip;
    };
}
export declare function renderCurves(model: Object3D, rig: RigSpec, def: ClipDef, clip: AnimationClip, options?: CurveOptions): SheetImage;
