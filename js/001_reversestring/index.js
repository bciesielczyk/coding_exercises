// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverse_reduce = (input) => {
//     return input.split('').reduce((rev, char) => {
//        return char + rev
//     }, '')
// }

const reverse = (phrase) => {
    let reversed = ''
    for (char of phrase) {
        reversed = char + reversed;
    }
    return reversed
}

// function reverse_methods(str) {
//     return str.split('').reverse().join('')
// }

module.exports = reverse;
