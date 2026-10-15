/**
 * Retro sound synthesis as pure functions (no Web Audio): a sound is data (`SoundDef`)
 * rendered to samples once, then played as a buffer. Deterministic (seeded noise), so
 * sounds are unit-testable and identical on every machine.
 */
export type Wave = 'square' | 'triangle' | 'saw' | 'sine' | 'noise';
export interface SoundDef {
    wave: Wave;
    /** Start pitch in Hz. For `noise` it is the sample-and-hold rate (higher = hissier). */
    freq: number;
    /** End pitch for a sweep (exponential glide from `freq`). */
    freqEnd?: number;
    /** Seconds the sweep takes (default: the whole sound). */
    sweepTime?: number;
    /** Square duty cycle: 0.125, 0.25 or 0.5 are the classic NES widths. Default 0.5. */
    duty?: number;
    /** Envelope (seconds): ramp up, hold at full volume, then fade out. */
    attack?: number;
    sustain?: number;
    decay?: number;
    /** Peak level 0..1 (default 0.5). */
    volume?: number;
    /** Arpeggio: semitone offsets stepped every `arpRate` seconds (the coin "ba-ding"). */
    arp?: readonly number[];
    arpRate?: number;
    /** Vibrato depth in semitones and rate in Hz. */
    vibrato?: {
        depth: number;
        rate: number;
    };
    /** Quantize to this many levels (4-bit style crunch). 0 = off. */
    crush?: number;
    /** Seconds of silence before the sound starts (for layers). */
    delay?: number;
    /** Extra sounds mixed in (e.g. a noise burst under a thump). */
    layers?: readonly SoundDef[];
}
/** Seconds a sound lasts, including delays and layers. */
export declare function soundDuration(def: SoundDef): number;
/** Envelope gain 0..1 at time `t` (seconds since the sound's own start). */
export declare function envelope(def: SoundDef, t: number): number;
/** Instantaneous frequency (Hz) at time `t`: sweep, arpeggio and vibrato applied. */
export declare function frequencyAt(def: SoundDef, t: number): number;
/** Small deterministic PRNG (mulberry32). */
export declare function rng(seed?: number): () => number;
/** Render a sound to mono samples in -1..1. */
export declare function renderSound(def: SoundDef, sampleRate?: number, seed?: number): Float32Array<ArrayBuffer>;
/** 'A4' → 440, 'C#5', 'Eb3'… Returns null for anything that is not a note. */
export declare function noteFrequency(note: string): number | null;
