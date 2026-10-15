import { type AnimationClip, type Object3D, Vector3 } from 'three/webgpu';
import { type Physics, RAPIER } from './Physics';
export interface CharacterOptions {
    position: [number, number, number];
    radius?: number;
    /** Height of the cylindrical part of the capsule. */
    halfHeight?: number;
    speed?: number;
    jumpSpeed?: number;
    gravity?: number;
}
export type CharacterAnim = 'Idle' | 'Walk' | 'Jump';
/**
 * Kinematic capsule driven by Rapier's KinematicCharacterController, with classic
 * platformer affordances (coyote time, jump buffering, variable jump height).
 *
 * The body moves in continuous world space; the visual model is interpolated by
 * Physics.bind and only *looks* pixel-aligned through the render pipeline.
 */
export declare class CharacterController {
    private readonly physics;
    readonly body: RAPIER.RigidBody;
    readonly collider: RAPIER.Collider;
    readonly controller: RAPIER.KinematicCharacterController;
    readonly velocity: Vector3;
    grounded: boolean;
    facing: number;
    private readonly speed;
    private readonly jumpSpeed;
    private readonly gravity;
    private readonly footOffset;
    private readonly prevFeet;
    private coyote;
    private jumpBuffer;
    private wish;
    private jumpHeld;
    private mixer;
    private actions;
    private current;
    constructor(physics: Physics, options: CharacterOptions);
    /** Feet position (bottom of the capsule), continuous world space. */
    get feet(): Vector3;
    /** Feet position blended between the previous and current physics step (render use). */
    interpolatedFeet(alpha: number): Vector3;
    /** Set desired horizontal move direction (world space, length ≤ 1) and jump input. */
    setInput(move: Vector3, jumpPressed: boolean, jumpHeld: boolean): void;
    teleport(position: [number, number, number]): void;
    /** Call from Physics.update's fixedUpdate callback. */
    fixedUpdate(dt: number): void;
    /** Attach a model's animation clips (expects Idle / Walk / Jump). */
    attachAnimations(model: Object3D, clips: readonly AnimationClip[]): void;
    get animation(): CharacterAnim;
    /** Per render frame: pick animation state and advance the mixer. */
    updateVisual(model: Object3D, dt: number): void;
    private play;
}
