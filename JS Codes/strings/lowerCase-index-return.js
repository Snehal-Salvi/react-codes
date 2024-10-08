//Write a function in and given string if you find a lowercase letter, written that index

function findLowercaseIndices(str) {
  const indices = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      // If the character is a lowercase letter
      indices.push(i);
    }
  }

  return indices;
}

// Example usage
const inputString = "AbCDEFGHIJ";
const result = findLowercaseIndices(inputString);
console.log(result); // Output: [ 1 ]
