/*
Use call when you want to pass individual arguments 
and call the function immediately.
Use apply when you have an array of arguments 
and want to call the function immediately.
Use bind when you need to create a new function with 
a specific this context for later execution.
 */

// Call:
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

// Calling greet with `this` set to `person`
greet.call(person, "Hello", "!");
// Output: "Hello, Alice!"

//apply
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Bob" };
const args = ["Hi", "!!"];

// Calling greet with `this` set to `person` and arguments as an array
greet.apply(person, args);
// Output: "Hi, Bob!!"

//bind
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Charlie" };

// Creating a new function with `this` bound to `person`
const greetPerson = greet.bind(person, "Hey");

// You can call greetPerson later with additional arguments
greetPerson("!!!");
// Output: "Hey, Charlie!!!"
