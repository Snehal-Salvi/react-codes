function findDuplicates(arr) {
  let duplicates = []; // Array to store duplicates

  // Outer loop to pick each element one by one
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false; // Flag to track if a duplicate is found

    // Inner loop to compare the selected element with others
    for (let j = i + 1; j < arr.length; j++) {
      // If a duplicate is found
      if (arr[i] === arr[j]) {
        isDuplicate = true; // Set the flag to true
        break; // Break the inner loop once a duplicate is found
      }
    }

    // If the flag is true, and the element is not already in the duplicates array, add it
    if (isDuplicate && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }

  return duplicates; // Return the array of duplicates
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2];
console.log(findDuplicates(inputArray)); // Output: [1, 2]

/*Above Code has a time complexity of O(n^2)
 which may not be ideal for very large arrays due to the nested loops.  */
/**************************************************************************S*/
/*By using an object to count occurrences of each element, 
 you can achieve the same functionality with a time complexity of O(n)*/

function findDuplicates(arr) {
  let elementCount = {}; // Object to track occurrences of elements
  let duplicates = []; // Array to store duplicates

  // First loop: Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (elementCount[num]) {
      elementCount[num]++; // Increment count if the element already exists
    } else {
      elementCount[num] = 1; // Set count to 1 if it's the first occurrence
    }
  }

  // Second loop: Find elements that occurred more than once
  for (let key in elementCount) {
    if (elementCount[key] > 1) {
      duplicates.push(parseInt(key)); // Add duplicates to the result
    }
  }

  return duplicates;
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2];
console.log(findDuplicates(inputArray)); // Output: [1, 2]
