/**
 * Minimal pixel-styled loading indicator: a blocky segmented bar and a status word,
 * plain DOM (it shows before the renderer exists). Reuses a `.pixel-loading` element
 * already in the container (index.html ships one so it appears before any JS runs).
 */
export declare class LoadingScreen {
    readonly root: HTMLElement;
    private readonly cells;
    private readonly label;
    private lit;
    constructor(container: HTMLElement, segments?: number);
    /** `progress` 0..1; `label` is shown in capitals. */
    set(progress: number, label?: string): void;
    done(): void;
}
