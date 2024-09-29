function sort012(arr) {
    let low = 0;  // Pointer for the next position of 0
    let mid = 0;  // Pointer for the current element
    let high = arr.length - 1;  // Pointer for the next position of 2
  
    // Traverse through the array
    while (mid <= high) {
      if (arr[mid] === 0) {
        // If the element is 0, swap it with the low pointer
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
      } else if (arr[mid] === 1) {
        // If the element is 1, just move to the next element
        mid++;
      } else {
        // If the element is 2, swap it with the high pointer
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
      }
    }
  
    return arr;  // Return the sorted array
  }
  
  // Example usage
  const arr = [0, 1, 2, 0, 1, 2, 1, 0];
  const sortedArray = sort012(arr);
  console.log(sortedArray);  // Output: [0, 0, 0, 1, 1, 1, 2, 2]
  