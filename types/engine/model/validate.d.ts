import { type Bounds } from './compile';
import { type ModelOptions } from './expand';
import type { ModelDef } from './types';
/** Triangle budget by the model's largest dimension (style rules, §4.4). */
export declare function triangleBudget(largest: number): number;
export declare const MAX_MATERIALS = 8;
/** Second-smallest extent below which a part is a rod that vanishes at 480×270 (m). */
export declare const MIN_THICKNESS = 0.06;
export interface ModelMetrics {
    readonly tris: number;
    readonly draws: number;
    readonly materials: number;
    readonly parts: number;
    readonly bounds: Bounds;
    readonly seeded: boolean;
}
export interface ModelCheck {
    readonly id: string;
    readonly problems: readonly string[];
    readonly warnings: readonly string[];
    /** At the default params and seed (null when it can't be built). */
    readonly metrics: ModelMetrics | null;
}
export type CheckOptions = ModelOptions;
/** Texels per metre a model may set (`texel`). */
export declare const TEXEL_RANGE: readonly [2, 64];
/** One build's problems and warnings (and its metrics when it builds). */
export declare function validateModel(idOrDef: string | ModelDef, opts?: CheckOptions): ModelCheck;
/**
 * Every check over the model's range: the defaults, then each param at its min and at its max
 * (one at a time), each at seeds 1, 2 and 3 when the parts read the rng. Messages say which
 * build they came from unless every build agrees.
 */
export declare function checkModel(idOrDef: string | ModelDef, opts?: CheckOptions): ModelCheck;
