function* generatorFunction() {
  console.log("Step 1");
  yield 1; // Pauses here
  console.log("Step 2");
  yield 2; // Pauses here
  console.log("Step 3");
  return 3; // Ends here
}

const gen = generatorFunction();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }

/*Generators pause at each yield, and the event loop handles 
other tasks while waiting for the generator to resume. */

/*******************************************************************************/
//using promise
// Simulating an asynchronous operation with a Promise
function asyncOperation(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 1000); // Simulates a delay of 1 second
  });
}

// Generator function that yields Promises
function* generatorFunction() {
  console.log("Step 1");
  const value1 = yield asyncOperation(1); // Pauses here
  console.log("Step 2, received:", value1);
  const value2 = yield asyncOperation(2); // Pauses here
  console.log("Step 3, received:", value2);
  return 3; // Ends here
}

// Function to run the generator function
async function runGenerator(gen) {
  const iterator = gen();

  // Helper function to handle the iteration
  async function handleNext(iteratorResult) {
    if (iteratorResult.done) return iteratorResult.value;

    // Wait for the Promise to resolve
    const value = await iteratorResult.value;
    return handleNext(iterator.next(value));
  }

  await handleNext(iterator.next()); // Start the generator
}

// Run the generator function
runGenerator(generatorFunction);
