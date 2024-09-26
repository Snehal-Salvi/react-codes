/*The filter() method creates a new array with 
all elements that pass the test implemented by the provided function. */

// Check if 'filter' method doesn't exist on Array.prototype
if (!Array.prototype.filter) {
  // Define the 'filter' method as a polyfill
  Array.prototype.filter = function (callback, thisArg) {
    // 'this' refers to the array on which filter is called
    if (this == null) {
      throw new TypeError("Array.prototype.filter called on null or undefined");
    }

    // Ensure that the callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Get the array ('this' refers to the array)
    const array = this;
    const length = array.length;

    // Create a new array to store the results
    const result = [];

    // Loop through each element in the array
    for (let i = 0; i < length; i++) {
      // Check if the current index exists in the array (to handle sparse arrays)
      if (i in array) {
        // Call the callback with the current element, index, and the array
        // If the callback returns true, push the element to the result array
        if (callback.call(thisArg, array[i], i, array)) {
          result.push(array[i]);
        }
      }
    }

    // Return the new array with filtered values
    return result;
  };
}

// Test case 1: Basic filter() to filter out even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((element) => element % 2 === 0);
console.log(evens); // Expected output: [2, 4, 6]
