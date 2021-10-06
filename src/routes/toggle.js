import React, { useState } from "react";

const Toggle = () => {
  const [text, setText] = useState("Hi");
  return (
    <div className="toggle">
      <h3 id="toggle-text">{text}</h3>
      <button onClick={() => setText(text === "Hi" ? "G'bye" : "Hi")}>
        Click Me
      </button>
    </div>
  );
};
export default Toggle;
