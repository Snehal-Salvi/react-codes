// *****************************
// for loop

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// *************************

const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers2 = [];

numbers2.forEach(function(number) {
    doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2); // Output: [2, 4, 6, 8, 10]

// *************************
// map
const numbers3 = [1, 2, 3, 4, 5];

const doubledNumbers3 = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers3); // Output: [2, 4, 6, 8, 10]

