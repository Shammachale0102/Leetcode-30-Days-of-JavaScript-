/*Timeout Cancellation:

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn. */
function cancellable(fn, args, t) {
    let timeoutId; 
    let isCancelled = false;

    
    timeoutId = setTimeout(() => {
        if (!isCancelled) {
            fn(...args); 
        }
    }, t);

    
    return function cancelFn() {
        isCancelled = true;
        clearTimeout(timeoutId); 
    };
}