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

function flattenArray(arr) {
  const flattenArr = []; // Initialize the accumulator array inside the function
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArr.push(...flattenArray(arr[i])); // Recursively flatten sub-arrays and spread them into the accumulator
    } else {
      flattenArr.push(arr[i]); // Push non-array elements into the accumulator
    }
  }
  
  return flattenArr; // Return the flattened array
}

// Example usage:
const arr = [[1], [2], [[3]], [[4]]];
console.log(flattenArray(arr));


