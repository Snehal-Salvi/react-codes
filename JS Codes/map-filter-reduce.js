/*
map: Transforms each element and returns a new array.
filter: Selects elements that pass a test and returns a new array.
reduce: Aggregates all elements into a single value based on a reducer function.
*/

//map
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

//filter
//filter elements less than 3
const numbers = [0, 1, 2, 3, 4, 5];

const lessThanThree = numbers.filter((element) => element < 3);

console.log(lessThanThree); // [0, 1, 2]

//Reduce

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // 15
