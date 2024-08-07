import React, { useState } from 'react';
import './App.css';

const Collapsible = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <button onClick={toggleOpen} className="collapsible-button">
        {title}
      </button>
      {isOpen && (
        <div className="collapsible-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
