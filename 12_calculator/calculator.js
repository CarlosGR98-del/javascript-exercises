const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, element) => {
    return sum = sum + element;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((result, element) => {
    result = result * element;
    return result;
  }, 1);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (a) {
  let result = a;
  if (a !== 0) {
    for (let i = a - 1; i > 0; i--) {
      result = result * i;
    }
  } else {
    result = 1;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
