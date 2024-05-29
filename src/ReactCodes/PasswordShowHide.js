import { useState } from "react";
import "./styles.css";

export default function App() {
  const [password, setPassword] = useState(true);

  const handleTogglePassword = () => {
    setPassword(!password);
  };

  return (
    <div className="App">
      <input placeholder="password" type={password ? "password" : "text"} />
      <button onClick={handleTogglePassword}>
        {password ? "Show Password" : "Hide Password"}
      </button>
    </div>
  );
}
