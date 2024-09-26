/*The sort() method sorts the elements of an array in place and returns the sorted array. 
The default sort order is according to string Unicode code points. */

// Polyfill for Array.prototype.sort (Not typically needed)
if (!Array.prototype.sort) {
  Array.prototype.sort = function (compareFunction) {
    // Simple implementation of sort (Bubble Sort)
    const array = this;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (compareFunction) {
          // Use custom comparison if provided
          if (compareFunction(array[j], array[j + 1]) > 0) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        } else {
          // Default comparison for strings
          if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
      }
    }
    return array;
  };
}

//test
const numbers = [4, 2, 5, 1, 3];

// Sort numbers in ascending order
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Expected output: [1, 2, 3, 4, 5]
