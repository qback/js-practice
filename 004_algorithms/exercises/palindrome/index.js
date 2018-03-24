// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // return str === str.split('').reverse().join('');

  /* let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return str === reversed; */

  // return str === str.split('').reduce((previous, current) => current + previous);

  //not effective but fun solution
  const strLength = str.length;
  return str.split('').every((elem, index) => {
    return elem === str[strLength - index - 1];
  });
}

module.exports = palindrome;
