import React, { useState } from "react";

const Show_Hide = () => {
  const [toggle, setToggle] = useState("visible");
  return (
    <div className="show-hide">
      <h2 id="show-hide-text" style={{ visibility: toggle }}>
        Now you see me?
      </h2>
      <button
        onClick={() => setToggle(toggle === "visible" ? "hidden" : "visible")}
      >
        {toggle === "hidden" ? "Show" : "Hide"}
      </button>
    </div>
  );
};
export default Show_Hide;
