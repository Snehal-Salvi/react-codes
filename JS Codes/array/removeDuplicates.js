let array = [1, 1, 2, 2, 3, 3, 4, 4];

function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        // Using `===` for strict equality check
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates(array)); // Outputs: [1, 2, 3, 4]

//filter method
const array2 = [1, 2, 3, 4, 2, 3, 5];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const uniqueArray = removeDuplicates(array2);
console.log(uniqueArray); // Outputs: [1, 2, 3, 4, 5]

// set method
/*
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
*/
