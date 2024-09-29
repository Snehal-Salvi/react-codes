// Create an Array
const no = [4, 8, 2, 1, 3, 6];

// Sort the Array
no.sort();

console.log(no);

/************************************************/
//without sort Method use bubble sort algorithm 

function bubbleSort(arr) {
    let n = arr.length;
  
    // Outer loop to iterate through the entire array
    for (let i = 0; i < n - 1; i++) {
      // Inner loop to compare adjacent elements
      for (let j = 0; j < n - i - 1; j++) {
        // Swap if the current element is greater than the next one
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;  // Return the sorted array
  }
  
  // Example usage
  const no = [4, 8, 2, 1, 3, 6];
  const sortedArray = bubbleSort(no);
  console.log(sortedArray);  // Output: [1, 2, 3, 4, 6, 8]
  