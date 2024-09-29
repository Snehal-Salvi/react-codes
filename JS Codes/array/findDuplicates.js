function findDuplicates(arr) {
    let duplicates = [];  // Array to store duplicates
  
    // Outer loop to pick each element one by one
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;  // Flag to track if a duplicate is found
      
      // Inner loop to compare the selected element with others
      for (let j = i + 1; j < arr.length; j++) {
        // If a duplicate is found
        if (arr[i] === arr[j]) {
          isDuplicate = true;  // Set the flag to true
          break;  // Break the inner loop once a duplicate is found
        }
      }
  
      // If the flag is true, and the element is not already in the duplicates array, add it
      if (isDuplicate && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  
    return duplicates;  // Return the array of duplicates
  }
  
  // Example usage
  const inputArray = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2];
  console.log(findDuplicates(inputArray));  // Output: [1, 2]
  