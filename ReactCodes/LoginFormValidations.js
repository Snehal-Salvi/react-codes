/*check if email is in correct format and password 
length should be 6 and contain an uppercase lowercase and special charcters */
import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/><,.\-\]\\\[\\|]).{6,}$/;
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long");
      return false;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateEmail() && validatePassword()) {
      // Perform login action
      setErrorMessage("");
      setSuccessMessage("Login successful!"); // Set success message
    }
  };

  return (
    <div className="App">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Display success message */}
    </div>
  );
}


/**************************************************************************/
// Optimization
/*
1. Debouncing Input: Use a debounce function to delay the validation checks 
until the user stops typing for a specified duration.

2. Throttling Function Calls: You can throttle the execution of the 
login action to ensure it's not called too frequently.
 */

import React, { useState, useEffect } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/><,.\-\]\\\[\\|]).{6,}$/;
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long");
      return false;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateEmail() && validatePassword()) {
      // Perform login action
      setErrorMessage("");
      // Add login logic here
    }
  };

  // Debounce state updates
  useEffect(() => {
    const timer = setTimeout(() => {
      if (email || password) {
        setErrorMessage("");
      }
    }, 300); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [email, password]);

  return (
    <div className="App">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
