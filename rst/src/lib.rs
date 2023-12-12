pub fn add_two(a: i32) -> i32 {
    a + 2
}

pub fn reverse_string(string: &str) -> String {
    string.chars().rev().collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_adds_two() {
        assert_eq!(4, add_two(2));
    }

    #[test]
    fn it_reverts_string() {
        let string1 = String::from("dcba");
        let string2 = reverse_string("abcd");
        assert_eq!(string1, string2);
    }
}