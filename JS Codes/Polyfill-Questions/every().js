/*The every() method tests whether all elements in the array pass the provided function's test. 
It returns true if all elements pass the test, otherwise false. */

// Polyfill for Array.prototype.every
if (!Array.prototype.every) {
  Array.prototype.every = function (callback, thisArg) {
    // Check if the context is null or undefined
    if (this == null) {
      throw new TypeError("Array.prototype.every called on null or undefined");
    }

    // Ensure callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Iterate over the array
    for (let i = 0; i < this.length; i++) {
      // If the callback returns false for any element, return false
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
    // Return true if all elements pass the test
    return true;
  };
}

//test
const numbers = [2, 4, 6, 8];

// Check if all elements are even
const allEven = numbers.every((element) => element % 2 === 0);
console.log(allEven); // Expected output: true
