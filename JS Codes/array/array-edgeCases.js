function any(arr) { 
    // Check if the input is undefined
    if (arr === undefined) {
      return "Please pass an array";
    }
  
    // Check if the input is not an array
    if (!Array.isArray(arr)) {
      return "Input must be an array";
    }
  
    // Check if the array is empty
    if (arr.length === 0) {
      return "Empty Array";
    }
  
    // Check if the array contains non-primitive values like objects, arrays, functions
    if (arr.some(item => typeof item === 'object' && item !== null)) {
      return "Array contains complex data types";
    }
  
    // Check if the array contains NaN values
    if (arr.some(item => Number.isNaN(item))) {
      return "Array contains NaN";
    }
  
    // Check if the array contains undefined or null values
    if (arr.some(item => item === undefined || item === null)) {
      return "Array contains undefined or null values";
    }
  
    // Check if the array contains negative numbers
    if (arr.some(item => typeof item === 'number' && item < 0)) {
      return "Array contains negative numbers";
    }
  
    return "Array is valid";
  }
  