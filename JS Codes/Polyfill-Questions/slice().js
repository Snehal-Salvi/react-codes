/*The slice() method returns a shallow copy of a portion of an array 
into a new array object selected from start to end (end not included). */

// Polyfill for Array.prototype.slice (Not typically needed)
if (!Array.prototype.slice) {
  Array.prototype.slice = function (start, end) {
    const array = this;
    const result = [];

    // Normalize negative indexes
    start =
      start < 0
        ? Math.max(0, array.length + start)
        : Math.min(array.length, start);
    end =
      end === undefined
        ? array.length
        : end < 0
        ? Math.max(0, array.length + end)
        : Math.min(array.length, end);

    // Copy elements into result array
    for (let i = start; i < end; i++) {
      result.push(array[i]);
    }
    return result;
  };
}

//test
const numbers = [1, 2, 3, 4, 5];

// Get a slice of the array from index 1 to 3 (exclusive)
const slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers); // Expected output: [2, 3]
