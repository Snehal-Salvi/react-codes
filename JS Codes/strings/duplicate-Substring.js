function findDuplicateSubstring(str) {
    let longestDuplicate = "";  // Variable to store the longest duplicate substring
  
    // Outer loop to iterate through each starting index of the string
    for (let i = 0; i < str.length; i++) {
      
      // Inner loop to compare substrings starting at different indices
      for (let j = i + 1; j < str.length; j++) {
        let k = 0;  // Variable to track the length of matching characters
        
        // Compare characters from index i and j while they match and are within bounds
        while (j + k < str.length && str[i + k] === str[j + k]) {
          k++;  // Keep counting matching characters
        }
  
        // If the matched substring is longer than the previously found longest duplicate
        if (k > longestDuplicate.length) {
          // Update the longest duplicate substring
          longestDuplicate = str.slice(i, i + k);
        }
      }
    }
  
    return longestDuplicate;  // Return the longest duplicate substring found
  }
  
  // Example usage
  const inputString = "banana";
  console.log(findDuplicateSubstring(inputString)); // Output: "ana"
  