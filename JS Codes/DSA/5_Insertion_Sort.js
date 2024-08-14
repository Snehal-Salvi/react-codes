function insertionSort(arr) {
  // Start from the second element (index 1) since the first element is considered sorted
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // The element to be inserted in the sorted part
    let j = i - 1; // Start comparing with the element before the key

    // Shift elements of the sorted part that are greater than the key to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Insert the key element into its correct position
    arr[j + 1] = key;
  }

  return arr;
}

const array = [20, 10, 30, 40, 50];
console.log(insertionSort(array));

/*
Start from the second element: Consider the first element of the array as sorted. 
Begin with the second element as the key element.

Compare the key element with the previous elements: 
If the key element is smaller than its predecessor, compare it to the elements before. 
Move the greater elements one position up to make space for the swapped element.

Insert the key element: 
Once you find the correct position, insert the key element in its right place.

Repeat: Repeat the process for all the elements in the array.
*/

/*
Time complexity : O(n^2)
Space Complexity: O(1)
*/