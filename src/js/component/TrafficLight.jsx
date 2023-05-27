import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null);
  const [cycle, setCycle] = useState(false);

  useEffect(() => {
    if (cycle === true) {
    }
  }, [cycle]);

  return (
    <div className="traffic-light-container">
      <div
        className={`light red ${activeLight === "red" ? "selected" : ""}`}
        onClick={() => {
          setActiveLight("red");
        }}
      ></div>
      <div
        className={`light yellow ${activeLight === "yellow" ? "selected" : ""}`}
        onClick={() => {
          setActiveLight("yellow");
        }}
      ></div>
      <div
        className={`light green ${activeLight === "green" ? "selected" : ""}`}
        onClick={() => {
          setActiveLight("green");
        }}
      ></div>
    </div>
  );
};

export default TrafficLight;
