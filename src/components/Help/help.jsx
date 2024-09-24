import React from "react";
import "./help.css";
import helpImg1 from "../../assets/help-img1.png";
import helpImg2 from "../../assets/help-img2.png";
import helpImg3 from "../../assets/help-img3.png";

const help = () => {
  return (
    <div className="helpContainer">
      <div className="helpInnerContainer">
        <h4 className="helpHeader">How can Woo help you?</h4>
        <div className="helpBody">
          <div className="helpSell">
            <div className="helpCardDetails">
              <h4 className="helpCardHeader">Sell online</h4>
              <p className="helpCardParagraph">
                The first step to selling online with WooCommerce is to find a
                host for your store.
              </p>
              <div className="helpCardBtnContainer">
                <button className="helpCardBtn">Get started</button>
              </div>
            </div>

            <div className="helpCardImgContainer">
              <img className="helpCardImg" src={helpImg1} alt="" />
            </div>
          </div>

          <div className="helpBuild">
            <div className="helpCardDetails">
              <h4 className="helpCardHeader">Build stores for others</h4>
              <p className="helpCardParagraph">
                Build powerful ecommerce solutions with WooCommerce, our truly
                open, WordPress-based platform.
              </p>
              <div className="helpCardBtnContainer">
                <button className="helpCardBtn">Learn more</button>
              </div>
            </div>

            <div className="helpCardImgContainer">
              <img className="helpCardImg" src={helpImg2} alt="" />
            </div>
          </div>

          <div className="helpPower">
            <div className="helpCardDetails">
              <h4 className="helpCardHeader">Power up your store</h4>
              <p className="helpCardParagraph">
                Already sell on Woo? Explore hundreds of extensions and themes
                to improve your business.
              </p>
              <div className="helpCardBtnContainer">
                <button className="helpCardBtn">Check it out</button>
              </div>
            </div>

            <div className="helpCardImgContainer">
              <img className="helpCardImg" src={helpImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default help;
