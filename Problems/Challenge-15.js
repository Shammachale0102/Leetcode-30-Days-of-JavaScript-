/*Interval Cancellation:

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms. */
var cancellable = function(fn, args, t) {
    
    let results = [];
    let startTime = Date.now();
    
    
    const record = () => {
        results.push({
            time: Date.now() - startTime,
            returned: fn(...args),
        });
    };

   
    record();

    
    const intervalId = setInterval(record, t);

  
    return function cancelFn() {
        clearInterval(intervalId);
    };
};