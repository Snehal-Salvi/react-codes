import React, { useState } from "react";

export default function App() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const inputAge = e.target.value;
    setAge(inputAge);

    if (inputAge >= 18) {
      setMessage("Above 18");
    } else {
      setMessage("Error: Age less than 18");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
      />
      <p>{message}</p>
    </div>
  );
}

/****************************************************************************/
/* To optimize the solution further, you can consider the following improvements:

1. Debounce the input to avoid running the logic on every keypress, 
which is especially useful for large forms.

2.Use parseInt for input validation to ensure proper number comparison.

3. Conditional rendering: Display the message only when the input is not empty.*/

import React, { useState } from "react";

export default function App() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const inputAge = parseInt(e.target.value, 10);
    setAge(e.target.value);

    if (!isNaN(inputAge)) {
      setMessage(inputAge >= 18 ? "Above 18" : "Error: Age less than 18");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
      />
      {age && <p>{message}</p>}
    </div>
  );
}
