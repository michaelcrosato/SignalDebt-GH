import { type Song } from './music';
import { type SoundDef } from './synth';
export type VolumeChannel = 'master' | 'sfx' | 'music';
export interface AudioSettings {
    master: number;
    sfx: number;
    music: number;
    muted: boolean;
}
export interface PlayOptions {
    /** 0..1 multiplier on the sound's own volume. */
    volume?: number;
    /** Pitch shift in semitones (playback rate), e.g. a rising combo. */
    pitch?: number;
    /** Stereo position -1 (left) .. 1 (right). */
    pan?: number;
}
export interface VoiceSettings {
    /** 0..1 (default 1). */
    volume?: number;
    /** Stereo position -1 (left) .. 1 (right). */
    pan?: number;
    /** 0 (clear) .. 1 (behind a thick wall, under water): a low-pass filter closing down. */
    muffle?: number;
    /** Pitch shift in semitones. */
    pitch?: number;
}
/** A looping sound steered while it plays (`AudioManager.loop`): a hum, a fire, a waterfall. */
export interface Voice {
    readonly name: string;
    /** The values last set (kept headless too, so games and tests can read them). */
    readonly settings: Readonly<Required<VoiceSettings>>;
    /** Really sounding: Web Audio running and the loop started. */
    readonly sounding: boolean;
    readonly stopped: boolean;
    /** Change any of its settings; they glide over a few hundredths of a second (no clicks). */
    set(s: VoiceSettings): void;
    stop(): void;
}
/** Low-pass cutoff (Hz) for a muffle of 0..1: wide open to a dull thud. */
export declare const muffleCutoff: (muffle: number) => number;
/**
 * Web Audio for games: procedural retro sound effects (`SFX`, data), a small chiptune
 * sequencer (`Song`, data), optional audio files, and master / sfx / music volume + mute
 * persisted in localStorage. Available as `ctx.audio`.
 *
 * Browsers only allow sound after a user gesture, so the AudioContext is created on the
 * first key / pointer / touch input. Before that, and wherever Web Audio does not exist
 * (headless tests, old browsers), every call is a silent no-op that still records what
 * was played in `log`, so games behave identically and tests can assert on sounds.
 */
export declare class AudioManager {
    /** Sound registry: the built-in SFX plus anything registered or loaded. */
    readonly sounds: Map<string, SoundDef>;
    /** The most recent plays (name and game-independent wall time), newest last; tooling/tests. */
    readonly log: {
        name: string;
        at: number;
    }[];
    /** How many times each sound was requested. */
    readonly counts: Record<string, number>;
    context: AudioContext | null;
    private master;
    private buses;
    private readonly settings;
    private readonly buffers;
    private readonly files;
    private readonly pendingFiles;
    private unlockListeners;
    private readonly lifetime;
    private song;
    private songName;
    private readonly musicSources;
    private readonly voices;
    /** Files being fetched or decoded (a loop waiting for one is not missing its sound). */
    private readonly loading;
    private disposed;
    constructor(target?: EventTarget | null);
    /** Web Audio exists in this environment. */
    static get supported(): boolean;
    /** True once the AudioContext is running (after the first user input). */
    get unlocked(): boolean;
    /** Current volumes and mute (persisted). */
    get volume(): Readonly<AudioSettings>;
    get muted(): boolean;
    /** Name of the playing song ('' when none). */
    get playing(): string;
    /**
     * Create / resume the AudioContext. Called automatically on the first user input; call
     * it yourself from a click handler if you start sound from your own UI.
     */
    unlock(): void;
    private target;
    /** Listen for the next user input (until the context is running). */
    private armUnlock;
    private disarmUnlock;
    /** Resume a suspended / interrupted context; stop listening for input once it runs. */
    private resume;
    /** Add or replace a sound effect (data, see SoundDef). */
    register(name: string, def: SoundDef): void;
    /**
     * Play a sound effect by name (built-in SFX, `register`ed or `load`ed) or directly from a
     * SoundDef. Returns false when nothing could be heard (locked, muted, no Web Audio).
     */
    play(sound: string | SoundDef, options?: PlayOptions): boolean;
    /**
     * Start a sound looping, as a voice you steer while it plays (volume, pan, muffle, pitch:
     * with `spatialize` it sits at a place in the world). Before the first user input, or with
     * no Web Audio, the voice keeps its settings silently and starts once audio unlocks.
     * Stop it when you are done (a level's `dispose`).
     */
    loop(sound: string | SoundDef, settings?: VoiceSettings): Voice;
    /** Voices playing or waiting to (tooling and tests). */
    get loops(): readonly Voice[];
    /** Stop every looping voice (the engine does this when a level unloads). */
    stopLoops(): void;
    /**
     * Load an audio file (wav/ogg/mp3…) under `name`; `play(name)` then plays it. Works
     * before the first user input too: the file is decoded once audio unlocks.
     */
    load(name: string, url: string): Promise<void>;
    /** Start a song (looping by default), replacing the current one. `null` stops music. */
    playMusic(song: Song | null, name?: string): void;
    stopMusic(): void;
    /**
     * Volume changes are written to storage. The engine turns this off while a replay plays: the
     * recording sets the volumes it set, nothing is written, and the player's come back after.
     */
    persist: boolean;
    setVolume(channel: VolumeChannel, value: number): void;
    setMuted(muted: boolean): void;
    toggleMute(): boolean;
    /** The default volumes, sound on (the settings panel's Reset). */
    resetVolumes(): void;
    /** Engine: once per rendered frame. Schedules the next notes of the song. */
    update(): void;
    /** Stop everything and close the AudioContext. */
    dispose(): void;
    private start;
    private bufferFor;
    private toBuffer;
    private decode;
    private applyVolumes;
}
