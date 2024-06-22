function isPalindromeNumber(num) {
  // Negative numbers are not palindromes
  if (num < 0) return false;

  // Store the original number
  const originalNum = num;
  let reversedNum = 0;

  // Reverse the number mathematically
  while (num > 0) {
    const lastDigit = num % 10; // Get the last digit
    reversedNum = reversedNum * 10 + lastDigit; // Append the last digit to the reversed number
    num = Math.floor(num / 10); // Remove the last digit from the number
  }

  // Check if the original number is equal to the reversed number
  return originalNum === reversedNum;
}

// Example usage:
const number = 121;
console.log(isPalindromeNumber(number)); // Output: true

const anotherNumber = 123;
console.log(isPalindromeNumber(anotherNumber)); // Output: false
