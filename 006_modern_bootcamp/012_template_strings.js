function calculateTotal(pay, tip = 0.2) {
  return `Плата за ужин - ${pay}, чаевые - ${pay * tip}, итого - ${pay + pay * tip}`;
}

console.log(calculateTotal(2000));
console.log(calculateTotal(1000, 0.1));
