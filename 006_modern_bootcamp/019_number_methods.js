// number from 1 to 5
const riddleNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

function makeGuess(...arr) {
  return arr.includes(riddleNumber) + ` искомое число - ${riddleNumber}`;
}

console.log(makeGuess(1, 2));
