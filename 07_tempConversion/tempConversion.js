const convertToCelsius = function(convertToCelsius) {
let cel = (5/9)*(convertToCelsius-32);
cel = parseFloat(cel).toFixed(1);
cel = Number(cel);
return cel;

};

const convertToFahrenheit = function(convertToFahrenheit) {
let far = convertToFahrenheit * (9/5) + 32;
far = parseFloat(far).toFixed(1);
far = Number(far);
return far;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
