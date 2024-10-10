function moveZerosToEnd(arr) {
  let nonZeroArray = arr.filter((num) => num !== 0); // Filter out non-zero elements
  let zeroArray = arr.filter((num) => num === 0); // Filter out zero elements
  return [...nonZeroArray, ...zeroArray]; // Concatenate non-zero and zero elements
}

let arr = [0, 1, 0, 3, 12];
let result = moveZerosToEnd(arr);
console.log(result); // Output: [1, 3, 12, 0, 0]

/********************************************************************/

//without filter
function moveZerosToEnd(arr) {
  let count = 0; // Count of non-zero elements

  // Move all non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  // Fill remaining positions with zeros
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }

  return arr;
}

// Test cases
console.log(moveZerosToEnd([1, 2, 3, 4])); // Output: [1, 2, 3, 4]
console.log(moveZerosToEnd([0, 0, 0, 0])); // Output: [0, 0, 0, 0]
console.log(moveZerosToEnd([])); // Output: []
console.log(moveZerosToEnd([0])); // Output: [0]
console.log(moveZerosToEnd([5])); // Output: [5]
console.log(moveZerosToEnd([0, 0, 1, 0, 3, 0, 12])); // Output: [1, 3, 12, 0, 0, 0, 0]
console.log(moveZerosToEnd([-1, 0, -2, 0, -3])); // Output: [-1, -2, -3, 0, 0]
