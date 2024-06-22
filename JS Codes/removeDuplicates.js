function removeDuplicates(array) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

// Test the function
const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]
