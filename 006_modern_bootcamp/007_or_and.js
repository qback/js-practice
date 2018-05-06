const isGuestOneVegan = false;
const isGuestTwoVegan = false;

let whatOnDinner;

if (isGuestOneVegan && isGuestTwoVegan) {
  whatOnDinner = 'Салатик';
} else if (isGuestOneVegan || isGuestTwoVegan) {
  whatOnDinner = 'Салатик и Шашлычок';
} else {
  whatOnDinner = 'Шашлычок';
}

console.log(whatOnDinner);
