/**
 * Finds the length of the longest substring without repeating characters.
 */
function lengthOfLongestSubstring(s) {
  let map = {}; // Object to store the last seen index of each character
  let start = 0; // The starting index of the current substring without repeating characters
  let maxLen = 0; // The maximum length of the substring found so far
  let arr = s.split(""); // Convert the string into an array of characters

  // Loop through the string, character by character
  for (let i = 0; i < s.length; i++) {
    let current = map[arr[i]]; // Get the last seen index of the current character

    // If the character was seen before and its last seen index is within the current window
    if (current != null && start <= current) {
      start = current + 1; // Move the start index to the right of the last occurrence of the current character
    } else {
      // Update maxLen if the current substring length is greater than the previously recorded maxLen
      maxLen = Math.max(maxLen, i - start + 1);
    }

    map[arr[i]] = i; // Update the last seen index of the current character
  }

  return maxLen; // Return the length of the longest substring without repeating characters
}

// Example usage:
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output: 3
