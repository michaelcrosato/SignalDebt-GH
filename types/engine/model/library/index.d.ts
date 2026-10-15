import { ModelCatalog } from '../catalog';
/**
 * The engine's built-in models (src/engine/model/library/<family>.ts). Games add their own
 * (`MODEL_LIBRARY.add(def)`) or build a catalog on top of it; `npm run model -- find` lists them.
 */
export declare const MODEL_LIBRARY: ModelCatalog;
/**
 * The library's families (one file each, src/engine/model/library/<family>.ts) in order: each
 * family's model ids. Browse by family (the Asset Gallery's shelves, LIBRARY.md's sections).
 */
export declare const MODEL_FAMILIES: Readonly<Record<string, readonly string[]>>;
