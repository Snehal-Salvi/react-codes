// Function that returns a Promise
function fetchData() {
    return new Promise(resolve => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            // Resolve the Promise with the fetched data
            resolve(data);
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the Promise
fetchData()
    .then(data => console.log(data.message)) // Output: "Data fetched successfully"
    .catch(error => console.error(error.message));


    // *******************************
    // async await

    // Function that returns a Promise
function fetchData() {
    return new Promise(resolve => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            // Resolve the Promise with the fetched data
            resolve(data);
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using async/await
async function getData() {
    try {
        // Wait for the Promise to resolve and store the result in a variable
        const data = await fetchData();
        console.log(data.message); // Output: "Data fetched successfully"
    } catch (error) {
        console.error(error.message);
    }
}

// Calling the async function
getData();
