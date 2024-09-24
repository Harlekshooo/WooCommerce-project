import React from "react";
import "./charge.css";
import profilePic from "../../assets/profile-pic.png";

const charge = () => {
  return (
    <div className="chargeContainer">
      <div className="chargeInnerContainer">
        <p className="chargeMessage">
          "No other ecommerce platform allows people to start for free and grow
          their store as their business grows. More importantly, WoooCommerce
          doesn't charge you a portion of your profits as your business grows."
        </p>
        <div className="chargeProfile">
            <div className="chargePicContainer">
                <img className="chargePic" src={profilePic} alt="" />
            </div>
            <div className="chargeDetailContainer">
                <h4 className="chargeDetailName">chris lema,</h4>
                <a href="#" className="chargeDetailLink">chrislema.com</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default charge;
