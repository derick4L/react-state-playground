import React, { useState } from "react";

const Align = () => {
  const [position, setPosition] = useState("center"); //created state and defined its style value in the div

  return (
    <div className="align">
      <div style={{ textAlign: position }}>
        <h3 id="align-text">Howdy</h3>
      </div>
      <div className="align-button-group">
        <button
          onClick={() => {
            return setPosition("left");
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            return setPosition("center");
          }}
        >
          Center
        </button>
        <button
          onClick={() => {
            return setPosition("right");
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
};
export default Align;
