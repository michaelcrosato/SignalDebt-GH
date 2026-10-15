import { type AnimationClip, type Object3D, type Quaternion } from 'three/webgpu';
import { FootPlacement, type FootPlacementInput, type FootPlacementTuning, type GroundProbe } from '../animation/footPlacement';
import { PoseLayers, type PoseLayerInput, type PoseLayerTuning } from '../animation/poseLayers';
import type { RigSpec } from '../animation/types';
/**
 * Clip playback for PlatformerCharacter: blends, the locomotion blend space and the
 * procedural layers, in the order they run every render frame:
 *
 *   fades → gait phase → mixer → RotationBlend → (feet captured) → PoseLayers (lean, look,
 *   landing) → FootPlacement (feet back where the clips put them, on the real ground)
 *
 * **Blends.** Weights are driven here, not by three's crossFadeFrom (which restarts the
 * outgoing clip's fade from full weight, so a clip only partly faded in snapped to 100%
 * whenever states changed faster than the fade). Every outgoing clip fades from the weight
 * it has now.
 *
 * **Locomotion blend space.** Tiptoe, Walk and Run play together as one logical clip (the
 * "gait"): weights come from the ground speed (Walk at its authored speed → Run at its
 * authored speed), with Tiptoe taking the low end on a gentle stick tilt. All three share
 * one normalised phase (they all strike the right heel at 0), which advances at
 * speed / (blended stride length), so the blended planted foot moves exactly with the
 * ground and every clip plays at a rate matched to its own authored speed.
 */
export interface AnimRequest {
    name: string;
    once?: boolean;
    /** Playback rate (negative plays backwards). */
    speed?: number;
    /** Fade-in seconds (default 0.12). */
    fade?: number;
    /** Play the locomotion blend space instead of `name` (`name` is the fallback clip). */
    gait?: GaitRequest;
}
export interface GaitRequest {
    /** Ground speed (m/s). */
    speed: number;
    /** 0..1: the share of the low end that tiptoes (gentle stick tilt) instead of walking. */
    tiptoe: number;
}
/** The clips of the locomotion blend space, by role, and where walking turns into running. */
export interface GaitClips {
    tiptoe: string;
    walk: string;
    run: string;
    /**
     * Ground speeds (m/s) between which Walk cross-fades into Run (default: their authored
     * speeds). Gaits with different stance shares don't blend cleanly (one foot is still
     * planted while the other gait already swings it), so keep the band short.
     */
    blend?: readonly [number, number];
}
export interface AnimatorOptions {
    rig?: RigSpec;
    probe?: GroundProbe;
    feet?: Partial<FootPlacementTuning>;
    layers?: Partial<PoseLayerTuning>;
    gait?: GaitClips;
}
/** Everything the procedural passes need this frame. */
export interface ProceduralInput extends PoseLayerInput {
    feet: FootPlacementInput;
}
export declare class Animator {
    readonly model: Object3D;
    private readonly mixer;
    private readonly rotationBlend;
    private readonly layers;
    private readonly byName;
    private current;
    /** Gait: actions in role order (tiptoe, walk, run), stride per cycle (m), stance shares, phase 0..1. */
    private readonly gait;
    readonly feet: FootPlacement | null;
    readonly pose: PoseLayers | null;
    private readonly footNames;
    /**
     * The animated pose of every joint the procedural passes change, saved after the mixer and
     * put back before the next mixer update. three's mixer only writes a joint whose blended
     * value changed, so a held pose would otherwise keep (and stack) last frame's offsets.
     */
    private readonly touched;
    constructor(model: Object3D, clips: readonly AnimationClip[], rest: ReadonlyMap<string, Quaternion>, options?: AnimatorOptions);
    dispose(): void;
    duration(name: string): number | undefined;
    authoredSpeed(name: string): number | undefined;
    /** The clip a request shows most (the gait's dominant clip). */
    dominant(req: AnimRequest): string;
    /** Tooling: every clip contributing to the pose, with its share of the blend, time (s) and rate. */
    mix(): {
        name: string;
        weight: number;
        time: number;
        rate: number;
    }[];
    /** Start over with `name` playing alone, no blends, no procedural memory (a teleport, a respawn). */
    restart(name: string): void;
    /** Switch to (or keep playing) what `req` asks for, fading over `fade` seconds. */
    play(req: AnimRequest, fade: number): void;
    /** Advance fades, the gait and the mixer, then the procedural passes. */
    update(dt: number, procedural?: ProceduralInput): void;
    /** Gait shares and phase: weights from the speed, rates matched to each clip's own speed. */
    private stepGait;
    /**
     * Which foot the gait swings and where it will land (foot placement blends a swinging
     * foot from the ground it left to the ground it lands on); null when no gait leads.
     */
    private swingOf;
    private readonly swing;
    private readonly swingR;
    private readonly swingL;
    private gaitShares;
    /** Normalised phase of a layer, if it is a stride (a gait clip with an authored speed). */
    private phaseOf;
    private isStride;
    /**
     * Starting the gait from another clip (standing, landing): the foot that is further forward
     * now is the planted one, at the point of its stance where the gait has it that far
     * forward (mid-stance from standing, heel strike landing with a leg out front), and the
     * other one takes the next step.
     */
    private startPhase;
    private stop;
}
