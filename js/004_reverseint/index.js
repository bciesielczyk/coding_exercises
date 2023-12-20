// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
}

// function reverseInt_Bart_2023_12_20(n) {
//     const transformed = parseInt(n.toString().split('').reverse().join(''))
//     return Math.sign(n) >= 0 ? transformed : transformed * -1
// }

module.exports = reverseInt;
