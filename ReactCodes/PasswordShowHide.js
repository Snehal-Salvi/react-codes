import React, { useState } from 'react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input type={showPassword ? 'text' : 'password'} />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
  );
}
