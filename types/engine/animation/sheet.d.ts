import { type AnimationClip, type Object3D } from 'three/webgpu';
import { type SheetImage } from './raster';
export type { SheetImage } from './raster';
import type { ClipReport } from './metrics';
import type { ClipDef, RigSpec } from './types';
/**
 * Contact sheets: render a clip to an RGBA image with a tiny software rasterizer — no
 * GPU, no DOM, so it runs in Node (the `npm run anim` CLI) and in the browser alike.
 *
 *   rows     views (side / front / top / three-quarter), columns = frames
 *   overlay  skeleton (right side orange, left cyan, centre yellow) and ground contacts
 *            (green bar = sole on the floor, red = through it)
 *   trails   one wide side-view panel with onion-skinned stick figures and the paths of
 *            the hands, feet and head; locomotion clips are drawn travelling at their
 *            authored speed, so a planted foot shows as a single point (sliding = smear)
 *
 * This is the main way an agent "looks" at an animation: render, read the PNG, adjust
 * numbers, repeat.
 */
export type ViewName = 'side' | 'front' | 'top' | 'three';
export interface SheetOptions {
    /** Authoring frames to show (default: the key frames, or 12 evenly spaced). */
    frames?: number[];
    views?: ViewName[];
    /** Pixels per metre (default 64). */
    scale?: number;
    skeleton?: boolean;
    trails?: boolean;
    /** Metrics to print under the sheet. */
    report?: ClipReport;
    /** A previous version of the clip: its skeleton and paths are drawn in magenta. */
    ghost?: AnimationClip;
    /**
     * Called after the model is posed at each frame, before it is drawn: for parts the game
     * moves at runtime from the pose (a bow's string drawn to the hand).
     */
    onPose?: (model: Object3D, frame: number) => void;
}
export declare function defaultFrames(def: ClipDef, max?: number): number[];
/** Render a contact sheet for one clip. */
export declare function renderSheet(model: Object3D, rig: RigSpec, def: ClipDef, clip: AnimationClip, options?: SheetOptions): SheetImage;
