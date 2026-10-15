/**
 * Engine hotkeys (tooling / review), configurable through `EngineOptions.debugKeys`. They are
 * developer tools: on with the debug panel (the dev server, `?debug=1`), off in a shipped game,
 * whose players find the same options in its settings (`engine.settings`, the ⚙ button).
 */
export type DebugAction = 'mode' | 'resolution' | 'debug' | 'nextLook' | 'prevLook' | 'mute';
export type DebugKeyMap = Record<DebugAction, readonly string[]>;
/** The keys when they are on: P Pixel/Raw · R resolution · ` debug panel · ] / [ looks · M mute. */
export declare const DEFAULT_DEBUG_KEYS: DebugKeyMap;
/** Single hotkeys moved (a key code, a list of codes) or dropped (`null` / `[]`). */
export type DebugKeyChanges = Partial<Record<DebugAction, string | readonly string[] | null>>;
/**
 * `EngineOptions.debugKeys`. Left out, the hotkeys come with the debug panel: on in the dev
 * server and with `?debug=1`, off otherwise. `true` turns the defaults on always and `false` off
 * always. An object rebinds (a key code, a list of codes) or disables (`null` / `[]`) single
 * actions, and the keys still come with the debug panel.
 *
 *   debugKeys: { resolution: 'F2', mute: null }   // with the panel: R freed for the game, no mute key
 */
export type DebugKeysOption = DebugKeyChanges | boolean;
/** The key map an option gives: none for `false` or nothing, the defaults for `true`, the defaults with an object's changes. */
export declare function resolveDebugKeys(option?: DebugKeysOption): DebugKeyMap;
/** The hotkeys a game starts with: its `EngineOptions.debugKeys`, with the debug panel on or off. */
export declare function startingDebugKeys(option: DebugKeysOption | undefined, debugPanel: boolean): DebugKeyMap;
/**
 * Rebind the hotkeys that are on and leave the ones that are off off: what a game with its own
 * use for a key does at runtime (`engine.debugKeys = rebindDebugKeys(engine.debugKeys, {
 * resolution: 'F7' })`), so a shipped game, which has no hotkeys, gets none back.
 */
export declare function rebindDebugKeys(keys: DebugKeyMap, changes: DebugKeyChanges): DebugKeyMap;
/** What the hotkeys that are on do, as the debug panel lists them ('' when none are on). */
export declare function hotkeyHelp(keys: DebugKeyMap): string;
