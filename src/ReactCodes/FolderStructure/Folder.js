import React, { useState } from "react";

const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <span onClick={handleClick}>{data.name}</span>
      {isOpen && (
        <ul>
          {data.childrens &&
            data.childrens.map((child) => (
              <Folder key={child.id} data={child} />
            ))}
        </ul>
      )}
    </li>
  );
};

export default Folder;