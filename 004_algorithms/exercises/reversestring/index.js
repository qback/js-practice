// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// return str.split('').reduce((previous, current) => current + previous, '');

	// let reversed = '';
	// for (const element of str) {
	// 	reversed = element + reversed;
	// }
	// return reversed;

	// let newStr = '';
	// for (let index = str.length; index > 0; index--) {
	// 	newStr += str[index - 1];
	// }
	// return newStr;

	// return str.split('').reverse().join('');

	return [...str].reverse().join('');
}

module.exports = reverse;
