/*The reduceRight() method applies a function against an accumulator 
and each element in the array 
(from right to left) to reduce it to a single value. */

// Polyfill for Array.prototype.reduceRight
if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callback, initialValue) {
    // Check if the context is null or undefined
    if (this == null) {
      throw new TypeError(
        "Array.prototype.reduceRight called on null or undefined"
      );
    }

    // Ensure callback is a function
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    let accumulator = initialValue;
    let startIndex = array.length - 1;

    // If no initial value is provided, use the last element of the array
    if (accumulator === undefined) {
      if (array.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = array[array.length - 1];
      startIndex--;
    }

    // Loop through the array from the last index to the first
    for (let i = startIndex; i >= 0; i--) {
      if (i in array) {
        accumulator = callback(accumulator, array[i], i, array);
      }
    }
    return accumulator;
  };
}

//test
const numbers = [1, 2, 3, 4];

// Use reduceRight to calculate the sum from right to left
const sum = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Expected output: 10
