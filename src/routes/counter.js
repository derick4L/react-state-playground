import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div className="counter-button-group">
        <button onClick={() => setCount(count + 1)}>⬆︎</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>⬇︎</button>
      </div>
      <p id="counter-text">{count}</p>
    </div>
  );
};
export default Counter;
