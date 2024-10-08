function findThirdHighestAndLowest(arr) {
    // Remove duplicates by using Set and then convert it back to an array
    let uniqueArr = [...new Set(arr)];

    // Sort the array in ascending order
    uniqueArr.sort((a, b) => a - b);

    // Check if array has enough elements
    if (uniqueArr.length < 3) {
        return "Array does not have enough elements!";
    }

    // Get the third lowest and third highest elements
    let thirdLowest = uniqueArr[2]; // Third element after sorting (0-based index)
    let thirdHighest = uniqueArr[uniqueArr.length - 3]; // Third element from the end

    return {
        thirdLowest: thirdLowest,
        thirdHighest: thirdHighest
    };
}

// Example usage:
let arr = [4, 8, 1, 10, 9, 6, 3, 5];
let result = findThirdHighestAndLowest(arr);
console.log(result);
