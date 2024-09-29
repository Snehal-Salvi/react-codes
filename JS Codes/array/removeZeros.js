const arr = [0, 1, 2, 0, 3, 4, 0, 5];
const filteredArray = [];

// Loop through the original array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    filteredArray.push(arr[i]); // Add non-zero values to the new array
  }
}

console.log(filteredArray); // Output: [1, 2, 3, 4, 5]

/******************************************************/
//filter method
const arr = [0, 1, 2, 0, 3, 4, 0, 5];

// Use filter to remove zero values
const filteredArray = arr.filter((value) => value !== 0);

console.log(filteredArray); // Output: [1, 2, 3, 4, 5]
