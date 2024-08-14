function mergeSort(arr) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right arrays, and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from the left and right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/*
Steps of Merge Sort (Its uses recursion)
Divide: The array is divided into two halves.
Conquer: Each half is sorted recursively.
Merge: The two sorted halves are merged back into a single sorted array.
 */

/*
Time complexity : O(n log n)
Space Complexity: O(n)
*/
