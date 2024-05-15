function capitalizeFirstLetterEachWord(inputString) {
    let words = inputString.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") { // To handle multiple spaces between words
            let firstLetter = words[i][0];
            let capitalizedFirstLetter = firstLetter.toUpperCase();
            words[i] = capitalizedFirstLetter + words[i].slice(1);
        }
    }
    return words.join(" ");
}

// Test the function
const inputString = "hello world like this";
console.log(capitalizeFirstLetterEachWord(inputString)); // Output: "Hello World Like This"
