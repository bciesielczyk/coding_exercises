fn is_palindrome(s: &str) -> bool {
    let clean = s.to_lowercase();
    clean.chars().eq(clean.chars().rev())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_palindrome() {
        assert_eq!(is_palindrome("abba"), true);
        assert_eq!(is_palindrome("Abba"), true);
        assert_eq!(is_palindrome("Baobab"), false);
    }
}