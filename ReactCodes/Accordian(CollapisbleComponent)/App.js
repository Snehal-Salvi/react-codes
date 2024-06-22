import Accordion from "./Accordion";

const App = () => {
  const accordionItems = [
    { title: 'Section 1', content: 'Content of Section 1' },
    { title: 'Section 2', content: 'Content of Section 2' },
    { title: 'Section 3', content: 'Content of Section 3' },
  ];

  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;