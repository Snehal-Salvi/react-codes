// arr = ["flowers","flow","float","fly"]
// output"fl"

//longest common substring

function longestCommonSubStr(strs) {
  if (strs.length === 0) return "";

  // Start by assuming the first string is the longest common prefix
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
          // Reduce the prefix by one character at a time
          prefix = prefix.substring(0, prefix.length - 1);
          // If we reduce it to an empty string, there is no common prefix
          if (prefix === "") return "";
      }
  }

  return prefix;
}

// Example usage:
let arr = ["flowers", "flow", "float", "fly"];
console.log(longestCommonSubStr(arr));  // Output: "fl"
