import { AnimationClip, type Object3D, Quaternion } from 'three/webgpu';
import type { ClipDef, RigSpec } from './types';
/** Rest transforms of a model's joints (from the GLB), used as the base for poses. */
export interface RestPose {
    position: Record<string, [number, number, number]>;
    quaternion: Record<string, Quaternion>;
    scale: Record<string, [number, number, number]>;
}
export declare function restPoseOf(model: Object3D, rig: RigSpec): RestPose;
/**
 * Bake a ClipDef into a three.js AnimationClip (quaternion + position + scale tracks,
 * sampled at 60 Hz so easing and per-axis Euler interpolation — including 360° flips —
 * survive exactly).
 */
export declare function compileClip(def: ClipDef, rig: RigSpec, rest: RestPose): AnimationClip;
export declare function compileClips(defs: readonly ClipDef[], rig: RigSpec, model: Object3D): AnimationClip[];
