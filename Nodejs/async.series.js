/*
This function runs asynchronous operations in sequence, one after the other. 
Each operation must complete before the next one starts. 
The final callback is executed after all operations are done.
 */

const async = require("async");

// Simulate async operations with setTimeout
function fetchFromAPI1(callback) {
  setTimeout(() => {
    console.log("Fetched from API 1");
    callback(null, "Data from API 1");
  }, 2000);
}

function fetchFromAPI2(callback) {
  setTimeout(() => {
    console.log("Fetched from API 2");
    callback(null, "Data from API 2");
  }, 1000);
}

function fetchFromAPI3(callback) {
  setTimeout(() => {
    console.log("Fetched from API 3");
    callback(null, "Data from API 3");
  }, 1500);
}

// Use async.series to run them in sequence
async.series([fetchFromAPI1, fetchFromAPI2, fetchFromAPI3], (err, results) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("All data fetched in series:", results);
  }
});

/*
Explanation:

Here, fetchFromAPI1 runs first, then fetchFromAPI2, and finally fetchFromAPI3.
Each function must finish before the next one starts.
Once all are done, it calls the final callback with the results 
in the order the functions were executed.
 */
