/*
To Be Or Not To Be:
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
*/
var expect = (val) => ({
    toBe: (expected) => {
        if (val !== expected) throw new Error("Not Equal");
        return true;
    },
    notToBe: (expected) => {
        if (val === expected) throw new Error("Equal");
        return true;
    }
});


console.log(expect(5).toBe(5));      
console.log(expect(5).notToBe(10)); 
