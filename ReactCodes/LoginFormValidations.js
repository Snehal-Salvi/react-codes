import React, { useState } from "react";

/*check if email is in correct format and password 
length should be 6 and contain an uppercase lowercase and special charcters */
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
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
