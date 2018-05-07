function calculateTotal (pay, tip = 0.2) {
  return pay + pay * tip;
}

console.log(calculateTotal(2000));
console.log(calculateTotal(1000, 0.1));