//The this keyword in JavaScript refers to the context in which a function is called.
/*
Global context: this refers to the global object.
Regular function: this refers to the global object (or undefined in strict mode).
Object method: this refers to the object itself.
Constructor function: this refers to the new object being created.
Arrow function: this inherits from the surrounding lexical context.
 */

// 1. Global context
console.log(this); // In a browser, this will log the Window object

// 2. Inside a Function
function showThis() {
  console.log(this);
}
showThis(); // Logs the global object (Window) in non-strict mode

// 3. Inside an Object Method

const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: "Hello, my name is Alice"

// 4. Inside a Constructor Function
function Person(name) {
  this.name = name;
}

const bob = new Person("Bob");
console.log(bob.name); // Output: "Bob"

// 5. Using this in an Arrow Function
const person2 = {
  name: "Charlie",
  greet: function () {
    const innerFunc = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
    innerFunc();
  },
};

person2.greet(); // Output: "Hello, my name is Charlie"
