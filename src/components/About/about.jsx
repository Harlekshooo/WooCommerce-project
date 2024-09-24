import React from "react";
import "./about.css";
import aboutImg1 from "../../assets/aboutImg1.png";
import aboutImg2 from "../../assets/aboutImg2.png";
import aboutImg3 from "../../assets/aboutImg3.png";

const about = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutInnerContainer">
        <div className="experts">
          <div className="aboutInfo">
            <h3 className="aboutHeader">Get expert help with WooCommerce</h3>
            <p className="aboutParagraph">
              Save time, sell more and stay ahead of the competition - hire one of
              our trusted WooExpert agencies to help you start or optimize your
              WooCommerce store.
            </p>
            <button className="aboutBtn">Hire an expert</button>
          </div>

          <div className="aboutImgContainer">
            <img className="aboutImg" src={aboutImg1} alt="" />
          </div>
        </div>

        <div className="powerUp">
          <div className="aboutInfo">
            <h3 className="aboutHeader">Power up your WooCommerce store</h3>
            <p className="aboutParagraph">
              Already sell on Woo? Our Marketplace has hundreds of extensions
              and themes to boost your conversion and streamline your.
            </p>
            <button className="aboutBtn">Hire an expert</button>
          </div>

          <div className="aboutImgContainer">
            <img className="aboutImg" src={aboutImg2} alt="" />
          </div>
        </div>

        <div className="custom">
          <div className="aboutInfo">
            <h3 className="aboutHeader">Custom solutions for high-volume stores</h3>
            <p className="aboutParagraph">
              Woo offers next-level customization, advanced selling features, and dedicated support to help established merchants continue growing.
            </p>
            <button className="customAboutBtn">Explore enterprise solutions</button>
          </div>

          <div className="aboutImgContainer">
            <img className="aboutImg" src={aboutImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
