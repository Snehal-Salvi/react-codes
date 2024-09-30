// API URL
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Fetching the data
fetch(url)
  .then((response) => {
    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    // Handle the data received from the API
    console.log("Data:", data);
  })
  .catch((error) => {
    // Handle errors, such as network issues or invalid responses
    console.error("There has been a problem with your fetch operation:", error);
  });

/*
1. fetch(url): Returns a promise that resolves when the network request finishes.
2. .then(response => ...): Runs when the request is successful and gets the HTTP response.
3. response.json(): Returns another promise that resolves 
when the response body is parsed as JSON.
4. .catch(error => ...): Handles any errors in the promise chain, such as network issues or JSON parsing failures.
 */

/******************************************************************/
//Using Async Await
const asyncAwait = async () => {
    try {
      // Await the fetch request and get the response
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  
      // Check if the response was successful
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
  
      // Await the parsing of the JSON data
      const data = await response.json();
  
      // Now you can work with the parsed data
      console.log('Bitcoin Price Index:', data);
    } catch (error) {
      // Handle any errors that occurred during the fetch or JSON parsing
      console.error('There has been a problem with your fetch operation:', error);
    }
  };
  
  // Call the function
  asyncAwait();
  
