function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // Swap elements at start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move towards the center of the array
        start++;
        end--;
    }

    return arr;
}

// Test the function
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]
