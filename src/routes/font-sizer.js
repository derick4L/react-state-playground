import React, { useState } from "react";

const FontSizer = () => {
  const [font, setFont] = useState(37);
  return (
    <div className="font-sizer">
      <div className="font-sizer-button-group">
        <button onClick={() => setFont(font < 47 ? font + 5 : 47)}>⬆︎</button>
        <button onClick={() => setFont(font > 17 ? font - 5 : 17)}>⬇︎</button>
      </div>
      <div className="font-sizer-text">
        <p style={{ fontSize: `${font}px` }}>Hey</p>
      </div>
    </div>
  );
};
export default FontSizer;
