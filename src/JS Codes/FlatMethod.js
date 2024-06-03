// The flat() method creates a new array with all sub-array
// elements concatenated into it recursively up to the specified depth.

/*
arr.flat(): Flattens the array to a depth of 1.
arr.flat(Infinity): Flattens the array completely, regardless of the nesting depth. */

let array = [[1], [2], [[3]], [[4]]];

// Flattening to depth 1
console.log(array.flat());
// Output: [1, 2, [3], [4]]

// Flattening to infinite depth
console.log(array.flat(Infinity));
// Output: [1, 2, 3, 4]
//******************************************** */
/*Function to flatten the array */

// Function to flatten an array to a specified depth
function flattenArray(arr, depth = 1) {
  // Initialize the result array to store the flattened elements
  let result = [];

  // Helper function to recursively flatten the array
  function flatten(currentArray, currentDepth) {
    // Iterate through each item in the current array
    for (let item of currentArray) {
      // If the item is an array and we haven't reached the specified depth, recurse deeper
      if (Array.isArray(item) && currentDepth < depth) {
        flatten(item, currentDepth + 1);
      } else {
        // Otherwise, push the item to the result array
        result.push(item);
      }
    }
  }

  // Start the flattening process with the initial array and depth 0
  flatten(arr, 0);
  // Return the flattened result array
  return result;
}

// Test array
let arr = [[1], [2], [[3]], [[4]]];

// Flattening with default depth (1)
console.log(flattenArray(arr)); // Output: [1, 2, [3], [4]]

// Flattening with infinite depth
console.log(flattenArray(arr, Infinity)); // Output: [1, 2, 3, 4]
