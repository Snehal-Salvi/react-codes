function findMaxElement(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for empty arrays
    }
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[0]) {
        arr[0] = arr[i]; // Update the first element if a larger one is found
      }
    }
  
    return arr[0];
  }
  
  // Test the function
  const array = [5, 2, 9, 11, 3, 6];
  console.log("Largest element:", findMaxElement(array)); // Output: 11

  //in java
  public class MaxElementFinder {
  
    public static int findMaxElement(int[] arr) {
      if (arr.length == 0) {
        return Integer.MIN_VALUE; // Return a special value for empty arrays
      }
  
      // Use the first element as the initial maximum value
      for (int i = 1; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
          arr[0] = arr[i]; // Update the first element if a larger one is found
        }
      }
  
      return arr[0];
    }
  
    public static void main(String[] args) {
      int[] array = {5, 2, 9, 11, 3, 6};
      System.out.println("Largest element: " + findMaxElement(array)); // Output: 11
    }
  }
  
  