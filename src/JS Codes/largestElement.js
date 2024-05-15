function findLargestElement(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for empty arrays
    }

    let largest = arr[0]; // Initialize largest to the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if a larger element is found
        }
    }

    return largest;
}

// Test the function
const array = [5, 2, 9, 11, 3, 6];
console.log("Largest element:", findLargestElement(array)); // Output: 11
