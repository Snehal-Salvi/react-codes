/*
The spread operator is used to expand  elements of an iterable into individual elements.
The Rest operator Collects multiple elements or properties into a single array or object.
 */

//Spread Operator (...)
let obj1 = { name: "Alice", age: 25 };
let obj2 = { ...obj1, city: "New York" };  // Copies obj1 and adds a new property

console.log(obj2);  // { name: "Alice", age: 25, city: "New York" }

//Rest operator (...)
let obj = { name: "Alice", age: 25, city: "New York" };
let { name, ...rest } = obj;  // Collects the rest of the properties into 'rest'

console.log(name);  // "Alice"
console.log(rest);  // { age: 25, city: "New York" }


