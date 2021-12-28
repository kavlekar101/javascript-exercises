const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum1 = 0;
	for(let i = 0; i < arr.length; i++){
    sum1 += arr[i];
  }
  return sum1;
};

const multiply = function (arr) {
  let product1 = 1;
  for (let i = 0; i < arr.length; i++) {
    product1 *= arr[i];
  }
  return product1;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let product = 1;
  for(let i = num; i > 0; i--){
    product *= i;
  }
  return product;
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
