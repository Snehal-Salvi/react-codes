function isPalindrome(num) {
  let originalNumber = num;
  let reverseNumber = 0;

  while (num > 0) {
    let digit = num % 10; // Extract the last digit
    reverseNumber = reverseNumber * 10 + digit; // Build the reversed number
    num = Math.floor(num / 10); // Remove the last digit
  }

  return originalNumber === reverseNumber; // Compare original number with reversed number
}

console.log(isPalindrome(121)); // Outputs: true
