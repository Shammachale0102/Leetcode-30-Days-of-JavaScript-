/*Execute Asynchronous Functions in Parallel:

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel. */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let resolvedCount = 0;
        let total = functions.length;

        functions.forEach((func, index) => {
            func()
                .then(value => {
                    results[index] = value; 
                    resolvedCount++;
                    if (resolvedCount === total) {
                        resolve(results); 
                    }
                })
                .catch(err => {
                    reject(err); 
                });
        });

        
        if (total === 0) {
            resolve(results);
        }
    });
};
