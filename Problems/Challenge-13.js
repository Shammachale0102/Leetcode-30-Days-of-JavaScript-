/*Sleep:

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value. */
async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis));
  }
  
  // Example usage:
  let t = Date.now();
  sleep(100).then(() => {
    console.log(Date.now() - t); // ~100
  });
  
  sleep(200).then(() => {
    console.log(Date.now() - t); // ~300
  });