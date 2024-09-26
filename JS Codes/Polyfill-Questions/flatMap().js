/*The flatMap() method first maps each element using a mapping function, 
then flattens the result into a new array. */

// Polyfill for Array.prototype.flatMap
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function (callback, thisArg) {
    // Check if the context is null or undefined
    if (this == null) {
      throw new TypeError(
        "Array.prototype.flatMap called on null or undefined"
      );
    }

    // Ensure callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // Use map and flat together
    return this.map(callback, thisArg).flat();
  };
}

//test
const numbers = [1, 2, 3];

// Use flatMap to create an array of repeated numbers
const repeated = numbers.flatMap((num) => [num, num]);
console.log(repeated); // Expected output: [1, 1, 2, 2, 3, 3]
