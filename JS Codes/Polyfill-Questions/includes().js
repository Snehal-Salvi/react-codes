/*The includes() method determines whether an array includes a 
certain value among its entries, returning true or false as appropriate. */

// Check if 'includes' method doesn't exist on Array.prototype
if (!Array.prototype.includes) {
  // Define the 'includes' method as a polyfill
  Array.prototype.includes = function (element) {
    // Use 'indexOf' to check if the element exists in the array
    // 'indexOf' returns -1 if the element is not found
    // We return true if the element is found (index !== -1), otherwise false
    return this.indexOf(element) !== -1;
  };
}

// Test case 1: Element exists in the array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // Expected output: true
// Explanation: 3 exists in the array, so it should return true.
