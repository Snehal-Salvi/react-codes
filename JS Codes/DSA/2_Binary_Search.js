function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2); // Calculate the middle index

    if (arr[middle] === target) {
      return middle; // Target found
    } else if (arr[middle] < target) {
      start = middle + 1; // Search in the right half
    } else {
      end = middle - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

const sortedArray = [2, 4, 6, 8, 10];
const target = 8;

const result = binarySearch(sortedArray, target);

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found");
}

/*
Binary search is an efficient algorithm for finding an element in a sorted array
he idea behind binary search is to repeatedly divide the search interval in half 
and compare the middle element with the target value. 
If the middle element is equal to the target, the search is successful. 
 If the target is smaller, the search continues in the left half, 
 and if the target is larger, the search continues in the right half.
*/

/* time complexity 
Best-Case: O(1) — The target is found in the first comparison.

Worst-Case: O(log n) — The target is found at the extreme ends or is not present.

Average-Case: O(log n) — The target is located somewhere in the middle after a few comparisons.
 */

/*
Time complexity : O(log n)
Space Complexity: O(1)
 */
