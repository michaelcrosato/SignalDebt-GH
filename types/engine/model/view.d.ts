/**
 * The game's view of a model: Riftlight's camera (src/riftlight/index.ts) and a part-id raster
 * through it. The sheets draw with it; the readability checks count its pixels, so a warning
 * measures what the player sees at 480×270.
 */
import { Vector3 } from 'three/webgpu';
/**
 * Riftlight's camera: iso, yaw 45°, pitch 42°, a 15 m tall view on 270 art pixels (18 px/m at
 * zoom 1), at the level and town zooms (src/riftlight/game/Riftlight.ts).
 */
export declare const GAME_VIEW: {
    readonly yaw: 45;
    readonly pitch: 42;
    readonly viewHeight: 15;
    readonly rows: 270;
    readonly zooms: {
        readonly level: 1.08;
        readonly town: 1.22;
    };
};
export declare const gamePxPerMetre: (zoom: number) => number;
/** The raster's longest side: past it (a model over ~26 m across) the scale drops instead. */
export declare const MAX_RASTER = 512;
/** Which part (index + 1, 0 = empty) covers each art pixel, at `scale` px/m. */
export interface PartRaster {
    readonly width: number;
    readonly height: number;
    readonly ids: Uint16Array;
    readonly scale: number;
}
/**
 * World-space triangles of each part (flat vertex triples) through the game camera at the level
 * zoom, `yaw` degrees round (the game's own by default; add 180 for the far side). Depth and ids
 * only, and never over `MAX_RASTER` a side, so a draft with a stray part 1 km away stays cheap.
 */
export declare function rasterParts(parts: readonly (readonly Vector3[])[], yaw?: number): PartRaster;
