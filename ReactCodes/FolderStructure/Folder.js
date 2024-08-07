import React, { useState } from "react";

const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <span
        onClick={handleClick}
        style={{
          cursor: "pointer",
          fontWeight: data.type === "folder" ? "bold" : "normal",
        }}
      >
        {data.name}
      </span>
      {isOpen && data.childrens && (
        <ul>
          {data.childrens.map((child) => (
            <Folder key={child.id} data={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Folder;
