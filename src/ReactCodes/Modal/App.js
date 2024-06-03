import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <h1>Reusable Modal Example</h1>
      {/* Button to open the modal */}
      <button onClick={openModal}>Open Modal</button>
      {/* Modal component with custom content */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Custom Modal Title</h2>
        <p>This is the custom content passed from the parent component.</p>
        {/* Button to close the modal inside the modal content */}
        <button onClick={closeModal}>Submit</button>
      </Modal>
    </div>
  );
};

export default App;
