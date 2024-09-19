/*An anagram is a word or phrase formed by rearranging the letters of another word 
or phrase, using all the original letters exactly once.
 */
function findAnagrams(str) {
    const results = [];
  
    // Base case
    if (str.length === 1) {
      return [str];
    }
  
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      const remainingAnagrams = findAnagrams(remainingChars);
  
      // Concatenate the current character to each of the anagrams of the remaining characters
      for (let anagram of remainingAnagrams) {
        results.push(currentChar + anagram);
      }
    }
  
    return results;
  }
  
  // Example usage
  const inputString = "abc";
  const anagrams = findAnagrams(inputString);
  console.log(anagrams);
  