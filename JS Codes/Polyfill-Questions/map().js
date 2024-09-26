/* The map() method creates a new array populated with the results of 
calling a provided function on every element in the calling array.*/

// Check if 'map' method doesn't exist on Array.prototype
if (!Array.prototype.map) {
  // Define the 'map' method as a polyfill
  Array.prototype.map = function (callback, thisArg) {
    // 'this' refers to the array on which map is called
    if (this == null) {
      throw new TypeError("Array.prototype.map called on null or undefined");
    }

    // Ensure that the callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Get the array ('this' refers to the array)
    const array = this;
    const length = array.length;

    // Create a new array to store the results
    const result = new Array(length);

    // Loop through each element in the array
    for (let i = 0; i < length; i++) {
      // Check if the current index exists in the array (to handle sparse arrays)
      if (i in array) {
        // Call the callback with the current element, index, and the array, then store the result
        result[i] = callback.call(thisArg, array[i], i, array);
      }
    }

    // Return the new array with mapped values
    return result;
  };
}

// Test case 1: Basic map() to double each element
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((element) => element * 2);
console.log(doubled); // Expected output: [2, 4, 6, 8]
