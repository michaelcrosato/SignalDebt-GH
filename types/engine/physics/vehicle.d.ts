/**
 * A drivable car on Rapier's ray-cast vehicle controller: a dynamic chassis on four wheels
 * that are rays with springs (suspension), each with grip along and across it. Throttle drives
 * the rear wheels, steering turns the front ones (less at speed), the brake slows all four and
 * the handbrake locks the rear and lets them slide: a drift. Everything is tunable live.
 *
 *   const car = new Vehicle(physics, { at: [0, 1, 0] });
 *   // per fixed step: car.drive({ throttle, steer, brake, handbrake }, dt)
 *   // per frame: car.wheelPose(i, outPosition, outQuaternion) for the wheel meshes
 */
import { Quaternion, Vector3 } from 'three/webgpu';
import { type Physics, RAPIER } from './Physics';
export interface VehicleOptions {
    at: readonly [number, number, number];
    /** Heading (radians about Y; 0 drives toward +Z). */
    yaw?: number;
    /** Chassis half extents (m). Default [0.9, 0.35, 1.8]. */
    size?: readonly [number, number, number];
    /** Chassis mass in world units. Default 8. */
    mass?: number;
    wheelRadius?: number;
    /** Suspension rest length and stiffness. */
    suspension?: number;
    stiffness?: number;
    /** Forward drive force per driven wheel at full throttle. Default 30. */
    power?: number;
    /** The engine gives out toward this speed (m/s). Default 16. */
    topSpeed?: number;
    /** Most steering angle (radians). Default 0.55. */
    steer?: number;
    /** Grip (friction slip): how much sideways force the tyres hold before sliding. Default 2.2. */
    grip?: number;
    /** Most spin (rad/s) the handbrake's drift push builds up. Default 2.4; 0 turns the assist off. */
    driftYaw?: number;
}
export interface DriveInput {
    /** -1 (reverse) … 1 */
    throttle: number;
    /** -1 (left) … 1 (right) */
    steer: number;
    brake?: boolean;
    handbrake?: boolean;
}
export declare class Vehicle {
    private readonly physics;
    readonly body: RAPIER.RigidBody;
    readonly controller: RAPIER.DynamicRayCastVehicleController;
    readonly o: Required<Omit<VehicleOptions, 'at' | 'yaw'>>;
    /** Wheels' chassis-space mount points (front left, front right, rear left, rear right). */
    readonly mounts: [number, number, number][];
    /** Smoothed steering (-1..1). */
    steering: number;
    /** How fast the car slides sideways (m/s), and the angle between where it points and where it goes (radians): drifting when high. */
    slip: number;
    slipAngle: number;
    private readonly q;
    private readonly q2;
    private readonly v;
    constructor(physics: Physics, o: VehicleOptions);
    /** Spring stiffness of every wheel's suspension (live). */
    setSuspension(stiffness: number): void;
    /**
     * Speed along the car's heading (m/s, negative reversing). Not Rapier's
     * `currentVehicleSpeed`, which counts the up-and-down too (the suspension holding the body up
     * against gravity every step reads as a crawl when parked).
     */
    get speed(): number;
    /** One fixed step of driving. */
    drive(input: DriveInput, dt: number): void;
    /**
     * Where wheel `i` is drawn: on its suspension, turned by steering and spin. In the world, or
     * with `local` in the chassis' own space (a wheel mesh parented to a chassis mesh that a
     * physics binding draws between steps).
     */
    wheelPose(i: number, pos: Vector3, rot: Quaternion, local?: boolean): void;
    /** The chassis' heading (radians about Y; 0 drives toward +Z). */
    get yaw(): number;
    /** Put it back on its wheels at `at` (a reset after a roll). */
    reset(at: readonly [number, number, number], yaw?: number): void;
    dispose(): void;
}
