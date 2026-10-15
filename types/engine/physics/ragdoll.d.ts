/**
 * Ragdolls: a jointed model (a hierarchy of Object3D joints, like the hero's) handed to
 * physics. Each part is a capsule on one joint; parts hang from their parent by a hinge about
 * the joint's own X axis with limits (knees, elbows) or by a ball joint whose swing is held
 * inside a cone (shoulders, hips, the spine, the neck). Parts never collide with ragdoll parts
 * (their own or another ragdoll's), only with the world. `sync()` writes the bodies back into
 * the joints every frame, and `release()` hands the pose back to animation with a blend (into a
 * get-up clip, say).
 *
 *   const doll = new Ragdoll(physics, model, HERO_RAGDOLL);
 *   doll.enable({ velocity: [0, 2, -4] });      // from the pose the model has now
 *   doll.push([x, y, z], [0, 0, -6]);           // knock the nearest part (a velocity change, m/s)
 *   // per frame, after the physics step: doll.sync()
 *   const blend = doll.release();               // bodies gone, the root moved under the pelvis
 *   // per frame while blending: mixer.update(dt); blend.apply(weight 0 → 1)
 *
 * Joint rest rotations are taken as identity (the engine's generated rigs are built that way):
 * a cone's centre is the part's own direction, a hinge's angle is the joint's local X angle.
 */
import { type Object3D, Vector3 } from 'three/webgpu';
import { type Physics, RAPIER } from './Physics';
type Vec3 = readonly [number, number, number];
export interface RagdollPart {
    /** The joint (Object3D name) this part moves. */
    bone: string;
    /** The part it hangs from (that part's bone); none for the root (the pelvis). */
    parent?: string;
    /** The capsule, in the joint's own space: from `from` (default the joint) to `to`. */
    from?: Vec3;
    to: Vec3;
    radius: number;
    /** How it hangs: a hinge about local X (degrees, min and max) or a ball joint with a swing cone (degrees). Default a 60° cone. */
    hinge?: readonly [number, number];
    cone?: number;
    /** Relative density (default 1). */
    density?: number;
}
export interface RagdollOptions {
    /** World density of the parts (the world's mass units per m³). Default 3. */
    density?: number;
    /** Linear and angular damping (air drag, joint friction). Defaults 0.1 and 1.5. */
    damping?: number;
    angularDamping?: number;
    /** Friction of the parts on the ground. Default 0.5. */
    friction?: number;
}
export declare class Ragdoll {
    private readonly physics;
    readonly root: Object3D;
    readonly parts: readonly RagdollPart[];
    readonly o: Required<RagdollOptions>;
    private built;
    private unsubscribe;
    private readonly q;
    private readonly q2;
    private readonly v;
    private readonly v2;
    private readonly t;
    constructor(physics: Physics, root: Object3D, parts: readonly RagdollPart[], o?: RagdollOptions);
    /** Whether the bodies exist (a `physics.clear()`, a level unload, removes them: then it is off). */
    get active(): boolean;
    /** The bodies (root part first), while active. */
    get bodies(): RAPIER.RigidBody[];
    /** Make the bodies from the model's current pose, moving at `velocity` (and spinning at `spin`, rad/s). */
    enable(o?: {
        velocity?: Vec3;
        spin?: Vec3;
    }): void;
    /**
     * Knock the part nearest `at`: it gains `velocity` (m/s, applied there as an impulse of its
     * own mass, so the same push works whatever the ragdoll's density), and its joints pass
     * some of it on.
     */
    push(at: Vec3 | Vector3, velocity: Vec3): void;
    /** Total mass of the parts (world units), while active. */
    mass(): number;
    /** Fastest part (m/s): settled when this stays low. */
    speed(): number;
    /**
     * Where the root part (the pelvis) is and how it lies: face up (on its back: its forward,
     * +Z, points up) or down, and the heading (yaw) a character lying like that has: on its back
     * its head is behind it (−Z), on its front ahead (+Z). That is the heading to get up with.
     */
    rootPose(out?: Vector3): {
        at: Vector3;
        faceUp: boolean;
        heading: number;
    };
    /** Write the bodies into the joints (between the last two physics steps). Call every frame after the physics update. */
    sync(): void;
    /**
     * Remove the bodies and hand the pose back. The model root moves under the root part (feet
     * at `ground`: a height, or a function of x, z called once the bodies are gone; turned to
     * `heading`, default `rootPose().heading`) without moving the joints in the world; the returned
     * blend eases every part's joint from that pose to whatever animation writes next:
     * call `apply(w)` after the mixer each frame, w going 0 → 1.
     */
    release(o?: {
        ground?: number | ((x: number, z: number) => number);
        heading?: number;
        offset?: Vec3;
    }): {
        apply(w: number): void;
    };
    /** Remove the bodies (the joints keep the last pose). */
    disable(): void;
    /** Hold each ball joint's swing inside its cone, then keep the last two poses. */
    private afterStep;
    /**
     * A cone limit for a ball joint (Rapier's ball joints have none): when the part's axis has
     * swung more than `cone` from where its parent holds it at rest, turn it back onto the cone's
     * edge about its joint (a projection, as position-based physics does), carrying every part
     * below it along (their joints move with it, so they stay together), and take away the
     * relative spin that would carry it further out. A part lying against something may sit up
     * to `PRESSED` past the cone instead (a head pressed into a stair): only its spin out is taken.
     */
    private holdCone;
    /** Whether part `b` touches anything (its own ragdoll's parts never touch it). */
    private touching;
    /** Turn part `b` and everything below it by `angle` about `k` through its joint. */
    private turnBack;
}
export {};
