/**
 * Time rewind (Braid, Prince of Persia: The Sands of Time): every physics step records where
 * each tracked body is, how it moves and whether it sleeps, in a ring buffer a few seconds
 * long; while rewinding, each step instead takes the newest record off and puts every body back
 * there, so the world plays backwards. Let go and the bodies carry on with the velocities they
 * had at that moment. Extra state (the hero's position, a score) rides along through `extra`.
 *
 *   const rewind = new Rewind(physics, { seconds: 6 });
 *   rewind.track(body);                                   // or rewind.trackAll() for every dynamic body
 *   rewind.extra(() => hero.feetInto(feet).toArray(), (v) => hero.teleport([v[0]!, v[1]!, v[2]!]));
 *   rewind.rewinding = input.isDown('KeyR');              // per fixed step (or frame)
 *   // rewind.fill (0..1): how much history is left
 *
 * Putting bodies back runs ahead of every other step listener (`onStep(f, { first: true })`),
 * so instanced bodies, ragdolls and bound meshes all see the rewound pose. A body removed while
 * recorded is skipped from then on, on the way back too.
 */
import type RAPIER_TYPE from '@dimforge/rapier3d';
import type { Physics } from './Physics';
export interface RewindOptions {
    /** History length in seconds of physics (default 5). */
    seconds?: number;
}
export declare class Rewind {
    private readonly physics;
    /** Steps of history kept. */
    readonly capacity: number;
    /** True: each physics step goes one step back instead of recording. */
    rewinding: boolean;
    /** Steps recorded now (rewinding uses them up). */
    length: number;
    private bodies;
    private frames;
    private head;
    private extras;
    /** Put back asleep last step: Rapier wakes a body it was told to move, so they sleep a step later. */
    private drowsy;
    private readonly off;
    constructor(physics: Physics, o?: RewindOptions);
    /** How much history there is, 0..1. */
    get fill(): number;
    /** Record `body` from now on (the history so far is dropped: every frame holds the same bodies). */
    track(...bodies: RAPIER_TYPE.RigidBody[]): void;
    /** Record every dynamic body in the world now. */
    trackAll(): void;
    /** Something else to rewind: `get` returns numbers to keep each step, `set` puts them back. */
    extra(get: () => readonly number[], set: (v: number[]) => void): void;
    /** Forget the history. */
    reset(): void;
    dispose(): void;
    private record;
    /**
     * Rapier wakes a body it was told to move during the next step, whatever `sleep()` said, so
     * one put back asleep is put to sleep again after that step (it has fallen one step's worth,
     * a few millimetres, from rest: on a slope, that is all it moves).
     */
    private settle;
    private back;
}
