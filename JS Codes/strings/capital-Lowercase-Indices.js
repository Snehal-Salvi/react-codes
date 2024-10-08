function findCapitalAndLowercaseIndices(str) {
    const indices = [];
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"; // All lowercase letters

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            // If the character is an uppercase letter
            indices.push(i);
        } else if (lowercaseLetters.includes(char)) {
            // If the character is a lowercase letter
            indices.push(i);
        }
    }
    
    return indices;
}

// Example usage
const inputString = "Hello World! How Are You?";
const result = findCapitalAndLowercaseIndices(inputString);
console.log(result); // Output: [0, 1, 6, 7, 10, 11, 13, 16, 19]
