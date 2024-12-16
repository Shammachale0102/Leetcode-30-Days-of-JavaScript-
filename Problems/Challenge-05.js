/*Apply Transform Over Each Element in Array:
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 */
var map = function (arr, fn) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {

        result.push(fn(arr[i], i));
    }
    return result;
};