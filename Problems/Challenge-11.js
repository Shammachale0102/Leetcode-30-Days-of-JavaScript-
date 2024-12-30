/*Memoize:

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value. */
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = args.join(',');
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}


function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return factorial(n - 1) * n;
}


const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);


console.log(memoizedSum(2, 3)); 
console.log(memoizedSum(3, 2)); 

console.log(memoizedFib(10)); 
console.log(memoizedFactorial(5)); 

