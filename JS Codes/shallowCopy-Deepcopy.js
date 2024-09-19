/*Shallow copy: Copies the reference of an object to a new variable. 
If you make changes to the copied object’s nested properties, 
the original object will be affected because they share the same reference.

Deep copy: Creates an entirely new object by copying only the values. 
If you make changes to the copied object, the original object will not be affected 
because they are completely independent.
 */

// shallow copy
let emp = {
  name: "ABC",
  age: 20,
};

console.log(emp.name); //ABC

let newEmp = emp; 
newEmp.name = "PQR";
console.log(emp.name); //PQR

// *******************
// deep copy

let emp = {
  name: "ABC",
  age: 20,
};

// Deep copy using JSON methods
let newEmp = JSON.parse(JSON.stringify(emp));

// Modify the copy
newEmp.name = "PQR";

// Check the original object
console.log(emp.name); // Outputs "ABC"
console.log(newEmp.name); // Outputs "PQR"


//shallow copy using spread operator

let emp = {
    name: "ABC",
    age: 20,
    address: { city: "New York" }
}

// Shallow copy using spread operator
let newEmp = { ...emp };

// Modify the nested object in the copy
newEmp.address.city = "Los Angeles";

console.log(emp.address.city); // Outputs "Los Angeles" (original object affected)
