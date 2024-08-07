function findSmallestElement(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for empty arrays
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr[0] = arr[i]; // Update the first element if a smaller one is found
    }
  }

  return arr[0];
}

// Test the function
const array = [5, 2, 9, 11, 3, 6];
console.log("Smallest element:", findSmallestElement(array)); // Output: 2
