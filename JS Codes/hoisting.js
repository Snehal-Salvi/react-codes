// Using var
console.log(x); // Output: undefined (hoisted, but not initialized)
var x = 5;
console.log(x); // Output: 5 (x is initialized)

// Using let
console.log(y); //this line would throw ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10 (y is initialized)

// Using const
console.log(z); //this line would throw ReferenceError: Cannot access 'z' before initialization
const z = 15;
console.log(z); // Output: 15 (z is initialized)

// Additional example to show scope differences
function hoistingExample() {
  console.log(a); // Output: undefined (var is hoisted)
  var a = 20;

  // Using let inside the function
  console.log(b); //this line would throw ReferenceError: Cannot access 'b' before initialization
  let b = 25;
  console.log(b); // Output: 25

  // Using const inside the function
  console.log(c); //this line would throw ReferenceError: Cannot access 'c' before initialization
  const c = 30;
  console.log(c); // Output: 30
}

hoistingExample();
