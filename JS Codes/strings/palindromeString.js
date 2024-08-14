// program to check if the string is palindrome or not

function isPalindromeString(str) {
  let start = 0; // Start pointer
  let end = str.length - 1; // End pointer

  while (start < end) {
    if (str[start] !== str[end]) {
      return false; // Characters don't match, so it's not a palindrome
    }
    start++; // Move start pointer to the right
    end--; // Move end pointer to the left
  }

  return true; // All characters matched, so it's a palindrome
}

// Test the function
const string1 = "racecar";

console.log(isPalindromeString(string1)); // Outputs: true

//for loop method

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const string = "racecar";

// call the function
const value = checkPalindrome(string);

console.log(value);
