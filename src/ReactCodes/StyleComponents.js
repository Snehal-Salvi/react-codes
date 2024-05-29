import React from "react";
import styled from "styled-components";

// Define the styled component
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
`;

const App = () => {
  return (
    <div>
      <Box>This is a styled component</Box>
    </div>
  );
};

export default App;
