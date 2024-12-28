/*Return Length of Arguments Passed:
Write a function argumentsLength that returns the count of arguments passed to it.
 */
var argumentsLength = function(...args) {
    return args.length;
};


console.log(argumentsLength(5)); 
console.log(argumentsLength({}, null, "3")); 