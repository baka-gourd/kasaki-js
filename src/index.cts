// This module is the CJS entry point for the library.

// The Rust addon.
import * as addon from "./load.cjs";

// Use this declaration to assign types to the addon's exports,
// which otherwise by default are `any`.
declare module "./load.cjs" {
    function isJapanese(str: string): boolean;
    function convertToRomaji(str: string): string;
    function convertToHiragana(str: string): string;
}

export function isJapanese(str: string) {
    return addon.isJapanese(str);
}

export function convertToRomaji(str: string) {
    return addon.convertToRomaji(str);
}

export function convertToHiragana(str: string) {
    return addon.convertToHiragana(str);
}
