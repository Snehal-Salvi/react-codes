import React, { useState } from "react";
//when we type in input value will be shown below
export const InputText = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </>
  );
};
