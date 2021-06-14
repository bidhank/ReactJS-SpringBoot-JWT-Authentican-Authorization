import React from "react";

const ToggleButton = () => {
  return (
    <button
      className="btn btn-default"
      id="menu-toggle"
      onClick={() =>document.getElementById("wrapper").classList.toggle("toggled")}
    >
      ☰
    </button>
  );
};

export default ToggleButton;
