// polyfill for the forEach() function in JavaScript

// Check if 'forEach' method doesn't exist on Array.prototype
if (!Array.prototype.forEach) {
  // Define the 'forEach' method as a polyfill
  Array.prototype.forEach = function (callback, thisArg) {
    // 'this' refers to the array on which forEach is called
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }

    // Ensure that the callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Get the array ('this' refers to the array)
    const array = this;
    const length = array.length;

    // Loop through each element in the array
    for (let i = 0; i < length; i++) {
      // Check if the current index exists in the array (to handle sparse arrays)
      if (i in array) {
        // Call the callback with the current element, index, and the array
        callback.call(thisArg, array[i], i, array);
      }
    }
  };
}

// Test case 1: Basic forEach() to print elements
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((element) => {
  console.log(element);
});
// Expected output: 1 2 3 4 5 (each number printed on a new line)
