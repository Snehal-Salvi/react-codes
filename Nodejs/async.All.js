/* This function is used to run multiple asynchronous operations in parallel. 
It waits for all operations to complete and then executes a callback function. 
If any operation fails, it returns an error immediately.*/

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

// Use async.all to run them in parallel
async.all([fetchFromAPI1, fetchFromAPI2, fetchFromAPI3], (err, results) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("All data fetched:", results);
  }
});

/*
Explanation:
fetchFromAPI1, fetchFromAPI2, and fetchFromAPI3 are executed in parallel.
The async.all function waits for all of them to complete.
Once all are done, it calls the final callback with the results. 
In this case, it will log ["Data from API 1", "Data from API 2", "Data from API 3"].
 */
