import React from "react";
import "./fashion.css";
import fashionImg from "../../assets/fashionAndFascinating-Image2.png";

const fashion = () => {
  return (
    <div className="fashionContainer">
      <div className="fashionInnerContainer">
        <div className="fashionDetailsContainer">
          <p className="fashionDetailsMessage">
            "We dropped the idea of developing our own ecommerce site from
            scratch after working with WooCommerce and its customer success
            team."
          </p>
          <h5 className="fashionDetailsHeader">Fashion and Fascinating</h5>
        </div>

        <div className="fashionImgContainer">
          <img className="fashionImg" src={fashionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default fashion;
