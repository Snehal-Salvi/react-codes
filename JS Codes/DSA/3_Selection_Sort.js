function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the minimum is the first element
    let minIndex = i;

    // Traverse the unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array));

/*
Steps of Selection Sort:

Start from the beginning: Begin with the first element of the array. 
This is the starting point for finding the smallest element.

Find the minimum element: Traverse the unsorted portion of the array to find 
the smallest element.

Swap: Swap this smallest element with the first element of the unsorted portion.

Move the boundary: Move the boundary between the sorted 
and unsorted portions one element to the right.

Repeat: Repeat the process for the remaining unsorted portion 
of the array until the entire array is sorted.
 */

/*
Time complexity : O(n^2)
Space Complexity: O(1)
*/
