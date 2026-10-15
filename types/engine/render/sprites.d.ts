/**
 * Pixel sprites in a 3D world (Doom's monsters, Paper Mario, Octopath's characters): flat
 * pictures that always face the camera, drawn with nearest sampling so their pixels stay
 * square, cut out by alpha (no blending), animated by flipping frames of a sheet. Many
 * sprites of one sheet are one instanced draw; each has its own position, size, frame and
 * mirror. Sheets can be drawn in code (`drawSheet`), so a game needs no image files.
 *
 *   const sheet = drawSheet({ frame: [16, 16], frames: 4 }, (g, f) => { g.fillStyle = '#f4f4f4'; g.fillRect(4, 4 + (f % 2), 8, 8); });
 *   const sprites = new SpriteBatch(sheet, { capacity: 64 });
 *   const s = sprites.spawn([0, 1, 0], { size: 1 });
 *   sprites.set(s, { frame: 2, flip: true });       // move, animate and mirror whenever
 *
 * Sprite positions are in the batch's own space: leave the batch itself unrotated and unscaled.
 */
import { InstancedMesh, type Texture } from 'three/webgpu';
export interface SpriteSheet {
    /**
     * The sheet (nearest-filtered); `drawSheet` makes one from code. Frames run left to right,
     * top to bottom, from the image's top-left; a texture with `flipY` false (a `DataTexture`)
     * holds its rows top line first.
     */
    readonly texture: Texture;
    /** Frame size in pixels and the frames across and down. */
    readonly frame: readonly [number, number];
    readonly cols: number;
    readonly rows: number;
    readonly frames: number;
}
/**
 * Draw a sheet in code: `draw(g, frame)` paints one frame into a `frame`-sized box (the
 * context is translated there and clipped). Pixel coordinates; draw with `fillRect`.
 */
export declare function drawSheet(o: {
    frame: readonly [number, number];
    frames: number;
    cols?: number;
}, draw: (g: CanvasRenderingContext2D, frame: number) => void): SpriteSheet;
export interface SpriteOptions {
    /** Height in metres (the width follows the frame's aspect). Default 1. */
    size?: number;
    frame?: number;
    /** Mirror left-right (a sprite facing the other way). */
    flip?: boolean;
}
export declare class SpriteBatch extends InstancedMesh {
    readonly sheet: SpriteSheet;
    /** Per sprite: x, y, z (its bottom middle), size. */
    private readonly place;
    /** Per sprite: frame, flip (±1). */
    private readonly look;
    constructor(sheet: SpriteSheet, o: {
        capacity: number;
    });
    /** A new sprite (its index), or -1 when full. */
    spawn(at: readonly [number, number, number], o?: SpriteOptions): number;
    /** Move or change sprite `i`. */
    set(i: number, o: SpriteOptions & {
        at?: readonly [number, number, number];
    }): void;
    /** `set` without the options object, for many sprites every frame: position, then frame and mirror. */
    put(i: number, x: number, y: number, z: number, frame?: number, flip?: boolean): void;
    /** Where sprite `i` stands. */
    at(i: number): [number, number, number];
    /** A whole frame number on the sheet (negative and past-the-end frames wrap round). */
    private wrap;
    /** The frame sprite `i` shows. */
    frameOf(i: number): number;
    dispose(): this;
}
