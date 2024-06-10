import React from "react";

function TabButton({ children, isSelected, ...clickButton }) {
  return (
    <>
      <li>
        <button
          className={isSelected ? "active" : undefined}
          {...clickButton}
        >
          {children}
        </button>
      </li>
    </>
  );
}

export default TabButton;
