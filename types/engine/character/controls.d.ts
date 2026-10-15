import type { GameContext } from '../Engine';
import type { MoveInput, PlatformerCharacter } from './PlatformerCharacter';
/**
 * Default key map for PlatformerCharacter. Movement is camera-relative for every preset
 * (strafing in first person; left/right only on a side-scroller lane, except while
 * climbing or hanging). Call from Game.fixedUpdate.
 *
 *   WASD / arrows  move          Shift   walk / tiptoe
 *   Space          jump          C / Ctrl crouch (air: ground pound)
 *   Z              prone toggle  X        lie down / get up
 *   F (hold)       grab / pull   J        attack (punch, punch, kick; air: dive / kick)
 *   V              wave          B        sit
 */
export declare const KEYMAP: {
    readonly jump: readonly ["Space"];
    readonly walk: readonly ["ShiftLeft", "ShiftRight"];
    readonly crouch: readonly ["KeyC", "ControlLeft", "ControlRight"];
    readonly prone: readonly ["KeyZ"];
    readonly lie: readonly ["KeyX"];
    readonly grab: readonly ["KeyF"];
    readonly attack: readonly ["KeyJ"];
    readonly wave: readonly ["KeyV"];
    readonly sit: readonly ["KeyB"];
};
/**
 * Read the default key map into a MoveInput. Pass `out` (kept by the game) to reuse it and
 * its `move` vector every step instead of allocating a new one.
 */
export declare function readMoveInput(ctx: GameContext, character: PlatformerCharacter, out?: MoveInput): MoveInput;
