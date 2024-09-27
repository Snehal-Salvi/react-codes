// Pure function
const square = (x) => x * x;

// Higher-order function
const map = (arr, func) => arr.map(func);

// Using map with a function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = map(numbers, square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

/*****************************************************/
//other eg
function sum(arr, operation) {
  return arr.reduce((acc, curr) => acc + operation(curr), 0);
}

function mul(x) {
  return x * 2;
}
let arr = [1, 2, 3, 4, 5];

let result = sum(arr, mul);

console.log(result); //30(sum is 15 and 15*2 = 30)
