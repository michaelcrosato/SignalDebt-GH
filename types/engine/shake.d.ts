import { Vector3 } from 'three/webgpu';
/**
 * Screen shake as "trauma" (0..1): hits add trauma, it decays, and the camera offset is
 * maxOffset × trauma² × smooth noise. Deterministic (sums of sines of its own clock, no
 * Math.random), so films and tests see the same shake.
 *
 * The engine owns one (`engine.shake`) and adds its offset to the camera after the rig has
 * placed it, every frame, on real time (it keeps shaking through a hitstop). Ortho cameras
 * move by whole art pixels, so the picture jumps the way old games shook:
 *
 *   ctx.engine.shake.add(0.5);            // a ground pound
 *
 * A game can also keep its own and nudge a rig's focus with it (what Riftlight's combat does):
 *
 *   combat.shake.apply(ctx.camera, dt);   // in update, before the engine's camera update
 *
 * or read `shake.offset` and add it wherever the game builds its camera target.
 */
/** A shake as data. */
export interface ShakeState {
    readonly trauma: number;
    readonly t: number;
    readonly offset: readonly number[];
    readonly applied: readonly number[];
}
export declare class CameraShake {
    trauma: number;
    /** World units at full trauma. */
    maxOffset: number;
    /** Trauma lost per second. */
    decay: number;
    /** Global multiplier (settings: 0 turns shake off). */
    strength: number;
    readonly offset: Vector3;
    private t;
    private readonly applied;
    /** Trauma and the noise clock, as data (`engine.snapshot()`): what the next frames shake by follows from them. */
    state(): ShakeState;
    setState(s: ShakeState): void;
    add(amount: number): void;
    /** Advance and compute `offset`. */
    update(dt: number): Vector3;
    /** Update and move a camera rig's focus by the change in offset since the last call. */
    apply(rig: {
        readonly focus: Vector3;
    }, dt: number): void;
    reset(): void;
}
