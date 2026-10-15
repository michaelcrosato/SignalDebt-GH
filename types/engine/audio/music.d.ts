import { type SoundDef } from './synth';
/** A track's instrument: a SoundDef without pitch or length (each note sets those). */
export type Instrument = Omit<SoundDef, 'freq' | 'freqEnd' | 'sustain' | 'delay'>;
/**
 * A chiptune song as data. Each pattern holds one string per track: space-separated steps,
 * where a step is a note ('C4', 'F#5', 'Bb2'), '.' (rest) or '-' (hold the previous note).
 * Every track of a pattern must have the same number of steps. For `noise` tracks the
 * note's pitch is the noise rate: C6 is a snare-ish hiss, C8 a hi-hat tick.
 */
export interface Song {
    bpm: number;
    /** Steps per beat (4 = sixteenth notes). Default 4. */
    stepsPerBeat?: number;
    tracks: Record<string, Instrument>;
    patterns: Record<string, Record<string, string>>;
    /** Pattern names in play order. */
    order: readonly string[];
    /** Loop forever (default true). */
    loop?: boolean;
}
export interface SongNote {
    track: string;
    /** Step index from the start of the song. */
    step: number;
    /** Length in steps (1 + following holds). */
    steps: number;
    freq: number;
}
export interface ParsedSong {
    /** Seconds per step. */
    stepTime: number;
    /** Total steps in one pass of `order`. */
    length: number;
    notes: SongNote[];
}
/** Flatten a song into timed notes. Throws on malformed patterns, so tests catch typos. */
export declare function parseSong(song: Song): ParsedSong;
/** The playable SoundDef for one note of a track. */
export declare function noteSound(instrument: Instrument, freq: number, seconds: number): SoundDef;
/** The playground's short looping track: C major, bouncy, 2 × 16 steps. */
export declare const PLAYGROUND_SONG: Song;
