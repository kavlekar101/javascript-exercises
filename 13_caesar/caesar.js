function newChar(str, i, moveBy, offset) {
    let newCode = str.charCodeAt(i) + moveBy;
    if (newCode - offset > 25) {
        newCode = newCode - offset - 26;
        while(newCode >= 26) {
            newCode -= 26;
        }
        newCode += offset;
    } else if (newCode - offset < 0) {
        newCode = newCode - offset;
        while (newCode < 0) {
            newCode += 26;
        }
        newCode += offset;
    }
    return String.fromCharCode(newCode);
}
const caesar = function(str, moveBy) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) - 65 < 26 && str.charCodeAt(i) - 65 >= 0){
            // we know that it is uppercase
            newStr += newChar(str, i, moveBy, 65);
        } else if (str.charCodeAt(i) - 97 < 26 && str.charCodeAt(i) - 97 >= 0){
            // we know that it is lowercase
            newStr += newChar(str, i, moveBy, 97);
        } else {
            newStr += str.charAt(i);
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
