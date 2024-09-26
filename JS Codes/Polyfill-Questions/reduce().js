// polyfill for the reduce() function in JavaScript

// Define the polyfill for reduce()
// Check if Array.prototype.reduce is already defined
if (!Array.prototype.reduce) {
  // Define the polyfill for reduce()
  Array.prototype.reduce = function (callback, initialValue) {
    // 'this' refers to the array on which reduce is called
    if (this == null) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }

    // Ensure the callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Get the array ('this' refers to the array here)
    const array = this;

    // The accumulator is the value we carry forward with each iteration
    let accumulator = initialValue;

    // Index to start the loop
    let startIndex = 0;

    // If no initial value is provided, use the first element of the array as the initial accumulator
    if (accumulator === undefined) {
      // Check if the array is empty and no initialValue is provided
      if (array.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }

      // Set the first element of the array as the initial value for the accumulator
      accumulator = array[0];

      // Start looping from the second element since we already used the first one
      startIndex = 1;
    }

    // Loop through the array from the start index to the end
    for (let i = startIndex; i < array.length; i++) {
      // Ensure that the index exists in the array (in case of sparse arrays)
      if (i in array) {
        // Call the callback with the accumulator, current element, current index, and the array
        // Update the accumulator with the result of the callback
        accumulator = callback(accumulator, array[i], i, array);
      }
    }

    // After the loop, return the final accumulated result
    return accumulator;
  };
}

//Testing
// Test array
const numbers = [1, 2, 3, 4, 5];

// Callback function for reduce: summing up elements
const sumCallback = (accumulator, currentValue) => accumulator + currentValue;

// Test case 1: Using reduce to sum all elements (with an initial value)
const resultWithInitialValue = numbers.reduce(sumCallback, 0);
console.log(resultWithInitialValue); // Expected output: 15
