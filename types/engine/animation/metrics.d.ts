import { type AnimationClip, type Object3D, Vector3 } from 'three/webgpu';
import type { ClipDef, RigSpec } from './types';
/**
 * Objective checks for a clip, computed by actually posing the rig (no renderer). These
 * are the numbers an agent can't eyeball: foot sliding, ground contact, loop seams,
 * velocity spikes, joint limits. Thresholds are deliberately forgiving; `problems` are
 * real defects, `warnings` are worth a look.
 */
export interface ClipReport {
    name: string;
    frames: number;
    loop: boolean;
    speed: number | null;
    /** Lowest sole point over the clip (m) and the frame it happens. Negative = through the floor. */
    minSoleY: number;
    minSoleFrame: number;
    /** Lowest point of any other body part (knees, hands, head...), where and when. */
    minBodyY: number;
    minBodyMesh: string;
    minBodyFrame: number;
    /** Frames (of grounded clips) where neither sole is within 5 cm of the floor. */
    floatingFrames: number;
    /** Mean horizontal slip of the planted foot, m/s (0 = perfectly planted). */
    footSlide: number;
    /** Largest joint-angle jump between the last and first frame of a loop, degrees. */
    loopSeam: number;
    /** Fastest joint rotation, degrees per second, and where. */
    maxAngularSpeed: {
        joint: string;
        degPerSec: number;
        frame: number;
    };
    limitViolations: {
        joint: string;
        axis: 'x' | 'y' | 'z';
        frame: number;
        value: number;
        range: [number, number];
    }[];
    /** Pelvis height range (m) — how much the body bobs. */
    pelvisY: [number, number];
    problems: string[];
    warnings: string[];
}
export interface SampledFrame {
    frame: number;
    joints: Record<string, Vector3>;
    /**
     * Lowest world y of each sole mesh, its centre, its contact point (the average of its
     * lowest vertices — the heel or toe edge while the foot rolls) and all its vertices.
     */
    soles: Record<string, {
        minY: number;
        centre: Vector3;
        contact: Vector3;
        verts: Vector3[];
    }>;
    /** Centres of trace points (meshes or joints). */
    trace: Record<string, Vector3>;
    /** Lowest non-sole mesh this frame. */
    body: {
        minY: number;
        mesh: string;
    };
}
/** Pose `model` with `clip` at each frame (30 fps authoring frames) and record world positions. */
export declare function sampleFrames(model: Object3D, rig: RigSpec, clip: AnimationClip, frames: readonly number[]): SampledFrame[];
export declare function analyzeClip(model: Object3D, rig: RigSpec, def: ClipDef, clip: AnimationClip): ClipReport;
