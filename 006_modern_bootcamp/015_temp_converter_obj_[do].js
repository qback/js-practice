// const fahrenheit = 32;
// const celsius = 5 * (fahrenheit - 32) / 9;
// const kelvin = 5 * (fahrenheit - 32) / 9 + 273.15;

function convertToDiffTemp(fahrenheit) {
  return {
    fahrenheit: fahrenheit + 'F',
    celsius: 5 * (fahrenheit - 32) / 9 + 'C',
    kelvin: 5 * (fahrenheit - 32) / 9 + 273.15 + 'K'
  };
}

console.log(convertToDiffTemp(32));
