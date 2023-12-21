fn reverse_int(n: i32) -> i32 {
    let reversed: i32 = n
        .abs()
        .to_string()
        .chars()
        .rev()
        .collect::<String>()
        .parse::<i32>()
        .unwrap_or(0);

    n.signum() * reversed
}

fn reverse_int_without_strings(mut n: i32) -> i32 {
    let mut rev = 0;
    while n != 0 {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    rev
}

#[cfg(test)]
mod tests {
    use super::reverse_int;

    #[test]
    fn test_reverse_int() {
        assert_eq!(reverse_int(123), 321);
        assert_eq!(reverse_int(1000), 1);
        assert_eq!(reverse_int(-123), -321);
        assert_eq!(reverse_int(4321234), 4321234);
        assert_eq!(reverse_int(5), 5);
        assert_eq!(reverse_int(0), 0);
        assert_eq!(reverse_int(98989898), 89898989);
    }
}
