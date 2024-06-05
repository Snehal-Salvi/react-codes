/*The Object.freeze method in JavaScript is used to make 
an object immutable. This means that once an object is frozen, 
you cannot add, delete, or modify its properties. */

const obj = {
  prop: 42,
  nested: {
    innerProp: 100,
  },
};

Object.freeze(obj);

obj.prop = 33; // This will have no effect
delete obj.prop; // This will also have no effect
obj.newProp = "new"; // This will have no effect
obj.nested.innerProp = 200; // This will work because nested objects are not deeply frozen

console.log(obj);
// Output: { prop: 42, nested: { innerProp: 100 } }

// ***********************************************************
// freeze the property Id so that no one can modify
const user = {
  id: 123,
  name: "John Doe",
  add: {
    city: "Mumbai",
    state: "Maharashtra",
  },
};

// freeze the property Id so that no one can modify
Object.defineProperties(user, { id: { writable: false } });

user.id = 456;
user.name = "Jeh";

console.log(user.id); // 123
console.log(user.name); // Jeh
