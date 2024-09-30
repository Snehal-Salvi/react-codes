// Function that checks if a number is even or odd using a Promise
function isEvenOdd(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject("Input must be a number");
    } else if (number % 2 === 0) {
      resolve("The number is even");
    } else {
      resolve("The number is odd");
    }
  });
}

// Async function to check even/odd using await
async function checkEvenOdd(number) {
  try {
    const result = await isEvenOdd(number);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Call the async function
checkEvenOdd(10); // Output: The number is even
checkEvenOdd(7); // Output: The number is odd

/*****************************************************************/
//using setTimeout

function isEvenOdd(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof number !== "number") {
          reject("Input must be a number");
        } else if (number % 2 === 0) {
          resolve("The number is even");
        } else {
          resolve("The number is odd");
        }
      }, 5000); // Simulating a delay of 5 second
    });
  }
  
  // Async function to check even/odd using await
  async function checkEvenOdd(number) {
    try {
      const result = await isEvenOdd(number);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Call the async function
  checkEvenOdd(10);  // Output: The number is even
  checkEvenOdd(7);   // Output: The number is odd
  
