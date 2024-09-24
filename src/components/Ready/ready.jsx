import React from "react";
import "./ready.css";
import cartImg from "../../assets/cart-Image.png";
import { FaRegCircleCheck } from "react-icons/fa6";

const ready = () => {
  return (
    <div className="readyContainer">
      <div className="readyInnerContainer">
        <div className="readyIntroContainer">
          <h3 className="readyIntroHeader">
            Enterprise-ready ecommerce from Woo
          </h3>
          <p className="readyIntroMessage">
            From full store ownership to a completely customizable environment,
            Woo Enterprise comes wiith everything you need for long-term
            business growth.
          </p>
          <div className="cartImgContainer">
            <img className="cartImg" src={cartImg} alt="" />
          </div>
        </div>

        <div className="readyListContainer">
          <div className="objectives">
            <div className="checkedIconContainer">
              <FaRegCircleCheck className="checkedIcon" />
            </div>
            <div className="checkedObjectives">
              <h5 className="checkedHeader">
                Full ownership of your store and data
              </h5>
              <p className="checkedParagraph">
                Your store and data belong to you, always - including control over where
                your data is stored and how it can be used.
              </p>
            </div>
          </div>

          <div className="objectives">
            <div className="checkedIconContainer">
              <FaRegCircleCheck className="checkedIcon" />
            </div>
            <div className="checkedObjectives">
              <h5 className="checkedHeader">High performance at scale</h5>
              <p className="checkedParagraph">
                As your business grows, we'll grow with it. You'll have the full
                control over how your site is run - from where it's hosted to
                the features it has - and we'll be there to ensure it runs
                smoothly, securely, and efficiently.
              </p>
            </div>
          </div>

          <div className="objectives">
            <div className="checkedIconContainer">
              <FaRegCircleCheck className="checkedIcon" />
            </div>
            <div className="checkedObjectives">
              <h5 className="checkedHeader">Reduce your TCO</h5>
              <p className="checkedParagraph">
                Unlike other SaaS ecommerce platforms, Woo is free to use
                without costly subscription fees. You'll only ever pay for the
                features you need - reducing your total cost of ownership.
              </p>
            </div>
          </div>

          <div className="objectives">
            <div className="checkedIconContainer">
              <FaRegCircleCheck className="checkedIcon" />
            </div>
            <div className="checkedObjectives">
              <h5 className="checkedHeader">Customize without limits</h5>
              <p className="checkedParagraph">
                Open source means you're free to add any features as your
                business and customer needs change. You can design and build
                your enterprise ecommerce store to fit your exact requirements.
              </p>
            </div>
          </div>

          <div className="objectives">
            <div className="checkedIconContainer">
              <FaRegCircleCheck className="checkedIcon" />
            </div>
            <div className="checkedObjectives">
              <h5 className="checkedHeader">Secure and safe</h5>
              <p className="checkedParagraph">
                Built on WordPress, Woo includes features to protect your
                content and customer data. For extra peace of mind, you'll have
                the option to add any other security tools that you require.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ready;
