function findNthHighestAndLowest(arr, n) {
    // Remove duplicates by using Set and then convert it back to an array
    let uniqueArr = [...new Set(arr)];

    // Sort the array in ascending order
    uniqueArr.sort((a, b) => a - b);

    // Check if array has enough elements
    if (uniqueArr.length < n) {
        return `Array does not have ${n} elements!`;
    }

    // Get the nth lowest and nth highest elements
    let nthLowest = uniqueArr[n - 1]; // nth element after sorting (0-based index)
    let nthHighest = uniqueArr[uniqueArr.length - n]; // nth element from the end

    return {
        nthLowest: nthLowest,
        nthHighest: nthHighest
    };
}

// Example usage:
let arr = [4, 8, 1, 10, 9, 6, 3, 5];
let n = 3;
let result = findNthHighestAndLowest(arr, n);
console.log(result);
