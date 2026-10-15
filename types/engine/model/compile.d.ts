/**
 * Expanded parts → placed triangles. Every primitive becomes one `CompiledPart` per slot: its
 * own triangles and the matrix that puts them in model space. Groups, mirrors and pivots are
 * frames; `on` parts are placed after the rest, on top of what they name. Pure (three's math
 * only), so the checks, the sheets and `buildModel` share it.
 */
import { Matrix4 } from 'three/webgpu';
import { type PrimKind } from './prims';
import type { Part, Slot, Vec3 } from './types';
export interface CompiledPart {
    /** For messages: the part's name, or its kind and path. */
    readonly label: string;
    readonly name?: string;
    readonly kind: PrimKind;
    readonly slot: Slot;
    readonly glow: boolean;
    /** False when the part opts out of `collider: 'parts'`. */
    readonly collide?: false;
    readonly tex?: string;
    /** Own-frame triangles (9 numbers each). */
    readonly tris: readonly number[];
    /** Own frame → model space. */
    readonly matrix: Matrix4;
    /** Index into `pivots`, or −1 for the model's root. */
    readonly pivot: number;
    /** Size of the part's own box (box kinds) or of its own-frame bounds (profile kinds). */
    readonly extent: Vec3;
}
export interface CompiledPivot {
    readonly name: string;
    /** The pivot's frame in model space. */
    readonly matrix: Matrix4;
    readonly parent: number;
}
export interface Compiled {
    readonly parts: CompiledPart[];
    readonly pivots: CompiledPivot[];
    readonly problems: string[];
    /** Every named part or group: the parts it covers, `parts.slice(start, end)`. */
    readonly named: readonly {
        readonly name: string;
        readonly start: number;
        readonly end: number;
    }[];
}
export interface Bounds {
    readonly min: Vec3;
    readonly max: Vec3;
    readonly size: Vec3;
}
/** Model-space bounds of some compiled parts (empty: all zero). */
export declare function boundsOf(parts: readonly CompiledPart[]): Bounds;
export declare function compileParts(parts: readonly Part[]): Compiled;
