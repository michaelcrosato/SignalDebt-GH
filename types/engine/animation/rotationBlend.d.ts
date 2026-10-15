import { type AnimationAction, type Object3D, Quaternion } from 'three/webgpu';
/**
 * Joint rotations of cross-fading clips, blended without flipping.
 *
 * three's mixer blends quaternions along the shortest arc. When two clips hold a joint more
 * than 180° apart (Fall's arms overhead at −150…−172°, Run's swinging back to +55°), the
 * shortest arc changes side as soon as the difference crosses 180°, and the blended joint
 * jumps to the other side in one frame (a 140–160° pop).
 *
 * Run this after `mixer.update()`. It re-blends the rotation tracks of the playing actions
 * with the same weights, but keeps every action's quaternion sign continuous for as long as
 * the action contributes, so the blend can never switch arcs mid-fade. A joint driven by a
 * single clip (no blend) is left exactly as three posed it. A clip that joins a blend
 * starts on the same side of the rest pose as the joint: blends travel the way the poses
 * were authored (an arm swings down through the front from overhead to behind, not up over
 * the shoulder), and a flip that ended at 360° blends back without spinning.
 */
export declare class RotationBlend {
    private readonly joints;
    private readonly actions;
    private frame;
    /**
     * @param rest each joint's rest (bind) rotation, by name: the reference for "the same side
     *   of the rest pose". Joints without an entry use the identity.
     */
    constructor(model: Object3D, actions: Iterable<AnimationAction>, rest?: ReadonlyMap<string, Quaternion>);
    /** Re-blend joint rotations from the actions' current times and weights. */
    apply(): void;
}
