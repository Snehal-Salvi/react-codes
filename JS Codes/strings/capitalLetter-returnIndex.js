//Write a function in and given string if you find a capital letter, written that index

function findCapitalLettersIndices(str) {
    const indices = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            indices.push(i);
        }
    }
    
    return indices;
}

// Example usage
const inputString = "hellO";
const result = findCapitalLettersIndices(inputString);
console.log(result); // Output: [ 4 ]
