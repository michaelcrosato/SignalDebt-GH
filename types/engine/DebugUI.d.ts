import type { Engine } from './Engine';
/**
 * DOM overlay (not rendered through the pixel pipeline, so it stays legible).
 * Shows backend, render mode, resolution/scale, camera preset + zoom, FPS, GPU errors,
 * game status; lets you pick filters and swap the camera preset (player stays put).
 *
 * Cheap per frame: the engine only calls `update` while the panel is visible, and it
 * only touches the DOM for values that changed (text is compared against a JS-side
 * cache, the filter checkboxes and selects re-sync only when the stack or preset changes).
 */
export declare class DebugUI {
    private readonly engine;
    readonly root: HTMLDivElement;
    private readonly fields;
    private readonly text;
    private readonly camSelect;
    private readonly lookSelect;
    private readonly boxes;
    private syncedLook;
    private syncedRig;
    private syncedFixed;
    private syncedZoom;
    private syncedKeys;
    visible: boolean;
    constructor(engine: Engine);
    toggle(): void;
    /** Refresh the panel. The engine calls this only while the panel is visible. */
    update(gameStatus: string): void;
    private set;
}
