// Input:

// calculateAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()

// Output:
// 143545000

class AmountCalculator {
    constructor() {
      this.total = 0; // Initialize the total amount
    }
  
    // Method to add a specified number of lacs
    lacs(amount) {
      this.total += amount * 100000; // 1 lac = 100,000
      return this; // Return 'this' to allow method chaining
    }
  
    // Method to add a specified number of crores
    crore(amount) {
      this.total += amount * 10000000; // 1 crore = 10,000,000
      return this; // Return 'this' to allow method chaining
    }
  
    // Method to add a specified number of thousands
    thousand(amount) {
      this.total += amount * 1000; // 1 thousand = 1,000
      return this; // Return 'this' to allow method chaining
    }
  
    // Method to get the final computed value
    value() {
      return this.total; // Return the total amount
    }
  }
  
  // Function to create an instance of AmountCalculator and start the chain
  function calculateAmount() {
    return new AmountCalculator();
  }
  
  // Example usage:
  const result = calculateAmount()
    .lacs(15)         // Adds 15 lacs
    .crore(5)         // Adds 5 crores
    .crore(2)         // Adds 2 more crores
    .lacs(20)         // Adds 20 lacs
    .thousand(45)     // Adds 45 thousands
    .crore(7)         // Adds 7 more crores
    .value();         // Gets the final value
  
  console.log(result); // Output: 143545000
  

