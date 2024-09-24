import React from "react";
import "./power.css";

const power = () => {
  return (
    <div className="businessPowerContainer">
      <div className="innerBusinessPowerContainer">
        <div className="businessPowerIntro">
          <h3 className="businessPowerHeader">
            Get the power of Woo Enterprise for your business
          </h3>
          <p className="businessPowerMessage">
            For more information about Woo Enterprise or to request a demo,
            complete the form and one of our Customer Success agents will be in
            touch.
          </p>
        </div>

        <div className="businessInputContainer">
          <input
            className="businessPersonalDetails"
            placeholder="First Name*"
            type="text"
          />
          <input
            className="businessPersonalDetails"
            placeholder="Last Name*"
            type="text"
          />
          <input
            className="businessPersonalDetails"
            placeholder="Company Name*"
            type="text"
          />
          <input
            className="businessPersonalDetails"
            placeholder="Business email address*"
            type="text"
          />
          <input
            className="businessPersonalDetails"
            placeholder="Business URL*"
            type="text"
          />
          <select name="" className="businessPersonalDetailsOption">
            <option className="countrySelect" value="">
              Please select a country*
            </option>
            <option value="">united states</option>
            <option value="">canada</option>
            <option value="">united kingdom</option>
            <option value="">china</option>
            <option value="">Afghanistan</option>
            <option value="">Algeria</option>
            <option value="">Argentina</option>
            <option value="">Germany</option>
          </select>

          <select name="" className="businessPersonalDetailsOption">
            <option className="countrySelect" value="">
              Estimated annual revenue*
            </option>
            <option value="">Less than $250K</option>
            <option value="">$250 - $1M</option>
            <option value="">$1M - $20M</option>
            <option value="">$20M +</option>
            <option value="">No revenue yet</option>
          </select>

          <select name="" className="businessPersonalDetailsOption">
            <option className="countrySelect" value="">
              What are you looking to accomplish*
            </option>
            <option value="">Start a new online store</option>
            <option value="">Scale an existing eCommerce business</option>
            <option value="">Migrate an online business to WooCommerce</option>
            <option value="">
              Open an online store for an offline business
            </option>
          </select>
          <textarea
            className="businessPersonalDetailsMessage"
            placeholder="How can we help you?"
            name=""
            id=""
            cols="30"
            rows="10"
          />
          <div className="businessVerifyContainer">
            <p className="businessVerifyMessage">
              <input className="businessVerify" type="checkbox" /> Yes, I'd like
              Woo to send me updates about products, exclusive promotions and
              discounts. I can opt out of recieving these communications at any
              time.
            </p>
            <button className="businessTouch">Get in touch</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default power;
