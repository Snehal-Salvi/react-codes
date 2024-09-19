// for loop

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// ForEach

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});


// map
const numbers = [1, 2, 3, 4, 5];

numbers.map((number) => {
    console.log(number);
});

//another eg of map
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => {
    return number * number;
});

console.log(squaredNumbers);



