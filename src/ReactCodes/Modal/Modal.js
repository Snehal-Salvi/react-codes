import React from "react";

// Modal component that takes isOpen, onClose, and children as props
const Modal = ({ isOpen, onClose, children }) => {
  // If isOpen is false, return null to not render anything
  if (!isOpen) return null;

  return (
    // Overlay that covers the entire screen
    <div className="modal-overlay" onClick={onClose}>
      {/* Content of the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button inside the modal */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {/* Children content passed from the parent component */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
