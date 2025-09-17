// This module is the CJS entry point for the library.

// The Rust addon.
import * as addon from "./load.cjs";

// Use this declaration to assign types to the addon's exports,
// which otherwise by default are `any`.
declare module "./load.cjs" {
    function is_japanese(str: string): boolean;
    function convert_to_romaji(str: string): string;
    function convert_to_hiragana(str: string): string;
}

export function is_japanese(str: string) {
    return addon.is_japanese(str);
}

export function convert_to_romaji(str: string) {
    return addon.convert_to_romaji(str);
}

export function convert_to_hiragana(str: string) {
    return addon.convert_to_hiragana(str);
}
