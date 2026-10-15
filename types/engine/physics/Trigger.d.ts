import RAPIER from '@dimforge/rapier3d';
import { Vector3 } from 'three/webgpu';
/** Trigger volume shape (half extents / radius in world units). */
export type TriggerShape = {
    box: [number, number, number];
} | {
    sphere: number;
} | {
    capsule: {
        halfHeight: number;
        radius: number;
    };
} | {
    cylinder: {
        halfHeight: number;
        radius: number;
    };
};
export interface TriggerOptions {
    /** Called once when a collider starts overlapping the volume. */
    onEnter?(other: RAPIER.Collider, trigger: Trigger): void;
    /** Called once when it stops overlapping (or leaves the world). */
    onExit?(other: RAPIER.Collider, trigger: Trigger): void;
    /** Only colliders carrying this tag (e.g. 'character', which PlatformerCharacter sets). */
    tag?: string;
    /** Extra filter: return false to ignore a collider. */
    filter?(other: RAPIER.Collider): boolean;
    /** Also report colliders on fixed bodies (level geometry). Default false. */
    includeStatic?: boolean;
    /** Remove the trigger after its first enter (pickups). */
    once?: boolean;
    /** Rotation about Y in radians. */
    rotationY?: number;
}
/**
 * A sensor volume with enter/exit callbacks. It is not a collider in the world: after
 * every fixed step Physics runs an intersection query for it and diffs the result, so a
 * trigger never blocks the character controller, ray casts or camera rays.
 * Create with `physics.trigger(shape, at, options)`.
 */
export declare class Trigger {
    readonly def: TriggerShape;
    readonly options: TriggerOptions;
    private readonly accept;
    private readonly detach;
    /** World position; move it freely (moving platforms, carried zones). */
    readonly position: Vector3;
    /** Colliders inside the volume right now, by handle. */
    readonly inside: Map<number, RAPIER.Collider>;
    /** A disabled trigger reports nothing (everything inside exits on the next step). */
    enabled: boolean;
    removed: boolean;
    /** Built once; Rapier converts it for each query. */
    readonly shape: RAPIER.Shape;
    private readonly rotation;
    private readonly now;
    private readonly at;
    private readonly collect;
    constructor(def: TriggerShape, at: readonly [number, number, number] | Vector3, options: TriggerOptions, accept: (c: RAPIER.Collider) => boolean, detach: (t: Trigger) => void);
    /** Stop reporting and leave the world (no exit callbacks). */
    remove(): void;
    /** Physics: refresh overlaps after a step and fire callbacks. */
    update(world: RAPIER.World): void;
    /** Physics: a collider left the world while inside. */
    forget(handle: number): void;
}
