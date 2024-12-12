/* 1.Create Hello World Function:
 Write a function createHelloWorld. It should return a new function that always returns "Hello World". 
 */


 var createHelloWorld = function() {
    
    return function(...args) {
          return "Hello World";
    }
};