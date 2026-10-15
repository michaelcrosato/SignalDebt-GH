import RAPIER from '@dimforge/rapier3d';
import { Object3D, Vector3 } from 'three/webgpu';
import { type ExplosionOptions, ForceFields } from './forces';
import { type KinematicBody, type Mover, type MoverOptions } from './movers';
import { Trigger, type TriggerOptions, type TriggerShape } from './Trigger';
export { RAPIER, Trigger, type TriggerOptions, type TriggerShape };
export declare const FIXED_DT: number;
/** The physics as data (`engine.snapshot()`): the fixed step's clock and the Rapier world (Rapier's own snapshot, base64). */
export interface PhysicsState {
    readonly accumulator: number;
    readonly alpha: number;
    readonly steps: number;
    readonly world: string;
    /** Collider tags and conveyor belts by collider handle, and each force field's `enabled` (in order). */
    readonly tags: readonly (readonly [number, readonly string[]])[];
    readonly belts: readonly (readonly [number, readonly [number, number, number]])[];
    readonly fields: readonly boolean[];
}
/** A physics restore applied but not yet kept (`Physics.restoreState`): `commit()` frees the old world, `undo()` puts it back. */
export interface PhysicsRestore {
    commit(): void;
    undo(): void;
}
export interface BoxOptions {
    position: [number, number, number];
    halfExtents: [number, number, number];
    rotationY?: number;
    friction?: number;
    density?: number;
}
/**
 * Rapier world with a fixed 60 Hz step and render interpolation.
 *
 * Physics owns the truth; visuals follow. Bound Object3Ds are *interpolated* between
 * the last two physics states for smooth motion. Pixel alignment is purely a camera /
 * presentation concern and never touches bodies here.
 */
export declare class Physics {
    /** The Rapier world. A new one per level (`clear()`): read it from here, don't keep it across levels. */
    world: RAPIER.World;
    private readonly bindings;
    private readonly tags;
    private readonly triggers;
    /** Reused copy of `triggers` while their callbacks may add or remove triggers. */
    private readonly triggerSnapshot;
    /** Bumped by clear(): a step loop that sees it change stops (the world it stepped is gone). */
    private generation;
    /** Character controllers created on `world`, so `clear()` can free them. */
    private readonly controllers;
    private accumulator;
    /** Interpolation factor between the previous and current physics step, 0..1. */
    alpha: number;
    steps: number;
    /**
     * Zones that push, pull or drag (wind, fans, wells, currents): dynamic bodies get them every
     * step, `PlatformerCharacter` reads them (physics/forces.ts).
     */
    readonly fields: ForceFields;
    /** Kinematic movers (lifts, shuttles, turntables), posed before every fixed step (`addMover`). */
    private readonly movers;
    /** Conveyor belts: collider handle → belt velocity (`conveyor`). */
    private readonly belts;
    private readonly stepListeners;
    private readonly firstStepListeners;
    /** Milliseconds Rapier took for one step (smoothed): what a pile of bodies costs. */
    stepMs: number;
    private readonly gravityY;
    private readonly solverIterations;
    private readonly ray;
    private readonly predicates;
    private readonly from;
    private constructor();
    /** A fresh world (each level gets one, so a level runs the same whatever ran before it). */
    private makeWorld;
    /** Make `world` this engine's: the fixed step, and character controllers tracked so `clear()` frees them. */
    private adopt;
    /** Loads Rapier's wasm on first use (a separate, streamed .wasm file), then builds a world. */
    static create(gravity?: number): Promise<Physics>;
    /**
     * Advance the simulation by real elapsed time. `fixedUpdate` runs before each fixed
     * step (apply forces, move kinematic characters there).
     */
    update(dt: number, fixedUpdate?: (dt: number) => void): void;
    /**
     * The physics as data, between frames (`engine.snapshot()`): the fixed step's clock and the
     * whole Rapier world, exact. Bodies and colliders keep their handles across `setState`: a game
     * finds its own again with `world.getRigidBody(handle)` / `getCollider(handle)`; bound meshes
     * follow on their own. Not yet with what lives outside the world (character or vehicle
     * controllers, movers, triggers, step listeners): refused, saying which.
     */
    state(): PhysicsState;
    /** Back to `state()`: the world it saved replaces this one, bound meshes re-found by handle. */
    setState(s: PhysicsState): void;
    /**
     * `setState`, undoable: the saved world is built first (nothing changes if that fails), then
     * replaces this one; `undo()` puts everything back as it was, `commit()` frees the old world.
     * A mesh bound to a body the saved world doesn't have is let go (it stays where it is). The
     * force fields must be the same ones (a game makes them at setup); their `enabled` comes back.
     */
    restoreState(s: PhysicsState): PhysicsRestore;
    /** Seconds of physics simulated (fixed steps × 1/60): the clock movers run on. */
    get time(): number;
    /**
     * Run `f` after every fixed step, before bound meshes (`bind`) read their bodies. Listeners
     * run in the order they were added (instanced bodies keep their last two poses, a ragdoll
     * holds its joint limits); `{ first: true }` runs `f` ahead of all of those, for something
     * that puts bodies somewhere else after the step (a rewind) and must be what they all see.
     * Returns an unsubscribe.
     */
    onStep(f: () => void, o?: {
        first?: boolean;
    }): () => void;
    /**
     * Drive a kinematic body (`RigidBodyDesc.kinematicPositionBased()`) along a path, spinning or
     * swinging, as a pure function of its own clock (physics/movers.ts), which starts at 0 now:
     * the same however fast frames come. The character rides it. Removing the body stops it.
     *
     *   physics.addMover(lift, { path: [[0, 0, 0], [0, 4, 0]], speed: 1.5, hold: 1 });
     */
    addMover(body: KinematicBody, options: MoverOptions): Mover;
    /**
     * Make a collider a conveyor belt moving at `velocity` (m/s, world axes): dynamic bodies
     * touching it are dragged along, the character standing on it is carried.
     */
    conveyor(collider: RAPIER.Collider, velocity: readonly [number, number, number] | null): void;
    /** A conveyor's velocity, by collider handle (null: not a belt). */
    beltVelocity(handle: number): readonly [number, number, number] | null;
    /** Push every dynamic body near `at` away from it (physics/forces.ts). Returns how many. */
    explode(at: readonly [number, number, number] | Vector3, o?: ExplosionOptions): number;
    private stepBelts;
    /** Make `object` follow `body` (interpolated). */
    bind(body: RAPIER.RigidBody, object: Object3D): void;
    unbind(object: Object3D): void;
    addStaticBox(o: BoxOptions): RAPIER.Collider;
    addStaticCylinder(position: [number, number, number], halfHeight: number, radius: number): RAPIER.Collider;
    addDynamicBox(o: BoxOptions): RAPIER.RigidBody;
    /**
     * Tag a collider with gameplay semantics the character controller understands:
     * 'climbable' (ladders/vines), 'pushable', 'grabbable', 'slippery', 'noLedge',
     * 'character', 'noCamera' (camera rays pass through). Games may add their own.
     */
    tag(collider: RAPIER.Collider, ...tags: string[]): RAPIER.Collider;
    hasTag(collider: RAPIER.Collider | null | undefined, tag: string): boolean;
    /** Distance along `dir` (unit) from `from` to the first collider not carrying any of `ignoreTags`. */
    raycast(from: Vector3, dir: Vector3, maxDistance: number, ignoreTags?: readonly string[]): number | null;
    /** Shared ray + cached tag predicate (keyed by the `ignoreTags` array: pass a constant). */
    private cast;
    /** Ray cast returning distance, hit collider and surface normal. */
    castRay(from: Vector3, dir: Vector3, maxDistance: number, ignoreTags?: readonly string[], exclude?: RAPIER.RigidBody): {
        distance: number;
        collider: RAPIER.Collider;
        normal: Vector3;
        point: Vector3;
    } | null;
    /**
     * Straight up from (x, y, z), at most `maxDistance` (a ceiling, a lift coming down): like
     * `castDown`, `out.y` is the hit height.
     */
    castUp(x: number, y: number, z: number, maxDistance: number, out: {
        y: number;
        nx: number;
        ny: number;
        nz: number;
        id: number;
    }, ignoreTags?: readonly string[], exclude?: RAPIER.RigidBody): boolean;
    /**
     * Straight down from (x, y, z), at most `maxDistance`, skipping colliders with any of
     * `ignoreTags` (pass a constant array) and `exclude`. Fills `out` (hit height, normal,
     * collider handle) without allocating; returns whether something was hit.
     */
    castDown(x: number, y: number, z: number, maxDistance: number, out: {
        y: number;
        nx: number;
        ny: number;
        nz: number;
        id: number;
    }, ignoreTags?: readonly string[], exclude?: RAPIER.RigidBody): boolean;
    /** Distance straight down from `origin` to the first collider (excluding `exclude`). */
    groundBelow(origin: Vector3, maxDistance?: number, exclude?: RAPIER.RigidBody): {
        y: number;
        distance: number;
    } | null;
    /**
     * A trigger volume with enter/exit callbacks (pickups, checkpoints, kill zones, doors).
     * Checked after every fixed step against dynamic and kinematic bodies (the character
     * included); set `includeStatic` for level geometry. Never blocks movement or rays.
     *
     *   physics.trigger({ sphere: 0.6 }, [0, 1, 6], { tag: 'character', once: true, onEnter: () => collect() });
     */
    trigger(shape: TriggerShape, at: readonly [number, number, number] | Vector3, options?: TriggerOptions): Trigger;
    /** Run every trigger's overlap query now (Physics.update does this after each step). */
    updateTriggers(): void;
    /**
     * Whether `target` (a body, collider or joint) still exists in the current world: false once
     * removed, and for anything from a level before (its world is gone; `isValid()` would throw).
     */
    isAlive(target: {
        isValid(): boolean;
    }): boolean;
    /**
     * Remove a rigid body (with its colliders and any bound Object3D binding) or a single
     * collider. Removing a collider whose fixed body has no other colliders removes that
     * body too (what `addStaticBox` & co. create). Tags and trigger overlaps are cleaned up.
     */
    remove(target: RAPIER.RigidBody | RAPIER.Collider): void;
    /**
     * Empty the world: every body, collider, joint, character and vehicle controller, trigger, tag, binding,
     * mover, field and belt goes; gravity and the solver's iterations go back to their defaults,
     * the step accumulator and the step count reset. `world` is a new Rapier world afterwards.
     */
    clear(): void;
    /**
     * A hash of the physics state: every body (position, rotation, velocities, asleep, enabled)
     * and collider (pose, friction, restitution, sensor, enabled), exact, plus the step count and
     * the time not yet stepped. Two runs that should be the same compare equal only if they are
     * (replays, tests).
     */
    fingerprint(): string;
    /** Sizes of everything Physics tracks (leak checks, debug UI). */
    counts(): {
        bodies: number;
        colliders: number;
        joints: number;
        tags: number;
        bindings: number;
        triggers: number;
        controllers: number;
        vehicles: number;
        movers: number;
        fields: number;
        belts: number;
    };
    dispose(): void;
    private forgetCollider;
    private readBody;
}
