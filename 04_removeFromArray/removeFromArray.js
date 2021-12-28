const removeFromArray = function(arr) {
    let argsLength = arguments.length;
    for(let i = 1; i < argsLength; i++) {
        let index = arr.indexOf(arguments[i]);
        if (index != -1) {
            arr.splice(index, 1);
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
