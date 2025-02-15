/*Promise Time Limit:

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function. */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
           
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            
            fn(...args)
                .then((result) => {
                    clearTimeout(timer);  
                    resolve(result);
                })
                .catch((err) => {
                    clearTimeout(timer); 
                    reject(err);
                });
        });
    };
};