function nthLargest(arr, n) {
  let sortedArray = arr.sort();
  let rev = sortedArray.reverse();
  let nthHighestNo = rev[n - 1];
  return nthHighestNo;
}

const arr = [5, 7, 2, 1, 4];
console.log(nthLargest(arr, 1)); //7

// ************************************************
//improved code with test cases
/*
1. Sorting Order:the default sort() method sorts elements as strings, 
which can lead to incorrect ordering for numbers.
2. Duplicates: If there are duplicate values, 
the function may not return a distinct second largest number.
3. Edge Cases: function may not handle cases like an empty array 
or an array with less than two unique numbers.
*/
function nthLargest(arr, n) {
  // Check if the input is not an array or is empty
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Please pass a valid non-empty array";
  }

  // Check if n is larger than the array length
  if (n > arr.length) {
    return "n is larger than the array size";
  }

  // Sort the array in descending order
  const sortedArray = arr.sort((a, b) => b - a);

  // Return the nth largest element
  return sortedArray[n - 1];
}

// Example usage
const arr = [5, 7, 2, 1, 4];
console.log(nthLargest(arr, 1)); // Output: 7
console.log(nthLargest(arr, 2)); // Output: 5
console.log(nthLargest(arr, 5)); // Output: 1
console.log(nthLargest(arr, 6)); // Output: 'n is larger than the array size'

/*****************************************************************/
// Code Example (without prebuilt functions)
function nthLargestElement(arr, n) {
  if (arr.length < n) {
    return null; // Handle case when n is greater than the number of elements
  }

  let largest = -Infinity;

  // We create a loop to find the nth largest element
  for (let count = 0; count < n; count++) {
    let currentLargest = -Infinity;

    // Step 1: Find the current largest element that hasn't been considered yet
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > currentLargest && arr[i] < largest) {
        currentLargest = arr[i];
      }
    }

    // Step 2: Update the largest to be the nth largest found in this iteration
    largest = currentLargest;
  }

  return largest;
}

// Test
const arr = [4, 6, 5, 3, 2, 1];
const n = 2; // Find the 2nd largest element

console.log(nthLargestElement(arr, n)); // Output: 5 (second largest element)
