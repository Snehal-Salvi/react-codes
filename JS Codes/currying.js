// Normal function with multiple parameters
function add(a, b, c) {
  return a + b + c;
}

const sum = add(1, 1, 1);
console.log(sum);

// Curried version of the add function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using curried function
const result = curriedAdd(2)(3)(4);
console.log(result); // Output: 9
