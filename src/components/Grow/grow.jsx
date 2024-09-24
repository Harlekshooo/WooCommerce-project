import React from "react";
import "./grow.css";

const grow = () => {
  return (
    <div className="growContainer">
      <div className="growInnerContainer">
        <h2 className="growHeader">Start growing your business with Woo</h2>

        <p className="growMessage">
          Whether you've got dreams of selling online or you want to build
          stores for others,{" "}
          <span className="innerGrowMessage">you can do it with Woo.</span>{" "}
          start your journey by finding a host.
        </p>

        <button className="growBtn">Get started</button>
      </div>
    </div>
  );
};

export default grow;
