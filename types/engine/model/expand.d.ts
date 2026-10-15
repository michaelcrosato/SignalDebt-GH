/**
 * Def → plain data: params applied, the parts function called, every `use` replaced by a group
 * of the used model's parts (its slots mapped onto this model's), and every part's slot made
 * explicit. `expandModel` returns it as JSON-safe data (diffs, saves, exports); the compiler
 * and the checks work from the same expansion.
 */
import { type PaletteColor } from '../palette';
import { Rng } from '../random';
import type { ModelCatalog } from './catalog';
import type { Anchor, ModelDef, ModelLight, Part, Provenance, Slot, Vec3 } from './types';
import type { TextureCatalog } from '../texture/catalog';
/** What a slot is bound to at build time: a PALETTE name, or a computed colour (hex). */
export type Binding = PaletteColor | number;
export interface ModelOptions {
    /** Param values (unset ones take the def's default). */
    readonly params?: Readonly<Record<string, number>>;
    /** Seed for parts that read the rng (default 1). */
    readonly seed?: number;
    /** Re-bind slots: PALETTE names, or computed colours for game bindings (theme tints). */
    readonly palette?: Readonly<Record<Slot, Binding>>;
    /** Override the def's light (a theme's torch colour, a dimmer lamp). */
    readonly light?: Partial<ModelLight> & {
        readonly color?: number;
    };
    /** Where `use` ids (and a string id passed to build) resolve; default `MODEL_LIBRARY`. */
    readonly catalog?: ModelCatalog;
    /** Where parts' `tex` ids resolve; default `TEXTURE_LIBRARY`. */
    readonly textures?: TextureCatalog;
}
/** A model as plain data: no functions, no `use`, every primitive with its slot. */
export interface ExpandedModel {
    readonly id: string;
    readonly about: string;
    readonly tags: readonly string[];
    readonly palette: Readonly<Record<Slot, Binding>>;
    readonly params: Readonly<Record<string, number>>;
    readonly seed: number;
    readonly parts: readonly Part[];
    readonly size?: Vec3;
    readonly anchors?: Readonly<Record<string, Anchor>>;
    readonly light?: ModelLight;
    readonly collider: 'box' | 'cyl' | 'hull' | 'parts' | 'none';
    readonly texel?: number;
    readonly floats?: boolean;
    readonly source?: Provenance;
}
export interface Expansion {
    readonly model: ExpandedModel;
    readonly problems: string[];
    /** Whether any parts function read its rng (then builds are per seed, not cached). */
    readonly seeded: boolean;
    /** Whether the def itself (not a model it uses) has imported `mesh` parts. */
    readonly imports: boolean;
}
/** The generator a model's parts function gets: its own stream per (model, seed). */
export declare function modelRng(id: string, seed: number): Rng;
/** A part's name for messages: its `name`, or its kind and where it sits in the def. */
export declare function partLabel(p: object, path: string): string;
export declare function expandDef(def: ModelDef, opts: ModelOptions, catalog: ModelCatalog, stack?: readonly string[]): Expansion;
