import React from "react";
import Collapsible from "./collapsible";

const App = () => {
  return (
    <div className="App">
      <h1>Collapsible Component Example</h1>
      <Collapsible
        title="Section 1"
        content={<p>This is the content of section 1.</p>}
      />
      <Collapsible
        title="Section 2"
        content={<p>This is the content of section 2.</p>}
      />
      <Collapsible
        title="Section 3"
        content={<p>This is the content of section 3.</p>}
      />
    </div>
  );
};

export default App;
