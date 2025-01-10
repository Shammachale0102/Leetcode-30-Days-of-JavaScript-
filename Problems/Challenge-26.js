/*Flatten Deeply Nested Array:

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays. */
var flat = function(arr, n) {
    const flatten = (arr, depth) => {
        if (depth === 0) return arr; 
        let result = [];
        for (const item of arr) {
            if (Array.isArray(item)) {
                result.push(...flatten(item, depth - 1));
            } else {
                result.push(item);
            }
        }
        return result;
    };

    return flatten(arr, n);
};
