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

//using recursion
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str[0];
  }
}

const reversedStr = reverseString("hello");
console.log(reversedStr); // Outputs: "olleh"
