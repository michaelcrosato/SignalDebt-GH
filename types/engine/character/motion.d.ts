/** Signed smallest angle from b to a (radians, −π..π). */
export declare function angleDiff(a: number, b: number): number;
/** Turn the angle `from` toward `to` by at most `maxStep` radians. */
export declare function turnToward(from: number, to: number, maxStep: number): number;
/** Move `value` toward `target` by at most `delta`. */
export declare function approach(value: number, target: number, delta: number): number;
