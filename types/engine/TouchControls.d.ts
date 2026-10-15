import type { Input } from './input';
/** Corner of the screen a placed touch button is measured from (inside the safe area). */
export type TouchCorner = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export interface TouchButton {
    label: string;
    /** Key code this button presses (e.g. 'Space'). */
    code: string;
    /** Short hint shown under the label. */
    hint?: string;
    /**
     * Place the button yourself instead of in the default grid: its centre, in CSS pixels from
     * `corner` (default bottom-right; `x` grows inward from the side, `y` inward from the top or
     * bottom edge), and its diameter (`size`, default 58). An action game's cluster (a big
     * attack button with skills on an arc around it) is a list of these.
     */
    at?: {
        x: number;
        y: number;
        size?: number;
        corner?: TouchCorner;
    };
}
/**
 * What a button shows right now (`TouchControls.set`): a game drives its buttons from its own
 * state each frame (skill icons, cooldowns, costs, a contextual action). Only what changed
 * touches the DOM.
 */
export interface TouchButtonState {
    label?: string;
    hint?: string;
    /** A picture instead of the label (a canvas or image; drawn pixelated); null removes it. */
    icon?: HTMLCanvasElement | HTMLImageElement | null;
    /** Cooldown shutter, 0..1 of the button covered (0 = ready). */
    cooldown?: number;
    /** Text over the shutter (seconds left). */
    timer?: string;
    /** A small corner badge (a cost, a count). */
    badge?: string;
    /** Dimmed (can't be used now); it still presses its key. */
    disabled?: boolean;
    /** Not shown (its place is kept), and its key is released. */
    hidden?: boolean;
}
/** Default buttons for PlatformerCharacter (see character/controls.ts KEYMAP). */
export declare const DEFAULT_TOUCH_BUTTONS: readonly TouchButton[];
/**
 * On-screen controls for phones and tablets: a virtual joystick (bottom-left) that feeds
 * `input.analog`, action buttons (bottom-right, in a grid or placed one by one with `at`)
 * that press key codes, and a small top bar (debug panel, Pixel/Raw, resolution, looks).
 * Camera: drag on the game to orbit/look, pinch to zoom (handled by Input.attachPointer).
 * Shown automatically on coarse pointers, or with `?touch=1`.
 *
 * A game drives it at runtime: `set(code, state)` (icon, cooldown, badge, disabled, hidden),
 * `show(false)` while a menu owns the screen, and `rects()` to lay its HUD out around the
 * controls.
 */
export declare class TouchControls {
    private readonly input;
    readonly root: HTMLDivElement;
    private readonly views;
    private readonly stick;
    private readonly bar;
    private shownAll;
    private releaseStick;
    constructor(container: HTMLElement, input: Input, buttons?: readonly TouchButton[], topBar?: readonly TouchButton[]);
    static wanted(search?: string): boolean;
    /** Update every button that presses `code` (see TouchButtonState). */
    set(code: string, state: TouchButtonState): void;
    /**
     * Show or hide the joystick and the action buttons (the top bar stays): hide them while a
     * menu or a full-screen view owns the screen. Hiding releases every held key and the stick.
     */
    show(on: boolean): void;
    get visible(): boolean;
    /**
     * Client rects (CSS pixels) of the controls on screen now: the joystick and every button,
     * with the key code it presses. A hidden button keeps its place (`hidden` says it isn't
     * drawn), so a HUD laid out around them doesn't move when a contextual button comes and goes.
     * Nothing but the bar while `show(false)`.
     */
    rects(): {
        stick: DOMRect | null;
        buttons: {
            code: string;
            label: string;
            hidden: boolean;
            rect: DOMRect;
        }[];
        bar: DOMRect | null;
    };
    private makeButton;
    private apply;
    private release;
    private bindButton;
    private bindStick;
}
