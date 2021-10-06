import React, { useState } from "react";
const Color_Change = () => {
  const [color, setColor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="color">
      <h2 id="color-text" style={{ color: `${color}` }}>
        Change Me
      </h2>
      <form onSubmit={() => handleSubmit}>
        <input
          value={color}
          type="text"
          placeholder="type in a color"
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
    </div>
  );
};
export default Color_Change;
