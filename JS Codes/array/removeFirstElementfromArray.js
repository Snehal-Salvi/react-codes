let no = [0,1,2,3,4,5];

// Remove the first element
let removedFirst = no.shift();

console.log(no); // Output: [ 1, 2, 3, 4, 5 ]
console.log(removedFirst); // 0

// ************************************************************

//without shift
let no1 = [0, 1, 2, 3, 4, 5];

// Remove the first element without using shift
let removedFirst1 = no1[0]; // Store the first element
no1 = no1.slice(1); // Create a new array without the first element

console.log(no1); // Output: [ 1, 2, 3, 4, 5 ]
console.log(removedFirst1); // Output: 0

