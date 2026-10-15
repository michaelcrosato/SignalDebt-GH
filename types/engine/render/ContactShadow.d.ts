import { Mesh, MeshBasicNodeMaterial, PlaneGeometry } from 'three/webgpu';
/**
 * Classic hard-edged blob shadow that sits on the ground under a character.
 * Drawn as a TSL disc (step on distance from center) so it quantizes into a crisp
 * pixel ellipse in pixel mode. Position it with `place()` each frame.
 */
export declare class ContactShadow extends Mesh<PlaneGeometry, MeshBasicNodeMaterial> {
    readonly radius: number;
    private readonly strength;
    constructor(radius?: number);
    /**
     * @param groundY world height of the surface under the caster
     * @param height caster height above that surface (shadow shrinks and fades with height)
     */
    place(x: number, groundY: number, z: number, height: number): void;
}
