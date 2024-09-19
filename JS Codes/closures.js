//Let's break example of  createCounter function to understand how closures work

//first i will show you using normal function
//i  want to create counter
function createCounter() {
  let count = 0;
  count++;
  return count;
}

console.log(createCounter()); // Outputs: 1
console.log(createCounter()); // Outputs: 1
console.log(createCounter()); // Outputs: 1
//here Each time createCounter() is called,
//it creates a new instance of count and initializes it to 0.

// now lets do it with closure

function createCounter() {
  let count = 0; // This variable is part of the closure

  return function () {
    count++; // The returned function has access to `count`
    return count;
  };
}

const counter = createCounter(); // `counter` is a closure

console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

//here counter retains its state between calls.
//A closure is a function having access to the parent scope,
//even after the parent function has closed.

//another example
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // Inner function has access to the outerVariable
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I am from outer function"
