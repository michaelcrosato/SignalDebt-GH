/**
 * Materials written as TSL node graphs: shaders computed per pixel from position, normal and
 * time, no textures. Holograms and force fields are see-through by ordered dither (no
 * blending, no sorting: pixel art friendly); lava, marble, wood and crystal are procedural
 * textures from noise, banded into a few palette colours like the toon light.
 *
 *   mesh.material = hologramMaterial({ color: PALETTE.cyan });
 *   mesh.material = lavaMaterial({ time: myClock });   // any float node; default three's `time`
 */
import { MeshBasicNodeMaterial, type MeshToonNodeMaterial } from 'three/webgpu';
export interface ShaderOptions {
    color?: number;
    /** The clock it animates by (a float node). Default three's `time`, in seconds. */
    time?: any;
}
/** A 4 x 4 ordered dither threshold per art pixel (0..1): keep a pixel where it is below its opacity. */
export declare function bayer4(): any;
/**
 * A hologram: scanlines climbing the object, a bright rim where it turns away from you, a
 * flicker; the middle mostly see-through.
 */
export declare function hologramMaterial(o?: ShaderOptions): MeshBasicNodeMaterial;
/**
 * A force field: a bubble of hexagonal-looking cells (Worley noise) that drift, brightest at
 * the rim and where cells meet, a pulse running up it.
 */
export declare function forceFieldMaterial(o?: ShaderOptions): MeshBasicNodeMaterial;
/** Lava: slow churning fractal noise, banded dark crust to white-hot, unlit (it glows). */
export declare function lavaMaterial(o?: ShaderOptions): MeshBasicNodeMaterial;
/** Marble: veins (a sine bent by fractal noise) in three bands of white and grey, toon-lit. */
export declare function marbleMaterial(o?: ShaderOptions): MeshToonNodeMaterial;
/** Wood: rings round the y axis, wobbled by noise, light and dark grain, toon-lit. */
export declare function woodMaterial(o?: ShaderOptions): MeshToonNodeMaterial;
/** Crystal: Worley cells with bright seams, slowly shifting, toon-lit. */
export declare function crystalMaterial(o?: ShaderOptions): MeshToonNodeMaterial;
