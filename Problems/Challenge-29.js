/*Array Wrapper:

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features: */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, num) => sum + num, 0);
};


ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
};
