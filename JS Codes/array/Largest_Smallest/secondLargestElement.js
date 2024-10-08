function secondLargestElement(arr) {
  let sortedArray = arr.sort();
  let rev = sortedArray.reverse();
  let result = rev[1];

  return result;
}

const arr = [4, 6, 5, 3, 2, 1];
console.log(secondLargestElement(arr));

/*****************************************************************/
/*
1. Sorting Order:the default sort() method sorts elements as strings, 
which can lead to incorrect ordering for numbers.
2. Duplicates: If there are duplicate values, 
the function may not return a distinct second largest number.
3. Edge Cases: function may not handle cases like an empty array 
or an array with less than two unique numbers.
*/

function secondLargestElement(arr) {
  // Check if the input is undefined
  if (arr === undefined) {
    return "Please pass an array";
  }

  // Check if the input is not an array
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }

  // Check if the array is empty
  if (arr.length === 0) {
    return "Empty Array";
  }

  // Remove duplicates by converting to a Set and back to an array
  const uniqueArr = [...new Set(arr)];

  // Sort the array numerically in descending order
  uniqueArr.sort((a, b) => b - a);

  // Return the second largest element or null if not found
  return uniqueArr.length >= 2 ? uniqueArr[1] : null;
}

// Example usage
console.log(secondLargestElement(undefined)); // Output: 'Please pass an array'
console.log(secondLargestElement([])); // Output: 'Empty Array'
console.log(secondLargestElement("not an array")); // Output: 'Input must be an array'
console.log(secondLargestElement([4, 6, 5, 3, 2, 1])); // Output: 5

/*****************************************************************/
// Code Example (without prebuilt functions)

function secondLargestElement(arr) {
    if (arr.length < 2) {
      return null; // Handle edge cases where array doesn't have at least two elements
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    // Step 1: Find the largest element
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    // Step 2: Find the second largest element
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  
  // Test
  const arr = [4, 6, 5, 3, 2, 1];
  console.log(secondLargestElement(arr)); // Output: 5
  


/*****************************************************************/
//nth Largest Element
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
