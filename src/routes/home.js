import React, { useState } from "react";

const Home = () => {
  const [welcomeMessage] = useState("Enjoy :)");
  return (
    <div className="home">
      <p id="home-main-text">
        This web application showcases how different components can use state.
        <br />
        In layman's terms "state" is the current "mood" of an element.
        <br />
        Therefore, changing state = changes the mood.
      </p>
      <p id="home-sub-text">{welcomeMessage}</p>
    </div>
  );
};
export default Home;
