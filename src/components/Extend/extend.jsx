import React from "react";
import "./extend.css";
import extendImage1 from "../../assets/extend-image1.png";
import extendImage2 from "../../assets/extend-image2.png";
import extendImage3 from "../../assets/extend-image3.png";

const extend = () => {
  return (
    <div className="extendContainer">
      <div className="extendInnerContainer">
        <h2 className="extendHeader">Customize and extend your store</h2>

        <div className="extendBody">
          <div className="extendSimplify">
            <div className="extendImageContainer">
              <img className="extendImage" src={extendImage1} alt="" />
            </div>
            <div className="extendDetails">
              <h3 className="extendDetailsHeader">
                Simplify your payment operations with WooPayment
              </h3>
              <p className="extendDetailsParagraph">
                Seamlessly integrate a wide range of payment methods - such as
                credit/debit cards, Apple pay and buy now, pay later - and
                manage them all from your WooCommerce dashboard.
              </p>
              <button className="extendDetailsButton">
                Learn more about WooPayments
              </button>
            </div>
          </div>

          <div className="extendIntegrate">
            <div className="extendImageContainer">
              <img className="extendImage" src={extendImage2} alt="" />
            </div>
            <div className="extendDetails">
              <h3 className="extendDetailsHeader">
                Integrate with your business software
              </h3>
              <p className="extendDetailsParagraph">
                Woo integrates seamlessly with the software you already know and
                trust, like your ERP or CRM. Our Marketplace offers hundreds of
                extensions and connectors, so that you can be sure there's a
                solution for exery need.
              </p>
              <button className="extendDetailsButton">
                Explore the Woo Marketplace
              </button>
            </div>
          </div>

          <div className="extendMultiple">
            <div className="extendImageContainer">
              <img className="extendImage" src={extendImage3} alt="" />
            </div>
            <div className="extendDetails">
              <h3 className="extendDetailsHeader">
                Sell on multiple marketplaces and channels
              </h3>
              <p className="extendDetailsParagraph">
                Reach more customers when you sync your Woo store with other
                popular marketplaces and channels. Enterprise-grade channel
                management lets you streamline your multi-channel presence.
              </p>
              <button className="extendDetailsButton">
                Discover multi-channel solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default extend;
