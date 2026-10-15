type V3 = [number, number, number];
/** One right-hand side, chosen with probability `p` among a symbol's rules. */
export interface LRule {
    to: string;
    p?: number;
}
export interface LSystemDef {
    axiom: string;
    /** symbol → what replaces it (one string, or several to choose from by probability) */
    rules: Readonly<Record<string, string | readonly LRule[]>>;
}
export interface TurtleOptions {
    /** Turn per + − & ^ \ / (degrees, default 25). */
    angle?: number;
    /** Length of an F at the trunk (default 1). */
    length?: number;
    /** Length kept per branching level (each `[`, default 0.8). */
    lengthScale?: number;
    /** Trunk radius (default 0.08). */
    radius?: number;
    /** Radius kept per branching level, and per `!` (default 0.65). */
    radiusScale?: number;
    /** Degrees of random wobble on every turn (default 0), seeded. */
    jitter?: number;
    seed?: number;
    /** Bend toward this direction a little each segment (gravity, light): [x, y, z] and how much per segment (radians). */
    tropism?: {
        dir: V3;
        amount: number;
    };
}
export interface Branch {
    from: V3;
    to: V3;
    radius: number;
    /** Branching level (0 = trunk). */
    depth: number;
}
export interface Leaf {
    at: V3;
    /** The way the twig it grows on points. */
    dir: V3;
    depth: number;
}
/** Grow `iterations` generations. Stops early (keeping the last whole generation) past `maxLength` symbols. */
export declare function expand(sys: LSystemDef, iterations: number, seed?: number, maxLength?: number): string;
/**
 * Read an L-system string as a 3D turtle starting at the origin heading up (+y). Turns are about
 * the turtle's own axes (its heading is its +y): + turns the heading toward its −x and − toward
 * +x (about its z), & pitches it toward its +z and ^ toward −z (about its x), \ and / roll about
 * the heading, | turns round. `[` pushes position, orientation, length and radius (both shrink a
 * level), `]` pops. `!` thins the radius. `L` puts a leaf. Other symbols are ignored.
 */
export declare function turtle(s: string, o?: TurtleOptions): {
    branches: Branch[];
    leaves: Leaf[];
};
/** Classic plants (after The Algorithmic Beauty of Plants), with turtle settings that suit them. */
export declare const PLANTS: {
    /** A bush branching three ways at every node (ABOP fig. 1.25), leaves on every twig. */
    bush: {
        system: {
            axiom: string;
            rules: {
                A: string;
                F: string;
                S: string;
            };
        };
        iterations: number;
        turtle: {
            angle: number;
            length: number;
            lengthScale: number;
            radius: number;
            radiusScale: number;
        };
    };
    /** A fern-like frond (ABOP fig. 1.24f) turned into 3D with a roll at each fork. */
    fern: {
        system: {
            axiom: string;
            rules: {
                X: string;
                F: string;
            };
        };
        iterations: number;
        turtle: {
            angle: number;
            length: number;
            lengthScale: number;
            radius: number;
            radiusScale: number;
        };
    };
    /** A weed with sides that differ each time (stochastic, after ABOP fig. 1.27, rolled into 3D). */
    weed: {
        system: {
            axiom: string;
            rules: {
                F: {
                    to: string;
                    p: number;
                }[];
            };
        };
        iterations: number;
        turtle: {
            angle: number;
            length: number;
            lengthScale: number;
            radius: number;
            radiusScale: number;
        };
    };
    /** A tall tree: a trunk that forks in three, branches bending down under their weight. */
    tree: {
        system: {
            axiom: string;
            rules: {
                A: string;
                B: string;
            };
        };
        iterations: number;
        turtle: {
            angle: number;
            length: number;
            lengthScale: number;
            radius: number;
            radiusScale: number;
            tropism: {
                dir: [number, number, number];
                amount: number;
            };
        };
    };
};
export {};
