const fahrenheit = 32;
const celsius = 5 * (fahrenheit - 32) / 9;
const kelvin = 5 * (fahrenheit - 32) / 9 + 273.15;

console.log(`
  F - ${fahrenheit}
  C - ${celsius}
  K - ${kelvin}`
);