import React from "react";
import TrafficLight from "./TrafficLight.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row ">
        <div className="col-12">
          <TrafficLight />
        </div>
      </div>
    </div>
  );
};

export default Home;