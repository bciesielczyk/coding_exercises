// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

fn minimum(arr: &[i32]) -> Option<i32> {
    if arr.is_empty() {
        return None;
    }

    let mut min = arr[0];

    for &num in arr {
            if num < min {
                min = num;
            }
    }
    Some(min)
}

fn maximum(arr: &[i32]) -> i32 {
    let mut max = arr[0];

    for &num in arr {
        if num > max {
            max = num;
        }
    }
    max
}

// iter solution
// *arr.iter().min().unwrap()

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_minimum() {
        assert_eq!(minimum(&[42, 54, 65, 87, 0]), Some(0));
        assert_eq!(minimum(&[4,6,2,1,9,63,-134,566]), Some(-134));
    }

    #[test]
    fn test_maximum() {
        assert_eq!(maximum(&[-52, 56, 30, 29, -54, 0, -110]), 56);
        assert_eq!(maximum(&[5]), 5);
    }
}