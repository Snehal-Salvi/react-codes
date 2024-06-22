// Function that takes a callback function as an argument
function doSomethingAsync(callback) {
    setTimeout(function() {
        console.log("Async operation completed.");
        // Execute the callback function
        callback();
    }, 2000); // Simulating an asynchronous operation that takes 2 seconds to complete
}

// Callback function to be executed after the asynchronous operation
function callbackFunction() {
    console.log("Callback function executed.");
}

// Calling the function and passing the callback function as an argument
doSomethingAsync(callbackFunction);
