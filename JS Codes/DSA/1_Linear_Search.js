const array = [10, 20, 30, 40, 50];
const target = 40;

function linearSearch(arr, target) {
  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target, return the index
    if (arr[i] === target) {
      return i;
    }
  }
  // If the target is not found, return -1
  return -1;
}

const result = linearSearch(array, target);

if (result === -1) {
  console.log("Element not found");
} else {
  console.log("Element found at index " + result);
}

/*
Linear search is a simple searching algorithm that checks every element in a 
list sequentially until it finds the target value. 
It's straightforward but not the most efficient, especially for large datasets. 

Here's how a linear search works:

Start at the first element of the array.
Compare the target value with the current element.
If the current element matches the target, return its index.
If the current element does not match, move to the next element.
Repeat steps 2-4 until you either find the target or reach the end of the list.
If the target is not found in the list, return -1. */

/*
time complexity for linear search:

Best Case: O(1) - The target is the first element.

Worst Case: O(n) - The target is the last element or not in the array.

Average Case: O(n) - The target is somewhere in the middle. */

/*
Time complexity : O(n) 
Space Complexity: O(1)
 */
