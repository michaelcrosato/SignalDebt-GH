/**
 * Standard-mapping gamepad buttons → the key codes they press (see character/controls.ts
 * KEYMAP). Change `input.gamepadButtons` to remap. Indices follow the W3C "standard" layout:
 * 0 A · 1 B · 2 X · 3 Y · 4 LB · 5 RB · 6 LT · 7 RT · 8 Back · 9 Start · 12–15 d-pad.
 */
export declare const GAMEPAD_BUTTONS: Readonly<Record<number, string>>;
/** The parts of the Gamepad API that Input reads (tests can pass plain objects). */
export interface GamepadLike {
    readonly connected?: boolean;
    readonly mapping?: string;
    readonly axes: readonly number[];
    readonly buttons: readonly {
        readonly pressed: boolean;
        readonly value?: number;
    }[];
}
/**
 * Radial deadzone with rescaling: inside `deadzone` reads 0, the rim reads 1, and the
 * direction is kept (no square-gate snapping to the axes).
 */
export declare function applyDeadzone(x: number, y: number, deadzone?: number): {
    x: number;
    y: number;
};
/** How long a queued press stays consumable, in seconds of game time. */
export declare const PRESS_WINDOW = 0.15;
/**
 * What the game could read from input in one frame (a recorded frame, see src/engine/replay.ts).
 * Optional fields are left out when empty or zero; `held` and `pointer` also when unchanged
 * from the frame before.
 */
export interface InputFrame {
    /** Real seconds this frame lasted (game time follows from it). */
    dt: number;
    /** Keys held, keyboard and gamepad buttons together, sorted. */
    held?: string[];
    /** Keys pressed since the frame before (a tap can be pressed and not held). */
    pressed?: string[];
    /** The touch joystick and the gamepad's left stick (after its deadzone). */
    analog?: [number, number];
    pad?: [number, number];
    /** Pointer movement (CSS pixels) and wheel ticks this frame. */
    delta?: [number, number];
    wheel?: number;
    /** Pointer position (normalised device coordinates), over the canvas (1/0), buttons (`mouseButtons`: what `held` says). */
    pointer?: [number, number, number, number];
    /** Whether a gamepad is connected (`gamepadConnected`), when that changes. */
    gamepad?: boolean;
    /** Whether the pointer is a touch (`pointer.touch`), when that changes. */
    touch?: boolean;
    /** Pointer buttons pressed (1) and let go (0) this frame, in order, each where the pointer was (`buttonEvents`). */
    clicks?: [string, 0 | 1, number, number][];
    /** Data from outside the canvas delivered this frame (`send()`): a DOM widget's value, a save read from storage. */
    commands?: unknown[];
    /**
     * Ran in the same task as the frame before (frames of one `step(n)` call): no promise
     * callbacks ran between them. A replay waits for them before every other frame.
     */
    sync?: true;
}
/** What input a later frame still reads, as data (`engine.snapshot()`): keys held, presses not yet used and how old they are, the pointer. */
export interface InputState {
    readonly held: readonly string[];
    /** Queued presses: [key, seconds of game time since it was pressed]. */
    readonly queued: readonly (readonly [string, number])[];
    readonly pointer: readonly [number, number, number, number];
    readonly gamepad: boolean;
    /** Data sent (`send`) and not yet delivered: the next frame that runs delivers it. */
    readonly outbox: readonly unknown[];
}
/** What the frame before held, for `snapshot()` to leave out what did not change. */
export interface SnapshotMemory {
    held: string;
    pointer: string;
    gamepad?: boolean;
    touch?: boolean;
}
/**
 * Mouse buttons as key codes (`isDown('MouseLeft')`, `consumePress('MouseRight')`), each with
 * its `PointerEvent.buttons` bit, by `PointerEvent.button` (0 left, 1 middle, 2 right).
 */
export declare const MOUSE_BUTTONS: readonly (readonly [code: string, bit: number])[];
/** A finger on the canvas, as a key: held while one is down (not a mouse button, so a tap is not a click). */
export declare const TOUCH_KEY = "Touch";
/** A pointer button pressed or let go (`Input.buttonEvents`): its key, and where the pointer was (normalised device coordinates). */
export interface ButtonEvent {
    readonly code: string;
    readonly down: boolean;
    readonly x: number;
    readonly y: number;
}
/**
 * Keyboard + pointer + gamepad input.
 * - Keys: held state, per-frame presses (`wasPressed`) and queued presses for fixed-step
 *   code (`consumePress`). Queued presses expire after `pressWindow` s of game time.
 * - Gamepads (standard mapping): the left stick feeds `moveAxis()` (radial deadzone), the
 *   right stick feeds the pointer delta (camera look), buttons press key codes
 *   (`gamepadButtons`). Polled once per frame by the engine (`beginFrame`).
 * - Pointer: accumulated movement per frame (while a button is held or the pointer is
 *   locked), wheel delta per frame, optional pointer lock (first-person). Mouse buttons on
 *   the canvas are keys too (`MOUSE_BUTTONS`: `MouseLeft`, `MouseRight`, `MouseMiddle`), and a
 *   finger is `Touch` (`TOUCH_KEY`), held and pressed like any other, so a click shorter than
 *   a frame is not lost.
 * - Commands (`send`): data from outside the canvas, delivered to the game at the next frame
 *   and recorded with it.
 * - `dispose()` removes every listener it added.
 */
export declare class Input {
    private readonly target;
    private readonly held;
    private readonly pressed;
    /** Queued presses → the game time they happened at. */
    private readonly queued;
    /** Keys held through gamepad buttons (merged into isDown). */
    private readonly padHeld;
    private readonly listeners;
    /** Pointer movement this frame, in CSS pixels (drag or pointer lock). */
    readonly mouseDelta: {
        x: number;
        y: number;
    };
    /**
     * Where the pointer last was over the canvas, in normalised device coordinates (−1..1, y up:
     * `camera.rayAt(pointer.x, pointer.y, …)` turns it into a ray), and whether it is over it now.
     * Under pointer lock it is the screen's centre (the crosshair).
     */
    readonly pointer: {
        x: number;
        y: number;
        over: boolean;
        touch: boolean;
    };
    /** Wheel ticks this frame (+1 = scroll down / zoom out). */
    wheel: number;
    /** This frame's button presses and releases, in order (`buttonEvents`). */
    private _buttonEvents;
    /** Commands sent since the last frame began, and this frame's (`send`, `commands`). */
    private outbox;
    private _commands;
    private lockTarget;
    /** When true, clicking the canvas requests pointer lock (first-person / free camera). */
    wantsPointerLock: boolean;
    /** Touch joystick, -1..1 per axis; overrides keys when active. */
    readonly analog: {
        x: number;
        y: number;
    };
    /** Gamepad left stick after the deadzone, -1..1 (y = forward). */
    readonly padAxis: {
        x: number;
        y: number;
    };
    /** True while any gamepad is connected. */
    gamepadConnected: boolean;
    /**
     * Extra key codes whose browser default is blocked (arrows and Space always are): a game's
     * own F1 / F2 / Tab panels, so the browser's help page or focus change doesn't fire.
     */
    readonly preventKeys: Set<string>;
    /** Gamepad button index → key code (defaults: GAMEPAD_BUTTONS). */
    gamepadButtons: Record<number, string>;
    /** Stick deadzone (radial, 0..1). */
    gamepadDeadzone: number;
    /** Right stick look speed: pointer pixels per second at full tilt. */
    gamepadLookSpeed: number;
    /** Game time (s) of the current frame; set by the engine through `beginFrame`. */
    now: number;
    /**
     * True while a replay drives input (`engine.replay()`): keyboard, pointer and wheel events,
     * `setKey` / `setPointer` / `setButtons` / `addPointer` (touch buttons, scripts) and `send`
     * are ignored, and `playBefore` / `playAfter` set everything.
     */
    get playing(): boolean;
    set playing(on: boolean);
    private _playing;
    private playedPad;
    /** Queued presses older than this many seconds of game time are dropped. */
    pressWindow: number;
    constructor(target?: Window);
    /**
     * Listen for pointer input on the game canvas. Only pointers that went down on the
     * canvas drive the camera (so a touch joystick doesn't orbit it). Two canvas touches
     * pinch to zoom (emitted as wheel ticks).
     */
    attachPointer(el: HTMLElement): void;
    /** Remove every listener this Input added (window and canvas). */
    dispose(): void;
    /** Let go of everything held (keys, gamepad buttons, sticks, pointer buttons); queued presses stay. */
    release(): void;
    /** Forget held keys, presses, sticks and pointer movement (e.g. when a level loads). */
    reset(): void;
    /**
     * Engine: begin a frame at game time `now` (seconds). Polls gamepads and drops expired
     * queued presses. `pads` defaults to `navigator.getGamepads()`; tests can pass fakes.
     */
    beginFrame(now: number, dt: number, pads?: readonly (GamepadLike | null)[]): void;
    get pointerLocked(): boolean;
    isDown(...codes: string[]): boolean;
    /** `isDown` for a list of codes, without building a rest-argument array (fixed-step code). */
    anyDown(codes: readonly string[]): boolean;
    /** True once per physical key press (valid for the current render frame). */
    wasPressed(...codes: string[]): boolean;
    /**
     * True once per physical key press, kept until consumed or until it is older than
     * `pressWindow` (150 ms of game time). Use from fixed-step code (which may run zero or
     * several times per frame) so no press is dropped, while a stale press (made during a
     * pause, a loading screen or a long hitch) never fires late.
     */
    consumePress(...codes: string[]): boolean;
    /** `consumePress` for a list of codes, without building a rest-argument array. */
    consumeAny(codes: readonly string[]): boolean;
    /** Held keys, queued presses and the pointer as data (`engine.snapshot()`), between frames. */
    state(): InputState;
    /** Back to `state()` at game time `now` (a restore): held keys are those the snapshot held, live ones let go. */
    setState(s: InputState, now: number): void;
    /** Presses waiting to be consumed (tooling / tests). */
    get queuedPresses(): string[];
    /** Drop queued presses (e.g. when a menu or mode swallows input). */
    clearQueued(...codes: string[]): void;
    /**
     * -1..1 on each axis (x = right, y = forward): the touch joystick or a gamepad's left
     * stick (whichever is tilted further), else WASD / arrow keys / d-pad.
     */
    moveAxis(): {
        x: number;
        y: number;
    };
    /** Call at the end of each rendered frame. */
    endFrame(): void;
    /** Test hook: simulate a key being held (true) or released (false). */
    setKey(code: string, down: boolean): void;
    /** Test hook: put the pointer at (x, y) in normalised device coordinates, pressed or not. */
    setPointer(x: number, y: number, down?: boolean): void;
    /** Test hook: hold mouse buttons (`PointerEvent.buttons` bits: 1 left, 2 right, 4 middle) as the canvas would. */
    setButtons(bits: number): void;
    /** Buttons held, as `PointerEvent.buttons` bits (1 left, 2 right, 4 middle; a finger is left): the same keys as `isDown('MouseLeft')`. */
    get mouseButtons(): number;
    /** A pointer button (a key code) goes down (pressed, unless held already) or up, where the pointer is. */
    private button;
    /**
     * This frame's pointer button presses and releases, in order, each with where the pointer
     * was: a drag shorter than a frame (a script's) still starts where it started and ends where
     * it ended. Recorded with the frame. UI that acts on clicks reads these; play reads `isDown`.
     */
    get buttonEvents(): readonly ButtonEvent[];
    /**
     * Hand the game data from outside the canvas: a DOM widget's value, a file the player picked,
     * a save read from storage, anything a game would otherwise take straight from the page. It
     * arrives in `commands` at the next frame the game runs, and the recording keeps it there, so
     * a replay delivers the same data at the same frame (and ignores what is sent live). It goes
     * through JSON first: live play reads exactly what a replay will.
     */
    send(command: unknown): void;
    /**
     * This frame's commands (`send`), oldest first; empty on most frames. They last one rendered
     * frame: read them in `update` (`fixedUpdate` runs zero or more times a frame).
     */
    get commands(): readonly unknown[];
    /** Engine: a live frame begins to run: what was sent since the last one becomes its `commands`. */
    deliver(): void;
    /** Test hook: inject pointer movement / wheel for the next frame. */
    addPointer(dx: number, dy: number, wheel?: number): void;
    /**
     * This frame's input as data (after `beginFrame`), for a recording. `last` is the frame
     * before: unchanged held keys, pointer and gamepad connection are left out.
     */
    snapshot(dt: number, last?: SnapshotMemory): InputFrame;
    /**
     * Replay, before the engine's `beginFrame`: the frame's held keys and presses (presses queue
     * at the time they would have arrived, the frame before's game time).
     */
    playBefore(f: InputFrame): void;
    /** Replay, after `beginFrame` (which polled no gamepads): sticks, pointer, wheel, gamepad connection. */
    playAfter(f: InputFrame): void;
    private press;
    private pollGamepads;
}
