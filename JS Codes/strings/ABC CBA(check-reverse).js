function checkReversedWords(str) {

  if (!str) {
    return false;
  }

  // Split the string into two words
  const words = str.split(" ");

  // Ensure there are exactly two words
  if (words.length !== 2) {
    return false;
  }

  // Get the first and second words
  const firstWord = words[0];
  const secondWord = words[1];

  // Reverse the first word
  const reversedFirstWord = firstWord.split("").reverse().join("");

  // Check if the reversed first word equals the second word
  return reversedFirstWord === secondWord;
}

// Example usage
console.log(checkReversedWords("ABC CBA")); // Output: true

/**************************************************************/
// Code Without Built-in Methods

function checkReversedWords(str) {
    if (!str) {
      return false;
    }
  
    // Split the string into two words manually
    let words = [];
    let currentWord = "";
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        words.push(currentWord);
        currentWord = "";
      } else {
        currentWord += str[i];
      }
    }
    words.push(currentWord); // Add the last word
  
    // Ensure there are exactly two words
    if (words.length !== 2) {
      return false;
    }
  
    // Get the first and second words
    const firstWord = words[0];
    const secondWord = words[1];
  
    // Reverse the first word manually
    let reversedFirstWord = "";
    for (let i = firstWord.length - 1; i >= 0; i--) {
      reversedFirstWord += firstWord[i];
    }
  
    // Check if the reversed first word equals the second word
    return reversedFirstWord === secondWord;
  }
  
  // Example usage
  console.log(checkReversedWords("ABC CBA")); // Output: true
  console.log(checkReversedWords("Hello olleH")); // Output: true
  console.log(checkReversedWords("Open nope")); // Output: false
  console.log(checkReversedWords("Test tset")); // Output: true
  console.log(checkReversedWords("One word")); // Output: false
  