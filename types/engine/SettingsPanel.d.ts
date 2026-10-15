import type { Engine } from './Engine';
import type { TouchCorner } from './TouchControls';
/**
 * The settings panel (DOM, like the debug panel: it stays legible at any art resolution) and the
 * ⚙ button that opens it: the player's picture, sound and engine options (`engine.settings`,
 * settings.ts; the AudioManager's volumes). The engine pauses the game while it is open. Keys
 * pressed in it never reach the game; Escape or Done closes it.
 */
export declare class SettingsPanel {
    private readonly engine;
    readonly root: HTMLDivElement;
    readonly button: HTMLButtonElement | null;
    private idleTimer;
    private readonly controls;
    private readonly outputs;
    private readonly listeners;
    constructor(engine: Engine, container: HTMLElement, corner: TouchCorner | false);
    /**
     * Show the panel with the engine's current values. The panel takes the focus, not a control: a
     * game key pressed out of habit (D, Space) must not pick an option; Tab reaches the controls.
     */
    show(): void;
    hide(): void;
    /** Put the engine's current values into the controls, and into the debug panel (the loop fills it only while the game runs). */
    sync(): void;
    dispose(): void;
}
