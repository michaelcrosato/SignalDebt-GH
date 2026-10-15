/**
 * GPU-free views of any Object3D for agents: a turntable (N yaw angles at one shared scale),
 * rig overlays (x-ray mesh + joints with names), and the inspection sheet that puts them
 * together with the counts and warnings. Built on the software canvas the animation contact
 * sheets use (animation/raster.ts): flat 3-band toon shading, cel outlines, vertex colours,
 * texture maps whose pixels are in memory (baked TextureDefs, nearest texel), CPU skinning for SkinnedMesh, InstancedMesh instances. Runs in Node and in the browser.
 *
 *   const sheet = renderInspection(object, inspectObject(object, { joints }), { joints });
 */
import type { Object3D } from 'three/webgpu';
import { Box3, Vector3 } from 'three/webgpu';
import { type RGB, type SheetImage, type TexelSampler } from '../animation/raster';
import type { InspectReport, ReportDiff } from './report';
export declare const INSPECT_BG: RGB;
export interface ViewOptions {
    width?: number;
    height?: number;
    /** Degrees; 0 looks at the model's front (+Z), 90 at its left side (+X). */
    yaw?: number;
    /** Degrees down. */
    pitch?: number;
    /** World bounds to frame (shared across views so sizes compare); default the object's. */
    frame?: Box3;
    /** Pixels per metre (default: fit `frame` for any yaw). */
    scale?: number;
    label?: string;
    /** Joints to draw over the model (x-ray: the mesh is dimmed, joints always on top). */
    joints?: readonly string[];
    /** Write joint names next to the joints. */
    names?: boolean;
    /** Dim the shaded model towards the background (0..1), for rig views. */
    dim?: number;
}
interface Tri {
    a: Vector3;
    b: Vector3;
    c: Vector3;
    color: RGB;
    unlit: boolean;
    id: number;
    /** A textured triangle: its UVs (a, b, c) and its map's sampler; `color` tints it. */
    tex?: {
        uv: readonly number[];
        sample: TexelSampler;
    };
}
/** Every triangle of every visible mesh in world space (skinned and instanced meshes resolved). */
export declare function worldTriangles(object: Object3D): Tri[];
/** A camera basis for a yaw/pitch view: forward (into the screen), right and up. */
export declare function viewBasis(yawDeg: number, pitchDeg: number): {
    f: Vector3;
    r: Vector3;
    u: Vector3;
};
/** Pixels per metre that fit `frame` in a W×H view at every yaw (so a turntable keeps one scale). */
export declare function fitScale(frame: Box3, w: number, h: number, pitchDeg?: number): number;
/** Render one view of an object (or of precomputed triangles). */
export declare function renderView(object: Object3D, o?: ViewOptions, tris?: Tri[]): SheetImage;
/** `angles` views around the model at one scale (0° = front). */
export declare function renderTurntable(object: Object3D, o?: {
    angles?: number;
    size?: number;
    pitch?: number;
    frame?: Box3;
}): SheetImage[];
export declare function row(images: readonly SheetImage[], gap?: number, bg?: RGB): SheetImage;
export declare function column(images: readonly SheetImage[], bg?: RGB): SheetImage;
export interface Line {
    text: string;
    color?: RGB;
}
/** A text panel: lines wrapped to the width, at least `minHeight` tall. */
export declare function textBox(lines: readonly Line[], width: number, minHeight?: number, title?: string): SheetImage;
/** The report as text lines (counts, bounds, joints, clips, warnings). */
export declare function reportLines(r: InspectReport, maxClips?: number): Line[];
/** The inspection sheet: title, turntable, rig front + side with names, the report. */
export declare function renderInspection(object: Object3D, r: InspectReport, o?: {
    angles?: number;
    size?: number;
    joints?: readonly string[];
    subtitle?: string;
    notes?: readonly string[];
}): SheetImage;
/** The B − A table of a diff as a panel. */
export declare function diffPanel(d: ReportDiff, width: number): SheetImage;
/** A one-line title bar. */
export declare function titleBar(title: string, width: number, sub?: string): SheetImage;
/** Two assets (or versions) side by side at one scale, with the count deltas. */
export declare function renderDiff(a: {
    object: Object3D;
    report: InspectReport;
}, b: {
    object: Object3D;
    report: InspectReport;
}, d: ReportDiff, o?: {
    angles?: number;
    size?: number;
}): SheetImage;
export {};
