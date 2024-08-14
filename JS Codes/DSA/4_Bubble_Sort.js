function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Traverse the array up to the last unsorted element
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no elements were swapped, the array is already sorted
    if (!swapped) break;
  }

  return arr;
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));

/*
Steps of Bubble Sort
Start at the beginning: Begin with the first element of the array.

Compare adjacent elements: Compare each pair of adjacent elements 
and swap them if they are in the wrong order 
(e.g., if the first element is greater than the second).

Pass through the list: Continue this process for the entire array. 
After each pass, the largest unsorted element will be placed at the end of the list.

Repeat: Reduce the size of the unsorted portion of the array by one 
and repeat the process until no swaps are needed, indicating that the array is sorted.
*/

/*
Time complexity : O(n^2)
Space Complexity: O(1)
*/
