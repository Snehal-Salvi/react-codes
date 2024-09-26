/*The findIndex() method returns the index of the first element in 
the array that satisfies the provided testing function. 
If no element passes the test, it returns -1. */

// Polyfill for Array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (callback, thisArg) {
    // Check if the context is null or undefined
    if (this == null) {
      throw new TypeError(
        "Array.prototype.findIndex called on null or undefined"
      );
    }

    // Ensure callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Iterate over the array
    for (let i = 0; i < this.length; i++) {
      // If the callback returns true, return the index
      if (callback.call(thisArg, this[i], i, this)) {
        return i;
      }
    }
    // Return -1 if no element passes the test
    return -1;
  };
}

//test
const numbers = [5, 12, 8, 130, 44];

// Find the index of the first number greater than 10
const index = numbers.findIndex((element) => element > 10);
console.log(index); // Expected output: 1
