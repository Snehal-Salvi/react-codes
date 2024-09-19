function removeSpecialCharacters(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    // Check if the character is alphanumeric or space
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9") ||
      char === " "
    ) {
      result += char;
    }
  }

  return result;
}

// Test the function
const inputString = "my name is abcc!@#";
const result = removeSpecialCharacters(inputString);
console.log(result); // Output: "my name is abc"
