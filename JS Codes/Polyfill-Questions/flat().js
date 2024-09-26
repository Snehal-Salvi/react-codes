/*The flat() method creates a new array with all sub-array elements 
concatenated into it recursively up to the specified depth. */

// Polyfill for Array.prototype.flat
if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    // Check if the context is null or undefined
    if (this == null) {
      throw new TypeError("Array.prototype.flat called on null or undefined");
    }

    // Convert to an array
    const array = this;
    const flatArray = [];

    // Recursive function to flatten the array
    const flatten = (arr, d) => {
      for (const item of arr) {
        if (Array.isArray(item) && d > 0) {
          flatten(item, d - 1);
        } else {
          flatArray.push(item);
        }
      }
    };

    flatten(array, depth);
    return flatArray;
  };
}

//test
const nestedArray = [1, 2, [3, 4, [5, 6]], 7];

// Flatten the nested array
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Expected output: [1, 2, 3, 4, 5, 6, 7]
