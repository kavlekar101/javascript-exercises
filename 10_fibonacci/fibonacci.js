const fibonacci = function(num) {
    if(num == 1 || num == 2) {
        return 1;
    } else if (num == 0){
        return 0;
    } else {
        if(num < 0) {
            return 'OOPS';
        }
        let fib = fibonacci(num - 1) + fibonacci(num - 2);;
        /*if (num instanceof String) {
            fib = fibonacci(num.valueOf());
        } else {
            fib = fibonacci(num - 1) + fibonacci(num - 2);
        }*/
        // don't need commented code because == doesn't check for type equality, 
        // only the values of the objects reardless of typing
        return fib;
    }
};

// Do not edit below this line
module.exports = fibonacci;
