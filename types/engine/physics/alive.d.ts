/**
 * Whether a Rapier body, collider or joint still exists in its world: false once removed, and
 * for anything from a level before (each level gets a fresh world, and `isValid()` on a freed
 * one throws). Not a handle lookup: a removed object's slot can hold a newer one.
 */
export declare function isAlive(target: {
    isValid(): boolean;
}): boolean;
