/*The some() method tests whether at least one element in the array passes 
the provided function's test. 
It returns true if any element passes the test, otherwise false. */

// Polyfill for Array.prototype.some
if (!Array.prototype.some) {
  Array.prototype.some = function (callback, thisArg) {
    // Check if the context is null or undefined
    if (this == null) {
      throw new TypeError("Array.prototype.some called on null or undefined");
    }

    // Ensure callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Iterate over the array
    for (let i = 0; i < this.length; i++) {
      // If the callback returns true for any element, return true
      if (callback.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
    // Return false if no element passes the test
    return false;
  };
}

//test
const numbers = [1, 2, 3, 4, 5];

// Check if the array contains any even number
const hasEven = numbers.some((element) => element % 2 === 0);
console.log(hasEven); // Expected output: true
