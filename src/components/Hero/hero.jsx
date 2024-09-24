import React from "react";
import "./hero.css";

const hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroInnerContainer">
        <h3 className="heroHeader">
          WooCommerce is the platform that grows with you
        </h3>

        <p className="heroParagraph">
          No matter what success looks like for you, you can do it with
          WooCommerce. Our WordPress-based ecommerce platform helps merchants and
          developers build successful businesses for the long term.
        </p>

        <div className="heroBtnContainer">
          <button className="heroBtn">Learn more</button>
        </div>

        <p className="heroCreate">
          Or{" "}
          <span>
            <a href="#" className="heroLink">create an account</a>
          </span>{" "}
          to get support, buy from our Marketplace, and more.
        </p>
      </div>
    </div>
  );
};

export default hero;
