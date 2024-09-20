// The simplest way to remove duplicates is by using a Set, which only allows unique values.

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
