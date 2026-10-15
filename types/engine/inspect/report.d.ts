/**
 * Asset inspection: counts, bounds, joints, clips and warnings for any Object3D, plus a
 * diff of two reports. Pure (no GPU, no DOM): `npm run inspect` and tests run it in Node.
 *
 *   const r = inspectObject(gltf.scene, { clips: gltf.animations, joints: HERO_RIG.joints });
 *   r.triangles; r.drawCalls; r.bounds.size; r.warnings
 *   const d = diffReports(before, after);   // deltas, added/removed joints, clips, materials
 */
import type { Object3D } from 'three/webgpu';
export interface ClipInfo {
    readonly name: string;
    /** Seconds. */
    readonly duration: number;
    readonly loop?: boolean;
    /** Animated tracks / joints (when known). */
    readonly tracks?: number;
    readonly frames?: number;
}
export interface InspectOptions {
    /** Display name. */
    readonly name?: string;
    /** Joint names when the rig is not a three Skeleton (rigid parts parented to joints). */
    readonly joints?: readonly string[];
    /** three AnimationClips or plain clip info. */
    readonly clips?: readonly ({
        name: string;
        duration: number;
        tracks?: readonly unknown[];
    } | ClipInfo)[];
    /** Warning thresholds. */
    readonly limits?: Partial<InspectLimits>;
}
export interface InspectLimits {
    /** Largest bounds side (m) before "huge bounds". */
    readonly maxSize: number;
    /** Smallest bounds side (m) before "tiny". */
    readonly minSize: number;
    readonly maxMaterials: number;
    readonly maxDrawCalls: number;
    readonly maxTriangles: number;
}
export declare const DEFAULT_LIMITS: InspectLimits;
export interface MeshInfo {
    readonly name: string;
    readonly triangles: number;
    readonly vertices: number;
    readonly materials: number;
    readonly skinned: boolean;
    readonly instances: number;
}
export interface InspectReport {
    readonly name: string;
    readonly triangles: number;
    readonly vertices: number;
    readonly meshes: number;
    readonly drawCalls: number;
    readonly materials: readonly {
        name: string;
        type: string;
        color: string | null;
        count: number;
    }[];
    readonly textures: number;
    /** Distinct material type + colour pairs (what the engine's cached toon materials collapse to). */
    readonly colours: number;
    /** Distinct BufferGeometries (shared geometry is counted once here, every use in triangles). */
    readonly geometries: number;
    readonly nodes: number;
    readonly bounds: {
        readonly min: readonly number[];
        readonly max: readonly number[];
        readonly size: readonly number[];
    };
    readonly joints: readonly string[];
    readonly skinned: boolean;
    readonly clips: readonly ClipInfo[];
    /** The heaviest meshes. */
    readonly topMeshes: readonly MeshInfo[];
    readonly warnings: readonly string[];
    /** Stable hash of geometry, colours and structure: changes when the asset changes. */
    readonly fingerprint: string;
}
/** Joints: explicit names, else Skeleton bones, else Bone nodes. */
export declare function jointsOf(object: Object3D, explicit?: readonly string[]): string[];
export declare function inspectObject(object: Object3D, o?: InspectOptions): InspectReport;
export interface ReportDiff {
    readonly a: string;
    readonly b: string;
    /** Numeric fields: [a, b, b − a]. */
    readonly counts: Readonly<Record<string, readonly [number, number, number]>>;
    readonly joints: {
        readonly added: readonly string[];
        readonly removed: readonly string[];
    };
    readonly clips: {
        readonly added: readonly string[];
        readonly removed: readonly string[];
        readonly changed: readonly string[];
    };
    readonly materials: {
        readonly added: readonly string[];
        readonly removed: readonly string[];
    };
    readonly warnings: {
        readonly added: readonly string[];
        readonly removed: readonly string[];
    };
    readonly same: boolean;
}
export declare function diffReports(a: InspectReport, b: InspectReport): ReportDiff;
