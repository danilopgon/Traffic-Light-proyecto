import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState(null);
    const [cycle, setCycle] = useState(false);
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        if (cycle === true) {
            const interval = setInterval(() => {
                switch (activeLight) {
                    case "red":
                        setActiveLight("yellow");
                        break;
                    case "yellow":
                        setActiveLight("green");
                        break;
                    case "green":
                        hidden === true ? setActiveLight("red") : setActiveLight("purple");
                        break;
                    default:
                        setActiveLight("red");
                        break;
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [cycle, activeLight]);

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
            <div
                className={`light purple ${activeLight === "purple" ? "selected" : ""} ${hidden === true ? "hidden" : ""}`}
                onClick={() => {
                    setActiveLight("purple");
                }}
            ></div>
            <button
                disabled={cycle === true ? "disabled" : ""}
                className="btn btn-light w-100"
                onClick={() => {
                    setCycle(true);
                }}
            >
                Start light cycle
            </button>
            <button
                disabled={cycle === false ? "disabled" : ""}
                className="btn btn-light w-100"
                onClick={() => {
                    setCycle(false);
                }}
            >
                Stop light cycle
            </button>


            <button
                className="btn btn-light w-100"
                onClick={() => {
                    setHidden((prev) => {
                        return !prev
                    });
                }}

            >
                {`${hidden === true ? "Show" : "Hide"} Purple Light`}
            </button>


        </div>
    );
};

export default TrafficLight;
