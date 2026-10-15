import type { AnimationClip, Object3D } from 'three/webgpu';
import type { ModelCatalog } from './model/catalog';
import { type PackIndex } from './model/packs/pack';
import type { TextureCatalog } from './texture/catalog';
import { type ToonifyOptions } from './render/toon';
export interface Model {
    scene: Object3D;
    animations: AnimationClip[];
}
/**
 * Load a local GLB (e.g. `assets/hero.glb` from /public) once; every call returns a fresh
 * clone whose materials are converted to the engine's toon materials.
 */
export declare function loadModel(url: string, options?: ToonifyOptions): Promise<Model>;
/**
 * Load a pack of imported models and textures (`public/packs/<pack>.json`, docs/ASSETS.md
 * *Importing*) once, the way `loadModel` loads a GLB: the URL resolved the same way (under the
 * base URL; a page may put a data URL for it in `__PIXEL_ASSETS__`, as single-file builds do for
 * every `packs/<id>.json` path the built code names, cut to the models it names), counted by
 * `assetProgress`. Resolves to a catalog of the
 * pack's ModelDefs, to build from with `buildModel(id, { catalog })`; `into` also adds them to a
 * catalog of yours (e.g. `MODEL_LIBRARY`, so `use` finds them), and `textures` gets the pack's
 * TextureDefs (e.g. `TEXTURE_LIBRARY`, so `textureMap(id)` and `hudSprite(id)` find them).
 */
export declare function loadPack(url: string, opts?: {
    readonly into?: ModelCatalog;
    readonly textures?: TextureCatalog;
}): Promise<ModelCatalog>;
/**
 * The packs a site carries (`public/packs/index.json`, written by the importers): each pack's
 * id, title, file (relative to the index), how many models and textures it holds, its licence
 * and author. Load one with `loadPack(new URL(entry.file, indexUrl))`, or `packs/<file>`.
 */
export declare function loadPackIndex(url?: string): Promise<PackIndex>;
/**
 * Start downloading (and parsing) models now, without waiting for them. Later
 * `loadModel` calls for the same URLs reuse the in-flight requests. The engine calls this
 * with `Game.assets` before the renderer and physics initialise.
 */
export declare function preloadModels(urls: readonly string[]): void;
/** Progress of every model requested so far: 0..1 (bytes where known, else files). */
export declare function assetProgress(): number;
