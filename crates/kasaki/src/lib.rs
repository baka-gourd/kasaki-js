// Use #[neon::export] to export Rust functions as JavaScript functions.
// See more at: https://docs.rs/neon/latest/neon/attr.export.html

#[neon::export]
fn is_japanese(str: String) -> bool {
    match kakasi::is_japanese(str) {
        kakasi::IsJapanese::False => false,
        _ => true,
    }
}

#[neon::export]
fn convert_to_romaji(str: String) -> String {
    let res = kakasi::convert(str);
    res.romaji
}

#[neon::export]
fn convert_to_hiragana(str: String) -> String {
    let res = kakasi::convert(str);
    res.hiragana
}

// Use #[neon::main] to add additional behavior at module loading time.
// See more at: https://docs.rs/neon/latest/neon/attr.main.html

// #[neon::main]
// fn main(_cx: ModuleContext) -> NeonResult<()> {
//     println!("module is loaded!");
//     Ok(())
// }
