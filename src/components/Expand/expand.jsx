import React from "react";
import "./expand.css";
import skytechImg from '../../assets/skytech-image2.png'

const expand = () => {
  return (
    <div className="expandContainer">
      <div className="expandInnerContainer">
        <div className="expandDetails">
          <p className="expandParagraph">
            "The expandability of WooCommerce is great, we moved to Woo because
            of customizability. With Shopify, everything is behind a paywall and
            makes it difficult to test and develop."
          </p>
          <h5 className="expandHeader">skytech gaming</h5>
        </div>

        <div className="expandImgContainer">
            <img className="expandImg" src={skytechImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default expand;
