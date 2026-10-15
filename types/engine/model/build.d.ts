/**
 * `buildModel`: a def (or a library id) → one merged, faceted mesh per material, plus named
 * pivot groups left movable, its bounds, anchors, collider data and light request. Models whose
 * parts don't read the rng are cached per (params, palette): their geometry is shared
 * (`userData.shared`, kept by level unloads) and each build gets fresh Object3Ds.
 *
 *   const lamp = buildModel('lamp-post');
 *   scene.add(lamp.object);
 *   if (lamp.light) ctx.lights.request({ ...lamp.light, position: lamp.light.at });
 *   const stall = buildModel('market-stall', { palette: { cloth: 'blue' } });
 */
import { Group, Matrix4 } from 'three/webgpu';
import type { FlickerPreset } from '../render/lights';
import type { TextureCatalog } from '../texture/catalog';
import type { ModelCatalog } from './catalog';
import { type Bounds, type Compiled } from './compile';
import { type Binding, type ExpandedModel, type Expansion, type ModelOptions } from './expand';
import type { ModelDef, Slot, Vec3 } from './types';
export type ColliderData = {
    readonly kind: 'box';
    readonly center: Vec3;
    readonly half: Vec3;
} | {
    readonly kind: 'cyl';
    readonly center: Vec3;
    readonly radius: number;
    readonly halfHeight: number;
} | {
    readonly kind: 'hull';
    readonly points: readonly number[];
};
/** What to hand `ctx.lights.request` (positions are model space: add the placement). */
export interface ModelLightRequest {
    readonly at: Vec3;
    readonly color: number;
    readonly intensity: number;
    readonly radius: number;
    readonly flicker?: FlickerPreset;
}
export interface ModelReport {
    readonly tris: number;
    readonly draws: number;
    /** Distinct materials (toon or glow per colour). */
    readonly materials: number;
    /** Placed primitives (one per slot for imported meshes). */
    readonly parts: number;
    /** Whether the parts read the rng (then each seed builds its own geometry). */
    readonly seeded: boolean;
    /** Whether this build reused cached geometry. */
    readonly cached: boolean;
}
export interface ModelBuild {
    readonly id: string;
    /** Named after the model; pivots are named Groups inside it. */
    readonly object: Group;
    readonly bounds: Bounds;
    readonly anchors: Readonly<Record<string, {
        readonly at: Vec3;
        readonly rot: Vec3;
    }>>;
    readonly colliders: readonly ColliderData[];
    readonly light: ModelLightRequest | null;
    readonly report: ModelReport;
}
/** A model that can't be built; `problems` says why and how to fix each one. */
export declare class ModelError extends Error {
    readonly id: string;
    readonly problems: readonly string[];
    constructor(id: string, problems: readonly string[]);
}
/** One mesh of a build: a material's triangles inside one pivot (or the root). */
export interface MeshLayout {
    readonly pivot: number;
    readonly slot: Slot;
    readonly glow: boolean;
    /** The slot's colour; white under a texture (the texture brings its own colours). */
    readonly hex: number;
    /** The TextureDef id its parts name, if textured. */
    readonly tex?: string;
    /** Positions in the pivot's frame, 9 per triangle, wound outward. */
    readonly positions: Float32Array;
    /** Textured meshes, when laid out with `uv`: 6 per triangle, in texture repeats. */
    readonly uvs?: Float32Array;
}
/** What `layoutModel` needs to give textured parts their UVs. */
export interface UvLayout {
    /** Texels per metre (the def's `texel`, else `DEFAULT_TEXEL`). */
    readonly texel: number;
    readonly textures: TextureCatalog;
}
export interface Layout {
    readonly meshes: readonly MeshLayout[];
    /** Each pivot's name, parent and transform relative to its parent. */
    readonly pivots: readonly {
        readonly name: string;
        readonly parent: number;
        readonly local: Matrix4;
    }[];
    readonly bounds: Bounds;
    readonly tris: number;
}
export declare const bindingHex: (b: Binding) => number;
/**
 * Compiled parts → meshes: one per (pivot, material), triangles baked into the pivot's frame. A
 * textured part's material is its texture (on white), and with `uv` its mesh carries UVs.
 */
export declare function layoutModel(compiled: Compiled, palette: Readonly<Record<Slot, Binding>>, uv?: UvLayout): Layout;
/** Collider data from the model's bounds (or its points, for `hull`). */
export declare function collidersOf(kind: ExpandedModel['collider'], compiled: Compiled, bounds: Bounds): ColliderData[];
/** Expand + compile, or throw a ModelError naming every problem. */
declare function prepare(def: ModelDef, opts: ModelOptions, catalog: ModelCatalog): {
    expansion: Expansion;
    compiled: Compiled;
};
/** Resolve an id through the catalog, or take the def as given. */
export declare function modelDef(idOrDef: string | ModelDef, catalog?: ModelCatalog): ModelDef;
export declare function buildModel(idOrDef: string | ModelDef, opts?: ModelOptions): ModelBuild;
/** The plain-JSON form of a model: params applied, `use` resolved (throws a ModelError on problems). */
export declare function expandModel(idOrDef: string | ModelDef, opts?: ModelOptions): ExpandedModel;
export { prepare as prepareModel };
