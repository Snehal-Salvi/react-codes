/*The find() method returns the first element in the array that satisfies the provided testing function. 
If no element passes the test, it returns undefined. */

// Polyfill for Array.prototype.find
if (!Array.prototype.find) {
  Array.prototype.find = function (callback, thisArg) {
    // Check if the context is null or undefined
    if (this == null) {
      throw new TypeError("Array.prototype.find called on null or undefined");
    }

    // Ensure callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Iterate over the array
    for (let i = 0; i < this.length; i++) {
      // If the callback returns true, return the element
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
    // Return undefined if no element passes the test
    return undefined;
  };
}
const numbers = [5, 12, 8, 130, 44];

// Find the first number greater than 10
const found = numbers.find((element) => element > 10);
console.log(found); // Expected output: 12
