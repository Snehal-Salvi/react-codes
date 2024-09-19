/*slice(): Creates a new array from a portion of the original array.
splice(): Modifies the original array by adding or removing elements.
*/

// Slice
/*
array.slice(start, end);
start: The index at which to start extraction (inclusive).
end: The index at which to end extraction (exclusive). 
*/

const fruits = ["apple", "banana", "cherry", "date"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'banana', 'cherry', 'date'] (original array remains unchanged)

// Splice
/*
array.splice(start, deleteCount, item1, item2, ...);
start: The index at which to start changing the array.
deleteCount: The number of elements to remove (can be 0 if you only want to add items).
item1, item2, ...: Items to add to the array (optional).
*/

// Example (Removing Elements):
const fruits1 = ["apple", "banana", "cherry", "date"];
const removed = fruits1.splice(1, 2);
console.log(removed); // ['banana', 'cherry']
console.log(fruits1); // ['apple', 'date'] (original array modified)

// Example (Adding Elements):
const fruits2 = ["apple", "date"];
fruits.splice(1, 0, "banana", "cherry");
console.log(fruits2); // ['apple', 'banana', 'cherry', 'date'] (original array modified)
