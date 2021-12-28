/*
\w is any digit, letter, or underscore.
\s is any whitespace.
[^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
[^\w\s]|_ is the same as #3 except with the underscores added back in.
*/
const palindromes = function (str) {
    newStr = str.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "");
    let length = newStr.length;
    let half = length / 2;
    let firstHalf = newStr.substr(0, half).toLowerCase();
    let secondHalf = newStr.substr(half * -1).toLowerCase();
    return firstHalf.localeCompare(secondHalf.split("").reverse().join("")) == 0;
};

// Do not edit below this line
module.exports = palindromes;
