function findSubstrings(str) {
    let substrings = [];  // Array to store all substrings
  
    // Outer loop to iterate through each starting index of the string
    for (let i = 0; i < str.length; i++) {
      
      // Inner loop to create substrings starting from index i
      for (let j = i + 1; j <= str.length; j++) {
        substrings.push(str.slice(i, j));  // Add each substring to the array
      }
    }
  
    return substrings;  // Return the array of all substrings
  }
  
  // Example usage
  const inputString = "abc";
  console.log(findSubstrings(inputString));
  // Output: ["a", "ab", "abc", "b", "bc", "c"]
  