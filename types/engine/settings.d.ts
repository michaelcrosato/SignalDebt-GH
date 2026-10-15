import { type Resolution } from './framing';
import type { QualityOption } from './quality';
import { type Look } from './render/look';
import type { RenderMode } from './render/PixelRenderer';
/**
 * The player's settings: the standard picture and engine options every game gets, as plain data
 * (sound is the AudioManager's, which keeps its own volumes). A field left out is the game's own
 * choice; a field set is the player's and wins over it. `engine.settings` holds them, applies
 * them, saves them per game and shows them in the settings panel (the ⚙ button).
 */
export interface PlayerSettings {
    /** A LOOK_PRESETS name. Left out: the look the game gives each level. */
    look?: string;
    /** Pixel art (the pixel pass), or false for smooth 3D (render mode `raw`). */
    pixelArt?: boolean;
    /** The art resolution: `fine` (the game's, 480×270 by default) or `chunky` (two thirds of it: bigger pixels). */
    pixelSize?: 'fine' | 'chunky';
    /** Shadow and light quality: a level, or `auto` (the device's). */
    quality?: QualityOption;
    /** Frame cap: 60, 30, or 0 for the display's own rate. */
    fps?: number;
    /** The debug panel: frame rate, camera, GPU errors and the game's status. */
    debugInfo?: boolean;
}
export declare const PIXEL_SIZES: readonly ["fine", "chunky"];
export declare const QUALITY_OPTIONS: readonly QualityOption[];
export declare const FPS_OPTIONS: readonly number[];
/** Keep only fields with a valid value: what storage or a caller handed over may be anything. */
export declare function normalizeSettings(raw: unknown): PlayerSettings;
/** The settings saved under `key` ({} when there are none, or storage is blocked or holds junk). */
export declare function loadSettings(key: string): PlayerSettings;
export declare function storeSettings(key: string, settings: PlayerSettings): void;
/** The engine options a page URL's review flags set (what `optionsFromUrl` gives). */
export type UrlFlags = {
    look?: unknown;
    filters?: unknown;
    mode?: unknown;
    resolution?: unknown;
    quality?: unknown;
    maxFps?: unknown;
    debugUI?: unknown;
};
/**
 * The settings a page URL's review flags set (`?look=`, `?filters=`, `?mode=`, `?res=`,
 * `?quality=`, `?fps=`, `?debug=`): the fields `url` (optionsFromUrl) holds that the game's
 * `options` took (`withUrlOptions`). They win over the saved ones at start.
 */
export declare function urlSettings(url: UrlFlags, options?: UrlFlags): Set<keyof PlayerSettings>;
/** Chunky pixels for a resolution: the engine's 320×180 for its 480×270, else two thirds of it. */
export declare function chunkyResolution(base: Resolution): Resolution;
/** What the settings change in the engine (Engine implements it; tests pass a fake). */
export interface SettingsHost {
    readonly look: Look;
    setLook(look: Look): void;
    readonly renderer: {
        readonly mode: RenderMode;
        readonly baseResolution: Resolution;
        readonly lookVersion: number;
        setMode(mode: RenderMode): void;
        setResolution(resolution: Resolution): void;
    };
    maxFps: number;
    readonly qualityOption: QualityOption;
    useQuality(option: QualityOption): void;
    readonly debugShown: boolean;
    showDebug(on: boolean): void;
}
/**
 * `engine.settings`: the player's settings, applied to the engine and saved. A field the page URL
 * sets (`?look=`, `?mode=`, `?res=`, `?quality=`, `?fps=`, `?debug=`: review flags) wins over a
 * saved one at start (which stays saved). `open`, `close` and `toggle` show and hide the
 * settings panel.
 */
export declare class Settings {
    private readonly host;
    readonly key: string | null;
    /** The player's choices: the saved ones from the start, and a game's `set()` before it. */
    private current;
    /** Saved choices a review flag in the URL overrides: not applied, still saved. */
    private held;
    private game;
    private readonly listeners;
    private shown;
    /** `host.renderer.lookVersion` once the settings last set the look: unchanged, nothing else did since. */
    private lookShown;
    /** `key`: where they are saved (`pixel-engine:settings:<key>`), or null for nowhere. */
    constructor(host: SettingsHost, key: string | null);
    /** The player's choices in effect: fields left out are the game's (or a review flag's). */
    get values(): Readonly<PlayerSettings>;
    get isOpen(): boolean;
    /** Change some settings: applied at once and saved. A field set to `undefined` goes back to the game's. */
    set(patch: PlayerSettings): void;
    /** Forget every choice, the held ones too: the game's own picture again. */
    reset(): void;
    /** Make `values` the settings, changing only the fields that differ: the ones it leaves out go back to the game's. */
    replace(values: PlayerSettings): void;
    /** Called with the values after every change; returns the unsubscribe. */
    onChange(fn: (values: Readonly<PlayerSettings>) => void): () => void;
    open(): void;
    close(): void;
    toggle(): void;
    private save;
    /** Put each field of `s` into the engine; `fields` also lists cleared ones (back to the game's). */
    private apply;
}
