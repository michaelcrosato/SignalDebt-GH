import type { Provenance } from '../types';
import { type PackSource } from './sources';
/** Our own work: made in this repository (a round trip of our own models, a fixture). */
export declare const OWN_LICENCE = "LicenseRef-own";
export interface LicenceTerms {
    readonly name: string;
    /** 'allowed' outside a pack too, or only in a pack whose `PACK_SOURCES` entry is approved. */
    readonly use: 'allowed' | 'per-pack';
    /** What `model -- credits` owes the author. */
    readonly credit: 'none' | 'optional' | 'required';
    /** Patterns (case aside) one of which a pack's licence file must contain to be this licence. */
    readonly marks: readonly string[];
}
export declare const LICENCES: Readonly<Record<string, LicenceTerms>>;
/** Licences allowed without a pack's approval (our own work alone). */
export declare const ALLOWED_LICENCES: readonly string[];
/**
 * What an approval links: a comment on the licence escalation. Agents here act through the
 * owner's GitHub account, so no code can prove a comment's author is human: approval is the
 * repository owner's own comment on #49, never an agent's.
 */
export declare const APPROVAL: RegExp;
/** Pack ids: they name files (`public/packs/<id>.json`) and prefix model ids. */
export declare const PACK_ID: RegExp;
/** Where our own work may say it comes from: this repository on GitHub, or a path inside it. */
export declare const OWN_SOURCE: RegExp;
/** Why a model's provenance can't ship (no url, no licence, a licence or a pack not allowed), or null. */
export declare function licenceProblem(source: Provenance, packs?: readonly PackSource[]): string | null;
/** What is wrong with `PACK_SOURCES` entries (ids, hashes, licences, approval links), one line each. */
export declare function packSourceProblems(sources?: readonly PackSource[]): string[];
/** Files in a download that may hold its licence: text named, or filed, as a licence. */
export declare const isLicenceFile: (path: string) => boolean;
/**
 * Why a download's licence files don't show its licence, or null: one of them must name it (its
 * `marks`; "public domain" alone is not CC0), and none may name terms no allowed licence has.
 */
export declare function licenceFileProblem(licence: string, files: readonly {
    readonly name: string;
    readonly text: string;
}[]): string | null;
