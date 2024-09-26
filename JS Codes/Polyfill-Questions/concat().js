/*concat()
Combines two or more arrays into one new array without changing the existing arrays.
javascript */

// Polyfill for Array.prototype.concat
if (!Array.prototype.concat) {
  Array.prototype.concat = function (...args) {
    // 'this' refers to the array on which concat is called
    const result = []; // Initialize a new array to hold the concatenated results

    // Push the elements of the current array into the result array
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    // Iterate over each argument provided to the concat method
    for (let i = 0; i < args.length; i++) {
      const currentArg = args[i];

      // If the argument is an array, we need to push its elements
      if (Array.isArray(currentArg)) {
        for (let j = 0; j < currentArg.length; j++) {
          result.push(currentArg[j]); // Push each element of the current array
        }
      } else {
        // If it's not an array, just push the element directly
        result.push(currentArg);
      }
    }

    return result; // Return the new concatenated array
  };
}

// Test cases for the polyfill

const array1 = [1, 2];
const array2 = [3, 4];

// Combine two arrays
const combined = array1.concat(array2);
console.log(combined); // Expected output: [1, 2, 3, 4]
