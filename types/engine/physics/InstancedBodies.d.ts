/**
 * Many dynamic bodies of one shape drawn as ONE instanced mesh: a stress test, a crate
 * shower, rubble, a ball pit. Each body is a Rapier rigid body; its instance matrix is
 * interpolated between the last two physics steps every frame, like `physics.bind`.
 *
 *   const balls = new InstancedBodies(ctx.physics, ctx.scene, { shape: 'ball', size: 0.3, capacity: 500, color: PALETTE.sky });
 *   balls.add([x, 8, z], { velocity: [0, -2, 0] });
 *   // per frame: balls.sync(ctx.physics.alpha)
 */
import { type ColorRepresentation, InstancedMesh, type Scene } from 'three/webgpu';
import { type Physics, RAPIER } from './Physics';
export type InstancedShape = 'box' | 'ball' | 'capsule';
export interface InstancedBodiesOptions {
    shape: InstancedShape;
    /** Box: edge length; ball: radius; capsule: radius (its height is 3 × radius). */
    size: number;
    /** Most bodies at once. */
    capacity: number;
    color?: ColorRepresentation;
    density?: number;
    friction?: number;
    restitution?: number;
    /** Sweep fast bodies so they can't skip through thin walls (default: only tiny ones). */
    ccd?: boolean;
}
export declare class InstancedBodies {
    private readonly physics;
    readonly o: InstancedBodiesOptions;
    readonly mesh: InstancedMesh;
    readonly bodies: RAPIER.RigidBody[];
    private readonly prev;
    private readonly curr;
    private readonly m;
    private readonly p;
    private readonly q;
    private readonly q2;
    private readonly one;
    private readonly unsubscribe;
    private readonly tint;
    /** The next body `spawn` reuses when full. */
    private oldest;
    constructor(physics: Physics, scene: Scene, o: InstancedBodiesOptions);
    get count(): number;
    /** A new body at `at` (false when full). */
    add(at: readonly [number, number, number], o?: {
        velocity?: readonly [number, number, number];
        spin?: readonly [number, number, number];
        color?: ColorRepresentation;
    }): RAPIER.RigidBody | null;
    /** Like `add`, but when full the oldest body is moved to `at` instead (a cannon's shots). */
    spawn(at: readonly [number, number, number], o?: {
        velocity?: readonly [number, number, number];
        spin?: readonly [number, number, number];
    }): RAPIER.RigidBody;
    /** Remove every body (and stop drawing them). */
    clear(): void;
    /** Remove the bodies and the mesh. */
    dispose(): void;
    /** Bodies that fell below `y` go back up to `to` (a fountain of crates). */
    recycle(y: number, to: (i: number) => readonly [number, number, number]): number;
    /** Bodies asleep (resting: Rapier stops simulating them). */
    sleeping(): number;
    /** Per frame: instance matrices between the last two steps (`alpha` = physics.alpha). */
    sync(alpha: number): void;
    private capture;
    private write;
}
