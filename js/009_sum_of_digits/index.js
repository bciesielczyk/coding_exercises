// --- Directions
// Write a function function solution(N):
// that given an integer N, returns the smallest integer greater than N,
// the sum of whose digits is twice as big as the sum of digits of N.
// Assume that N is an integer within the range [1..500]
// --- Examples
// Given N = 14, the function should return 19
// Given N = 10, the function should return 11
// Given N = 99, the function should return 9999

// MY SOLUTION
// const solution = (N) => {
//     const sumOfN = sumOfDigits(N);
//     let sumOfSmallest = sumOfDigits(N);

//     while (2 * sumOfN !== sumOfSmallest) {
//         N++;
//         sumOfSmallest = sumOfDigits(N);
//     }

//     return N;
// };

// const sumOfDigits = (digit) => {
//     const arrayOfDigits = digit.toString().split('');

//     return arrayOfDigits.reduce((acc, curr) => {
//         return acc + parseInt(curr);
//     }, 0);
// };

// FANCY SOLUTION
// function solution(N) {
//     const targetSum = sumOfDigits(N) * 2;

//     let num = N + 1;
//     while (sumOfDigits(num) !== targetSum) {
//         num++;
//     }

//     return num;
// }

// const sumOfDigits = (num) => {
//     let sum = 0;
//     while (num) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// };

// MY IMPROVED SOLUTION
const solution = (N) => {
    const targetSum = sumOfDigits(N) * 2;

    let num = N + 1;
    while (sumOfDigits(num) !== targetSum) {
        num++;
    }

    return num;
};

const sumOfDigits = (digit) => {
    const arrayOfDigits = digit.toString().split('');

    return arrayOfDigits.reduce((acc, curr) => {
        return acc + parseInt(curr);
    }, 0);
};

module.exports = solution;
