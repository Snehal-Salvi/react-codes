// //Reverse each word from the sentence
// // (Note: without using any built-in function) i/n -> "my name is abc" o/p-> "ym eman si cba"

function reverseWords(sentence) {
  let reversedSentence = "";
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      word = sentence[i] + word;
    } else {
      reversedSentence += word + " ";
      word = "";
    }
  }

  // Add the last word
  reversedSentence += word;

  return reversedSentence;
}
// ******************************
// Test the function
const inputSentence = "my name is abc";
const outputSentence = reverseWords(inputSentence);
console.log(outputSentence); // Output: "ym eman si cba"

//Reverse String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test the function
const inputString = "my name is abc";
console.log(reverseString(inputString)); // Output: "cba si eman ym"
