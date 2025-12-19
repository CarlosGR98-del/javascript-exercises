const convertToCelsius = function (temp) {
  let toCelsius = (temp - 32) * (5 / 9);
  toCelsius = Math.round(toCelsius * 10) / 10;
  return toCelsius
};

const convertToFahrenheit = function (temp) {
  let toFahrenheit = temp * (9 / 5) + 32;
  toFahrenheit = Math.round(toFahrenheit * 10) / 10;
  return toFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
