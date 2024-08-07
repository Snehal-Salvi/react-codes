import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const checkPassword = () => {
    if (password === confirmPassword) {
      setMessage("Passwords match");
    } else {
      setMessage("Passwords do not match");
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={checkPassword}>Submit</button>

      <h1>{message}</h1>
    </div>
  );
}

//additional empty checks

import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const checkPassword = () => {
    if (!password || !confirmPassword) {
      setMessage("Please fill in both fields");
    } else if (password === confirmPassword) {
      setMessage("Passwords match");
    } else {
      setMessage("Passwords do not match");
    }
  };

  return (
    <div>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        id="confirm-password"
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={checkPassword}>Submit</button>
      <h1>{message}</h1>
    </div>
  );
}

