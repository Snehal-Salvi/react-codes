/**
Finds the length of the longest substring without repeating characters.
*/

function lengthOfLongestSubstring(s) {
  // Initialize a set to keep track of characters in the current window
  const charSet = new Set();
  // Initialize two pointers for the sliding window
  let left = 0,
    right = 0;
  // Variable to store the maximum length of substring without repeating characters
  let maxLength = 0;
  // Iterate through the string with the right pointer
  while (right < s.length) {
    // If the character at the right pointer is not in the set, add it to the set
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      // Update the maximum length if the current window is larger
      maxLength = Math.max(maxLength, right - left + 1);
      // Move the right pointer to the right
      right++;
    } else {
      // If the character is already in the set, remove the character at the left pointer
      // and move the left pointer to the right
      charSet.delete(s[left]);
      left++;
    }
  }
  return maxLength;
}
