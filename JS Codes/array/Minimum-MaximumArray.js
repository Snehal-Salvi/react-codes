function findMinMax(arr) {
    // Initialize min and max with the first element of the array
    let min = arr[0];
    let max = arr[0];
  
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];  // Update min if current element is smaller
      }
  
      if (arr[i] > max) {
        max = arr[i];  // Update max if current element is larger
      }
    }
  
    return { min, max };  // Return both min and max as an object
  }
  
  // Example usage
  const inputArray = [5, 2, 9, 1, 7, 6];
  const result = findMinMax(inputArray);
  console.log(`Min: ${result.min}, Max: ${result.max}`);  // Output: Min: 1, Max: 9
  