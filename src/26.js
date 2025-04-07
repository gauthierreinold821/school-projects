// Node.js program to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Example usage
const tempInCelsius = 0; // Input temperature in Celsius
const tempFahrenheit = celsiusToFahrenheit(tempInCelsius);
console.log(`Temperature in Fahrenheit: ${tempFahrenheit}°F`);
