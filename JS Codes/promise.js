//check even odd using promise
function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is odd`);
    }
  });
}

checkEvenNumber(4)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//using async await

function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is odd`);
    }
  });
}

async function checkNumberAsync(number) {
  try {
    const message = await checkEvenNumber(number);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

checkNumberAsync(4);

//execute after some delay

function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is odd`);
    }
  });
}

function executeAfterDelay(number, delay) {
  setTimeout(() => {
    checkEvenNumber(number)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, delay);
}

executeAfterDelay(4, 3000);

//using async await

function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is even`);
    } else {
      reject(`${number} is odd`);
    }
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executeAfterDelay(number, ms) {
  await delay(ms);
  try {
    const message = await checkEvenNumber(number);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

executeAfterDelay(4, 3000);
executeAfterDelay(5, 3000);
