import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  useEffect(() => {
    const updatedTime = setInterval(() => {
      setTime(startTime);
    }, 1000);
    return () => clearInterval(updatedTime);
  }, []);

  const startTime = () => {
    return moment().format("h:mm:ss a");
  };
  const [time, setTime] = useState(startTime);

  return (
    <div className="clock">
      <h1 id="clock-text">{time}</h1>
    </div>
  );
};
export default Clock;
