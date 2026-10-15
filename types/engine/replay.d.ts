/**
 * Recordings of play (docs/DOCTRINE.md, principle 1). From a level's start, its seed and the
 * input of every frame decide everything that happens in it, so a recording is just those: the
 * engine keeps one for the level that is running (`engine.recording()`), `engine.replay()` plays
 * one back frame for frame, and `engine.fingerprint()` hashes the state, so two runs that
 * should match can be compared. A recorded bug is a file; replayed, it is a test.
 *
 *   const rec = engine.recording();                          // JSON: seed, game, frames
 *   await engine.replay(rec, () => engine.loadGame(new MyGame()));
 *   engine.fingerprint() === fingerprintAtTheEnd;            // the same game, frame for frame
 *
 * What a replay can't reproduce: anything a game takes from outside `ctx.input` and its frames
 * (DOM events it listens to itself, a model that finishes loading mid-play, the wall clock, a
 * camera left turned by the level before). Data a game must take from the page (a save in
 * storage, a text field) goes through `ctx.input.send()`, which the recording keeps.
 * docs/ENGINE.md, "Recording and replay".
 */
import type { InputFrame } from './input';
import { type Snapshot } from './snapshot';
export type { InputFrame } from './input';
export interface Recording {
    readonly format: 1;
    /** The engine version that recorded it (a different one may not replay the same). */
    readonly engine: string;
    /** The game's name when it was recorded. */
    readonly game: string;
    /** The engine seed (`ctx.random` comes from it and the game's name). */
    readonly seed: number;
    /** Game time when the level began (`ctx.time` carries on across levels). */
    readonly time: number;
    /** Every frame the level ran, from its first. */
    readonly frames: readonly InputFrame[];
    /** True when the level ran longer than a recording keeps (the frames are its start). */
    readonly truncated?: boolean;
    /** The save-state the frames start from (`engine.restore()` began this recording), if any. */
    readonly from?: Snapshot;
}
/** Frames a recording keeps: an hour at 60 fps. */
export declare const MAX_FRAMES = 216000;
/** Is `v` a recording this engine can replay? Returns the problem, or null. */
export declare function recordingProblem(v: unknown): string | null;
