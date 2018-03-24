// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  /*  const reverseAbsStr = Math.abs(n).toString().split('').reverse().join('');
   const reverseAbsInt = parseInt(reverseAbsStr, 10);
   return Math.sign(n) !== -1 ? reverseAbsInt : reverseAbsInt * -1; */

  const reverseStr = n.toString().split('').reverse().join('');
  return parseInt(reverseStr, 10) * Math.sign(n);
}

module.exports = reverseInt;
