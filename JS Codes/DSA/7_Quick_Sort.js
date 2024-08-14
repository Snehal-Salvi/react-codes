function quickSort(arr) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (here we choose the last element as the pivot)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition the array into left and right based on the pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right sub-arrays and concatenate with pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/*
Steps of Quick Sort
Choose a Pivot: Select an element from the array to act as the pivot.
Partition: Reorder the array so that all elements with values less than the pivot 
come before it, and all elements with values greater than the pivot come after it. 
After the partitioning, the pivot is in its final position.
Recursively Apply: Recursively apply the above steps to the sub-arrays 
of elements with smaller and larger values.
*/

/*
Time complexity : O(n log n)
Space Complexity: O(log n)
*/

