/**
 * Kinematic movers: lifts, shuttles, turntables, swinging blades, crushers. A mover's pose is
 * a pure function of physics time (so it is the same however fast frames come, and a replay
 * or a film sees the same thing); before every fixed step the physics world sets each mover's
 * next kinematic pose, so anything standing on it (the character, crates) can read where it
 * is going this step and ride along (`PlatformerCharacter` does).
 *
 *   const lift = physics.addMover(body, { path: [[0, 0, 0], [0, 4, 0]], speed: 1.5, hold: 1 });
 *   physics.addMover(disc, { spin: [0, 0.8, 0] });                       // rad/s about Y
 *   physics.addMover(blade, { swing: { axis: [0, 0, 1], angle: 60, period: 2.2 } });
 *
 *   physics.addMover(seat, { curve: orbit([0, 3, 0], 2.5, 12) });          // a Ferris wheel seat
 *
 * `pathPoint`, `moverRotation`, `orbit` and `pendulum` are pure (unit-tested).
 */
import { type Ease } from '../tween';
export type Vec3 = readonly [number, number, number];
export interface MoverOptions {
    /** Waypoints (world positions of the body's origin), visited in order. */
    path?: readonly Vec3[];
    /** Metres per second along the path (default 2). */
    speed?: number;
    /** Seconds to wait at each waypoint. */
    hold?: number;
    /** `pingpong` (default): there and back; `loop`: the last point leads back to the first. */
    mode?: 'pingpong' | 'loop';
    /** Easing of each leg (default `inOutSine`). */
    ease?: Ease;
    /** Spin: angular velocity (rad/s) about each axis. */
    spin?: Vec3;
    /** A pendulum swing: about `axis` (unit), ± `angle` degrees, one full swing every `period` s. */
    swing?: {
        axis: Vec3;
        angle: number;
        period: number;
    };
    /** Seconds added to the clock (offsets two movers on the same path). */
    phase?: number;
    /** Rotation the swing and spin start from (a quaternion x, y, z, w). */
    baseRotation?: readonly [number, number, number, number];
    /**
     * Position as any function of time instead of a path (an orbit, a pendulum's arc), into
     * `out`. Keep it pure: the same `t`, the same point.
     */
    curve?: (t: number, out: [number, number, number]) => void;
}
/** A level platform going round a circle: a Ferris wheel's seat (`curve`). */
export declare function orbit(center: Vec3, radius: number, period: number, o?: {
    axis?: 'x' | 'z';
    start?: number;
}): (t: number, out: [number, number, number]) => void;
/** A level platform hanging `length` below `pivot`, swinging ± `angle` degrees (`curve`). */
export declare function pendulum(pivot: Vec3, length: number, angle: number, period: number, o?: {
    axis?: 'x' | 'z';
}): (t: number, out: [number, number, number]) => void;
/** Where a path is at time `t` (seconds), into `out`. */
export declare function pathPoint(o: MoverOptions, t: number, out: [number, number, number]): [number, number, number];
/** Quaternion (x, y, z, w) of a spin or swing at time `t`, composed onto `baseRotation`. */
export declare function moverRotation(o: MoverOptions, t: number, out: [number, number, number, number]): [number, number, number, number];
/** The parts of a Rapier body a mover drives. */
export interface KinematicBody {
    setNextKinematicTranslation(t: {
        x: number;
        y: number;
        z: number;
    }): void;
    setNextKinematicRotation(r: {
        x: number;
        y: number;
        z: number;
        w: number;
    }): void;
    /** Set right away (Rapier bodies have them): a mover starts where its clock says. */
    setTranslation?(t: {
        x: number;
        y: number;
        z: number;
    }, wake: boolean): void;
    setRotation?(r: {
        x: number;
        y: number;
        z: number;
        w: number;
    }, wake: boolean): void;
}
export interface Mover {
    readonly body: KinematicBody;
    readonly options: MoverOptions;
    /** Its own clock: seconds since it was added (what its pose is a function of). */
    readonly time: number;
    /** Stop moving it (it stays where it is). */
    remove(): void;
    /** Change the options (a lift that starts moving: set a path). Its clock keeps running. */
    set(options: MoverOptions): void;
}
export declare class Movers {
    private list;
    private readonly p;
    private readonly q;
    private readonly vec;
    private readonly rot;
    get count(): number;
    /** Drive `body` from now on: its clock starts at 0 at world time `start`. */
    add(body: KinematicBody, options: MoverOptions, start?: number): Mover;
    /** Set every mover's next pose for world time `t`. */
    step(t: number): void;
    /** Put `body` where `o` says it is at its own time `t` (`next`: as the next kinematic pose). */
    pose(body: KinematicBody, o: MoverOptions, t: number, next: boolean): void;
    private place;
    private turn;
    /** Stop driving `body` (it left the world). */
    removeBody(body: KinematicBody): void;
    clear(): void;
}
