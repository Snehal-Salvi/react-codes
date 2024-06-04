// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "cooding"
// Output: 0
// Example 2:
// Input: s = "lovelocode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

function uniqueChar(str) {
  // Create a character count object to store the frequency of each character
  const charCount = {};

  // Iterate through each character in the string
  for (let char of str) {
    // If the character is already in charCount, increment its value
    // Otherwise, set its value to 1
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeating character
  for (let i = 0; i < str.length; i++) {
    // If the character's count is 1, it is the first non-repeating character
    if (charCount[str[i]] === 1) {
      return i; // Return the index of the first non-repeating character
    }
  }

  // If no non-repeating character is found, return -1
  return -1;
}

// Test cases
console.log(uniqueChar("cooding")); // Output: 0
console.log(uniqueChar("lovelocode")); // Output: 2
console.log(uniqueChar("aabb")); // Output: -1
