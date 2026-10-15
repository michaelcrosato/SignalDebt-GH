type Vec3 = [number, number, number];
export interface BoidOptions {
    /** Agents stay inside this box (they steer back in near its walls). */
    bounds?: {
        min: Vec3;
        max: Vec3;
    };
    /** Neighbour radius (m). Default 2. */
    view?: number;
    /** Desired gap (m): closer neighbours push apart. Default 0.8. */
    space?: number;
    maxSpeed?: number;
    minSpeed?: number;
    /** Steering acceleration limit (m/s²). */
    maxForce?: number;
    /** Rule weights. */
    separation?: number;
    alignment?: number;
    cohesion?: number;
    /** Keep to a horizontal plane (fish in a pond, sheep on a field): y never changes. */
    flat?: boolean;
    /** How far inside the bounds the push back in starts (m). Default the view radius; small for a tight pen. */
    margin?: number;
    seed?: number;
}
export declare class Boids {
    readonly count: number;
    readonly pos: Float32Array;
    readonly vel: Float32Array;
    o: Required<Omit<BoidOptions, 'bounds' | 'seed'>> & {
        bounds: BoidOptions['bounds'];
    };
    /** A point everyone is drawn toward (null: none). */
    seek: Vec3 | null;
    seekWeight: number;
    /** A threat to scatter from. */
    flee: {
        at: Vec3;
        radius: number;
    } | null;
    fleeWeight: number;
    /** Spheres to steer around (x, y, z, r). */
    obstacles: {
        x: number;
        y: number;
        z: number;
        r: number;
    }[];
    private readonly acc;
    private readonly cells;
    private readonly spare;
    private readonly force;
    private readonly rand;
    constructor(count: number, o?: BoidOptions);
    /** Average distance to the nearest neighbour (tests, tools). */
    spacing(): number;
    /** Average speed and how lined up the headings are (0 random, 1 all the same way). */
    order(): {
        speed: number;
        alignment: number;
    };
    step(dt: number): void;
    /** Steering toward a direction at full speed (desired − velocity, each axis capped), times `w`, added to `f`. */
    private steer;
    private dist;
    private key;
    private hash;
}
export {};
