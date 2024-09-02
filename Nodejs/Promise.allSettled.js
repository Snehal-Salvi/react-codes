/*
Promise.allSettled is a method in JavaScript that allows you to handle multiple 
promises in parallel, but unlike Promise.all, 
it waits for all promises to settle, regardless of whether they are resolved or rejected. 
This method returns a promise that resolves after all of the given promises 
have either resolved or rejected, and it provides an array of objects describing 
the outcome of each promise.
 */

// Simulate async operations with promises
function fetchFromAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched from API 1");
      resolve("Data from API 1");
    }, 2000);
  });
}

function fetchFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched from API 2");
      reject("Error from API 2");
    }, 1000);
  });
}

function fetchFromAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched from API 3");
      resolve("Data from API 3");
    }, 1500);
  });
}

// Use Promise.allSettled to run them in parallel
Promise.allSettled([fetchFromAPI1(), fetchFromAPI2(), fetchFromAPI3()]).then(
  (results) => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} resolved with:`, result.value);
      } else {
        console.log(`Promise ${index + 1} rejected with:`, result.reason);
      }
    });
  }
);

/*
Explanation:

fetchFromAPI1, fetchFromAPI2, and fetchFromAPI3 are executed in parallel.
Promise.allSettled waits for all promises to settle, regardless of their outcome.
The final result is an array of objects, 
where each object has a status property ('fulfilled' or 'rejected') 
and either a value (if fulfilled) or a reason (if rejected).
In the example, it will log the results of each promise, 
showing whether they were fulfilled or rejected, and their respective values or reasons.
 */
