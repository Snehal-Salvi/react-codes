let arr = [7, 5, 6, 9, 2, 3, 4];

function findMiddleElement(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    const midIndex = Math.floor(arr.length / 2);
    return arr[midIndex];
}

const middleElement = findMiddleElement(arr);
console.log(`Middle Element: ${middleElement}`);
