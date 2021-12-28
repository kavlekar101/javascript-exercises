const ftoc = function(num) {
  let conversion = (num - 32) * (5 / 9);
  if(!Number.isInteger(conversion)){
    return parseFloat(conversion.toFixed(1));
  }
  return conversion;
};

const ctof = function(num) {
  let conversion = num * (9 / 5) + 32;
  if (!Number.isInteger(conversion)) {
    return parseFloat(conversion.toFixed(1));
  }
  return conversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
