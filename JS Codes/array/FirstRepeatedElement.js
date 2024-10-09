function findFirstRepeatedElement(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return null; // Edge case: if the input is not an array or has less than 2 elements
  }

  const seen = new Set(); // Set to keep track of seen elements

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i]; // Return the first repeated element
    }
    seen.add(arr[i]); // Add element to the set if it's not already present
  }

  return null; // Return null if no repeated element is found
}

// Example usage with edge cases:
console.log(findFirstRepeatedElement([15, 3, 10, 5, 1, 3, 15])); // Output: 3
console.log(findFirstRepeatedElement([15, 3, 10, 5, 1])); // Output: null (no repeats)
console.log(findFirstRepeatedElement([])); // Output: null (empty array)
console.log(findFirstRepeatedElement([7])); // Output: null (single element)
console.log(findFirstRepeatedElement([1, 2, 3, 4, 5])); // Output: null (all unique)
console.log(findFirstRepeatedElement([1, 1, 2, 3, 4])); // Output: 1 (first element repeated)

/************************************************************/
// Without Built-in Methods
function findFirstRepeatedElement(arr) {
  // Edge case: if the input is not an array or has less than 2 elements
  if (typeof arr !== "object" || arr === null || arr.length < 2) {
    return null;
  }

  const seen = []; // Array to keep track of seen elements

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let isRepeated = false;

    // Check if the current element is already seen
    for (let j = 0; j < seen.length; j++) {
      if (seen[j] === currentElement) {
        isRepeated = true;
        break; // Exit the inner loop if we found a duplicate
      }
    }

    if (isRepeated) {
      return currentElement; // Return the first repeated element
    }

    // Add element to the seen array if it's not already present
    seen.push(currentElement);
  }

  return null; // Return null if no repeated element is found
}

// Example usage with edge cases:
console.log(findFirstRepeatedElement([15, 3, 10, 5, 1, 3, 15])); // Output: 3
console.log(findFirstRepeatedElement([15, 3, 10, 5, 1])); // Output: null (no repeats)
console.log(findFirstRepeatedElement([])); // Output: null (empty array)
console.log(findFirstRepeatedElement([7])); // Output: null (single element)
console.log(findFirstRepeatedElement([1, 2, 3, 4, 5])); // Output: null (all unique)
console.log(findFirstRepeatedElement([1, 1, 2, 3, 4])); // Output: 1 (first element repeated)
