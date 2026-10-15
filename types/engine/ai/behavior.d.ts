/**
 * Behaviour trees: an agent's decisions as a tree of small nodes, ticked every step. Each tick
 * a node answers success, failure or running (still at it). Selectors try their children in
 * priority order until one doesn't fail; sequences run theirs in order until one doesn't
 * succeed. Both are reactive: every tick starts again from the first child, so a higher
 * priority (flee!) takes over at once, and whatever was running below it is halted.
 *
 *   const tree = new BehaviorTree(
 *     selector('root',
 *       sequence('flee', condition('scared?', (b) => b.threat < 3), action('run away', fleeStep)),
 *       sequence('work', action('go to crystal', goTo), action('pick it up', pickUp)),
 *       action('wander', wander)),
 *     blackboard);
 *   tree.tick(dt);       // per step; tree.trace() for drawing it
 */
export type Status = 'success' | 'failure' | 'running';
export declare abstract class BtNode<B> {
    readonly name: string;
    readonly kind: string;
    /** Status at the last tick that reached this node. */
    status: Status | null;
    /** The tree's tick count when this node last ran. */
    visited: number;
    readonly children: BtNode<B>[];
    /** The tree it belongs to: a node keeps its own state, so it can be in one tree only. */
    tree: BehaviorTree<B> | null;
    constructor(name: string, kind: string);
    protected abstract tick(b: B, dt: number, tree: BehaviorTree<B>): Status;
    /** Tick this node (keeps `status` and `visited` for the trace). */
    run(b: B, dt: number, tree: BehaviorTree<B>): Status;
    /** Interrupted: forget any progress, and tell actions that were running to stop. */
    halt(b: B): void;
}
/** Children in priority order: the first that doesn't fail decides (success or running). */
export declare const selector: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>;
/** Children in order: fails at the first failure, runs while one runs, succeeds when all have. Reactive: from the top each tick. */
export declare const sequence: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>;
/** A sequence that resumes where it was (steps that must not be checked again once done). */
export declare const steps: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>;
/** All children at once (each until it finishes): 'all' succeeds when every one has and fails at a failure, 'one' succeeds as soon as one has. */
export declare const parallel: <B>(name: string, needed: "all" | "one", ...children: BtNode<B>[]) => BtNode<B>;
/** A test: success if true, failure if not. */
export declare const condition: <B>(name: string, test: (b: B) => boolean) => BtNode<B>;
/** Something done a step at a time: return 'running' until it is done. `onHalt` tidies up if it is interrupted. */
export declare const action: <B>(name: string, step: (b: B, dt: number) => Status, onHalt?: (b: B) => void) => BtNode<B>;
/** Running for `seconds`, then success (from zero again next time, or after a halt). */
export declare const wait: <B>(name: string, seconds: number) => BtNode<B>;
/** Success becomes failure and failure success. */
export declare const inverter: <B>(child: BtNode<B>, name?: string) => BtNode<B>;
/** Success whatever the child answered, once it has finished. */
export declare const succeeder: <B>(child: BtNode<B>, name?: string) => BtNode<B>;
/** The child `times` times over: running until it has succeeded that often; a failure fails. */
export declare const repeat: <B>(child: BtNode<B>, times: number, name?: string) => BtNode<B>;
/** After the child succeeds it fails, without running, for `seconds` of tree time (no spamming). */
export declare const cooldown: <B>(child: BtNode<B>, seconds: number, name?: string) => BtNode<B>;
export interface TraceRow {
    name: string;
    kind: string;
    depth: number;
    /** This tick's answer, or null if this tick never reached the node. */
    status: Status | null;
}
export declare class BehaviorTree<B> {
    readonly root: BtNode<B>;
    readonly blackboard: B;
    /** Ticks so far. */
    ticks: number;
    /** Seconds ticked so far (the sum of every dt). */
    time: number;
    status: Status | null;
    constructor(root: BtNode<B>, blackboard: B);
    tick(dt: number): Status;
    /** Stop everything (a cutscene, a stun): running actions are told to halt. */
    halt(): void;
    /** Every node depth-first with this tick's answer: for drawing the tree. */
    trace(): TraceRow[];
    /** The names down the branch that decided this tick, root first (the last child each node ran that didn't fail). */
    activePath(): string[];
}
/** The builders in one object, for `bt.selector(...)` without importing each. */
export declare const bt: {
    readonly selector: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>;
    readonly sequence: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>;
    readonly steps: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>;
    readonly parallel: <B>(name: string, needed: "all" | "one", ...children: BtNode<B>[]) => BtNode<B>;
    readonly condition: <B>(name: string, test: (b: B) => boolean) => BtNode<B>;
    readonly action: <B>(name: string, step: (b: B, dt: number) => Status, onHalt?: (b: B) => void) => BtNode<B>;
    readonly wait: <B>(name: string, seconds: number) => BtNode<B>;
    readonly inverter: <B>(child: BtNode<B>, name?: string) => BtNode<B>;
    readonly succeeder: <B>(child: BtNode<B>, name?: string) => BtNode<B>;
    readonly repeat: <B>(child: BtNode<B>, times: number, name?: string) => BtNode<B>;
    readonly cooldown: <B>(child: BtNode<B>, seconds: number, name?: string) => BtNode<B>;
};
