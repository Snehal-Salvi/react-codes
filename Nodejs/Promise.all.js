/*
Promise.all is a built-in function in JavaScript that allows you 
to run multiple promises in parallel. 
It waits for all the promises to resolve and then returns an array of results. 
If any promise rejects, Promise.all immediately rejects with that reason.
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
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched from API 2");
      resolve("Data from API 2");
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

// Use Promise.all to run them in parallel
Promise.all([fetchFromAPI1(), fetchFromAPI2(), fetchFromAPI3()])
  .then((results) => {
    console.log("All data fetched:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
Explanation:

fetchFromAPI1, fetchFromAPI2, and fetchFromAPI3 are promises that run in parallel.
Promise.all waits for all these promises to resolve.
Once they all resolve, it logs the results 
["Data from API 1", "Data from API 2", "Data from API 3"].
If any promise rejects, the entire Promise.all will reject and catch the error.
 */

// reject promise example

function fetchFromAPI1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched from API 1");
        resolve("Data from API 1");
      }, 2000);
    });
  }
  
  function fetchFromAPI2() {
    return new Promise((_, reject) => {  // Modified to reject
      setTimeout(() => {
        console.log("Failed to fetch from API 2");
        reject(new Error("Error from API 2")); // Reject with an error
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
  
  // Use Promise.all to run them in parallel
  Promise.all([fetchFromAPI1(), fetchFromAPI2(), fetchFromAPI3()])
    .then((results) => {
      console.log("All data fetched:", results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  