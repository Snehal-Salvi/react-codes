import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
      } else {
        setMessage("Passwords match");
      }
    } else {
      setMessage("Please fill out both fields");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {message && (
        <p style={{ color: message === "Passwords match" ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}
