import React, { useState } from "react";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          backgroundColor: "green",
          height: "40px",
          width: "100px",
        }}
      >
        Login
      </button>

      {isOpen && (
        <div
          style={{
            backgroundColor: "blue",
            height: "80px",
            width: "100px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span onClick={closeModal} style={{ cursor: "pointer" }}>
            X
          </span>
          <div>Hi I am Modal</div>
        </div>
      )}
    </div>
  );
};
