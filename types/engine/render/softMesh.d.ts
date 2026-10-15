/**
 * Drawing Verlet soft bodies (physics/verlet.ts): `SoftMesh` for cloth and blobs (a mesh over
 * the body's triangles, rebuilt from its particles each frame), `RopeMesh` for ropes (one
 * instanced box per segment, one draw call). Both use toon materials, so they shade, outline
 * and filter like everything else.
 *
 *   const flag = clothGrid({ ... });
 *   const mesh = new SoftMesh(flag, toonMaterial(PALETTE.red));   // double-sided copy
 *   scene.add(mesh);
 *   // per frame (after flag.step): mesh.sync();
 */
import { BufferGeometry, InstancedMesh, type Material, Mesh } from 'three/webgpu';
import type { VerletBody } from '../physics/verlet';
export declare class SoftMesh extends Mesh<BufferGeometry, Material> {
    readonly body: VerletBody;
    private readonly positions;
    constructor(body: VerletBody, material: Material, o?: {
        uv?: Float32Array;
        doubleSided?: boolean;
    });
    /** Copy the particles into the mesh (call once per frame after stepping the body). */
    sync(): void;
}
export declare class RopeMesh extends InstancedMesh {
    readonly body: VerletBody;
    private readonly m;
    private readonly q;
    private readonly a;
    private readonly b;
    private readonly d;
    private readonly s;
    /** One box per segment (particle i to i + 1), `thickness` metres across. */
    constructor(body: VerletBody, material: Material, thickness?: number);
    sync(): void;
}
