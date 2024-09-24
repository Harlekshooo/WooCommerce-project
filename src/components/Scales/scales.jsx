import React from "react";
import "./scales.css";
import marzoccoImg1 from "../../assets/marzocco-image1.png";
import marzoccoImg2 from "../../assets/marzocco-image2.png";

const scales = () => {
  return (
    <div className="scalesContainer">
      <div className="scalesInnerContainer">
        <div className="scalesDetailSection">
          <h4 className="scalesHeader">Enterprise ecommerce that scales</h4>
        <p className="scalesParagraph">
          Manage and grow your high-volume store with Woo Enterprise - our
          dedicated enterprise ecommerce service.
        </p>

        <button className="scalesBtn">Request a demo</button>
        </div>
        
        <div className="scalesImgOuterContainer">
          <div className="scalesImgContainer">
            <img src={marzoccoImg1} className="scalesImg1" alt="" />
            <img src={marzoccoImg2} className="scalesImg2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default scales;
