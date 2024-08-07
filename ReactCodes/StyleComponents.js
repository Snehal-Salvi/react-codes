import React from "react";
import styled from "styled-components";

//install: npm install styled-components
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
