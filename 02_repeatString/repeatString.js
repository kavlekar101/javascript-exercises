const repeatString = function(str, num) {
    if(num < 0) {
        return 'ERROR';
    }
    let strFinal = str.repeat(num);
    return strFinal;
};

// Do not edit below this line
module.exports = repeatString;
