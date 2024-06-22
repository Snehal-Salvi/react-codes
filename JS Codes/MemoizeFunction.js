//create a memoize function

/*const add = (a, b) => a + b;

const memoizeAdd = memoizeOne(add);

memoizeAdd(1, 2); //3
//here add function is called to get a new value

memoizeAdd(1, 2);//3
//here add function is not executed previous result is returned

now create a function memoizeone to acheive this
*/

function memoizeOne(fn) {
  // Initialize a Map to store cached results
  const cache = new Map();

  // Return a function that performs the memoization
  return function (...args) {
    // Generate a unique key for the arguments using JSON.stringify
    const key = JSON.stringify(args);

    // Check if the cache has the result for these arguments
    if (cache.has(key)) {
      console.log("Returning result from cache"); // Log statement for cache hit
      return cache.get(key);
    }

    // Call the original function with the arguments
    const result = fn(...args);

    // Store the result in the cache
    cache.set(key, result);

    // Return the computed result
    return result;
  };
}

// Example usage
const add = (a, b) => a + b;

const memoizeAdd = memoizeOne(add);

console.log(memoizeAdd(1, 2)); // 3, add function is called
console.log(memoizeAdd(1, 2)); // 3, returning result from cache
console.log(memoizeAdd(2, 3)); // 5, add function is called
console.log(memoizeAdd(2, 3)); // 5, returning result from cache
