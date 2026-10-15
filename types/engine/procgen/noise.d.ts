export interface FbmOptions {
    /** How many layers of noise (default 5). Each adds detail at twice the frequency. */
    octaves?: number;
    /** Frequency step per octave (default 2). */
    lacunarity?: number;
    /** Amplitude step per octave, the roughness (default 0.5). */
    gain?: number;
}
export interface Noise {
    readonly seed: number;
    /** Simplex noise in 2D, about -1..1. */
    n2(x: number, y: number): number;
    /** Simplex noise in 3D, about -1..1 (a 2D field that changes over time: n3(x, y, t)). */
    n3(x: number, y: number, z: number): number;
    /** Fractal Brownian motion: octaves of 2D noise added up, normalised to about -1..1. */
    fbm2(x: number, y: number, o?: FbmOptions): number;
    /** Ridged noise: 1 − |noise| per octave, squared, so creases become sharp crests; 0..1. */
    ridged2(x: number, y: number, o?: FbmOptions): number;
}
export declare function createNoise(seed?: number): Noise;
