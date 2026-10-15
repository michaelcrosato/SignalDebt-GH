/**
 * Terrain from a height function: a grid of heights drawn as a flat-shaded mesh coloured by
 * height and slope (beach, grass, rock, snow), and the same grid as a Rapier heightfield the
 * character walks on. `erode` runs hydraulic erosion: raindrops that roll downhill, pick up
 * soil where they speed up and drop it where they slow, carving gullies and filling valleys.
 *
 *   const land = new Terrain({ size: [40, 30], cells: [80, 60] });
 *   land.generate((x, z) => 4 * noise.fbm2(x * 0.04, z * 0.04));
 *   land.erode();                         // about one raindrop per grid point
 *   land.attach(physics);                 // the heightfield collider (again after a change)
 *   scene.add(land.mesh);
 *   land.heightAt(x, z);                  // what the collider says, between the grid points too
 *
 * The grid's cells are split into triangles the way Rapier splits its heightfield (the
 * diagonal from the cell's +x corner to its +z corner), so mesh, `heightAt` and collider agree.
 */
import { Mesh, Vector3 } from 'three/webgpu';
import { type Physics, RAPIER } from '../physics/Physics';
export interface TerrainBand {
    /** Heights below this (metres above the terrain's origin) take this colour. */
    below: number;
    color: number;
}
export interface TerrainOptions {
    /** Size in metres along x and z (default [32, 32]). */
    size?: readonly [number, number];
    /** Cells along x and z (default one per metre). */
    cells?: readonly [number, number];
    /** Where the middle of the grid's height 0 is (default the origin). */
    at?: readonly [number, number, number];
    /** Colour by height, lowest first; the last band takes everything above. */
    bands?: readonly TerrainBand[];
    /** Faces steeper than this (their normal's y below it) are rock. Default 0.72 (about 44°). */
    steep?: number;
    rock?: number;
}
export interface ErosionOptions {
    /** Raindrops to roll (default one per grid point). */
    droplets?: number;
    seed?: number;
    /** Steps a drop lives (default 40). */
    lifetime?: number;
    /** How much a drop keeps its direction instead of following the slope (0..1, default 0.05). */
    inertia?: number;
    /** Soil a drop can carry, per unit of speed, water and drop in height (default 4). */
    capacity?: number;
    /** Fraction of its spare capacity a drop digs up per step (default 0.3). */
    erode?: number;
    /** Fraction of its excess it lays down per step (default 0.3). */
    deposit?: number;
    /** Water lost per step (default 0.02). */
    evaporate?: number;
    /** How fast drops speed up downhill (default 4). */
    gravity?: number;
    /** Radius (whole cells) a drop digs over, so it carves gullies rather than pits (default 2). */
    radius?: number;
    /** Grid points along each edge left exactly as they are (default 0): where the land meets a floor or a wall. */
    margin?: number;
}
/** Sea, beach, grass, forest, rock, snow (the engine palette). */
export declare const TERRAIN_BANDS: readonly TerrainBand[];
export declare class Terrain {
    readonly nx: number;
    readonly nz: number;
    readonly sizeX: number;
    readonly sizeZ: number;
    readonly at: readonly [number, number, number];
    /** Heights at the grid points, row by row along z: `heights[ix + iz * (nx + 1)]`. */
    readonly heights: Float32Array;
    readonly mesh: Mesh;
    collider: RAPIER.Collider | null;
    private readonly bands;
    private readonly steep;
    private readonly rock;
    private physics;
    constructor(o?: TerrainOptions);
    /** Metres between grid points along x and z. */
    get cell(): [number, number];
    /** World x, z of grid point (ix, iz). */
    pointX(ix: number): number;
    pointZ(iz: number): number;
    /** Fill the heights from `f(x, z)` (world x, z; metres above the terrain's origin), then redraw. */
    generate(f: (x: number, z: number) => number): this;
    private h;
    /**
     * Height of the surface at world (x, z), in world y: the triangle it is over, as the mesh and
     * the collider have it. Outside the grid: its nearest edge.
     */
    heightAt(x: number, z: number): number;
    /** The surface's normal at world (x, z) (central differences over half a cell). */
    normalAt(x: number, z: number, out?: Vector3): Vector3;
    /** Redraw the mesh from the heights (positions, flat normals, colours per face). */
    update(): void;
    private bandColor;
    /**
     * Make (or remake, after `generate` / `erode`) the heightfield collider: a fixed body at the
     * terrain's origin. Returns it.
     */
    attach(physics: Physics): RAPIER.Collider;
    /** Remove the collider (the mesh stays). */
    detach(): void;
    /** The collider and the mesh's geometry go (the shared material stays). */
    dispose(): void;
    /**
     * Hydraulic erosion: `droplets` raindrops, each rolling downhill from a random point. A drop
     * carries soil up to a capacity that grows with its speed, water and how steeply it is
     * falling: below capacity it digs (over a small radius), above it, or going uphill, it drops
     * soil. It evaporates as it goes. Redraws when done; reattach the collider after.
     */
    erode(o?: ErosionOptions): void;
}
