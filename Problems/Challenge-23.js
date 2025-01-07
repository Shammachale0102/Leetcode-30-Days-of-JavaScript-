/*Group By:

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array. */
Array.prototype.groupBy = function(fn) {
    const result = {};
    
    for (const item of this) {
        const key = fn(item);
        
        
        if (!result[key]) {
            result[key] = [];
        }
        
       
        result[key].push(item);
    }
    
    
    return result;
};
