/**
 * Built-in particle effects, as data (see ParticlePreset). Register more with
 * `ctx.particles.register(name, preset)`. Sizes are art pixels; colors are PALETTE names.
 */
export declare const PARTICLES: {
    /** Landing puff: a flat ring of dust around the feet. */
    dust: {
        count: [number, number];
        life: [number, number];
        speed: [number, number];
        spread: number;
        flatten: number;
        gravity: number;
        drag: number;
        size: [number, number];
        colors: ("white" | "mist" | "slate")[];
        radius: number;
    };
    /** Skid puffs: a few small clouds kicked back (pass `direction`). */
    skid: {
        count: [number, number];
        life: [number, number];
        speed: [number, number];
        spread: number;
        flatten: number;
        gravity: number;
        drag: number;
        size: [number, number];
        colors: ("mist" | "slate")[];
        radius: number;
    };
    /** Coin pickup: a burst of bright twinkles that float away. */
    sparkle: {
        count: [number, number];
        life: [number, number];
        speed: [number, number];
        spread: number;
        gravity: number;
        drag: number;
        size: [number, number];
        colors: ("sand" | "cyan" | "white")[];
        radius: number;
    };
    /** Slow rising smoke. */
    smoke: {
        count: [number, number];
        life: [number, number];
        speed: [number, number];
        spread: number;
        gravity: number;
        drag: number;
        size: [number, number];
        colors: ("mist" | "slate" | "night")[];
        radius: number;
    };
    /** Ground-pound impact: a wide, fast, hot shockwave of debris. */
    impact: {
        count: [number, number];
        life: [number, number];
        speed: [number, number];
        spread: number;
        flatten: number;
        gravity: number;
        drag: number;
        size: [number, number];
        colors: ("plum" | "orange" | "sand" | "white")[];
        radius: number;
    };
};
export type ParticlePresetName = keyof typeof PARTICLES;
