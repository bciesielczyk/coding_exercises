use std::collections::HashMap;

fn max_char(s: &str) -> Option<char> {
    let mut chars_map: HashMap<char, i32> = HashMap::new();
    for c in s.chars() {
        *chars_map.entry(c).or_insert(0) += 1;
    }

    let mut max = 0;
    let mut max_char = None;

    for (char, count) in chars_map.iter() {
        if *count > max {
            max = *count;
            max_char = Some(*char);
        }
    }

    max_char
}

#[cfg(test)]
mod tests {
    use super::max_char;

    #[test]
    fn test_most_common_char() {
        assert_eq!(max_char("abcdefghijklmnaaaaa"), Some('a'));
        assert_eq!(max_char("ab1c1d1e1f1g1"), Some('1'));
        assert_eq!(max_char(""), None);
        // assert_eq!(max_char("!@#!@#"), Some('#'));
        // assert_eq!(max_char("abcdefgh"), Some('a'));
    }
}
