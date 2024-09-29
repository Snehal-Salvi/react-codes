// Create an array
const no = [4, 8, 2, 1, 3, 6];

// Sort the array in ascending order
no.sort();

// Reverse the array to get it in descending order
no.reverse();

console.log(no); // Output: [8, 6, 4, 3, 2, 1]

/***************************************************************/
//without reverse method
const no = [4, 8, 2, 1, 3, 6];

// Sort the array in descending order using a comparison function
no.sort((a, b) => b - a);

console.log(no); // Output: [8, 6, 4, 3, 2, 1]

/****************************************************************/
//without sort Method use bubble sort algorithm

function bubbleSortDescending(arr) {
  let n = arr.length;

  // Outer loop to iterate through the array
  for (let i = 0; i < n - 1; i++) {
    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the current element is less than the next one
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr; // Return the sorted array
}

// Example usage
const no = [4, 8, 2, 1, 3, 6];
const sortedArray = bubbleSortDescending(no);
console.log(sortedArray); // Output: [8, 6, 4, 3, 2, 1]
