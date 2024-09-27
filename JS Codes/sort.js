const numbers = [10, 2, 1, 21, 100];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers); // Output: [1, 10, 100, 2, 21]

//ascending order
const numbers = [10, 2, 1, 21, 100];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 10, 21, 100]

//descending  order
const numbers = [10, 2, 1, 21, 100];
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers); // Output: [ 100, 21, 10, 2, 1 ]

//Sorting Order: The default sort method in JavaScript sorts elements as strings. 
