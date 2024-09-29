function rotateArray(arr) {
    if (arr.length === 0) return arr;  // Check for empty array
  
    const lastElement = arr[arr.length - 1];  // Store the last element
    // Shift elements to the right
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];  // Move each element to the next position
    }
    arr[0] = lastElement;  // Place the last element at the first position
  
    return arr;  // Return the rotated array
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const rotatedArray = rotateArray(arr);
  console.log(rotatedArray);  // Output: [5, 1, 2, 3, 4]
  