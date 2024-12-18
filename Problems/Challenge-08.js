/*Function Composition:

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. */
var compose = function(functions) {
    return function(x) {
       
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};