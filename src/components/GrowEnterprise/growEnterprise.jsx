import React from "react";
import "./growEnterprise.css";
import { FaWordpress } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
import { GrHost } from "react-icons/gr";

const growEnterprise = () => {
  return (
    <div className="growEnterpriseContainer">
      <div className="growEnterpriseInnerComtainer">
        <h2 className="growEnterpriseHeader">Grow with Woo Enterprise</h2>
        <p className="growEnterpriseParagraph">
          Woo Enterprise is a service available to high-volume stores that want
          to maximize their potential.
        </p>

        <div className="growEnterpriseServiceContainer">
          <div className="growEnterpriseServiceCard">
            <div className="growEnterpriseServiceIconContainer">
              <FaWordpress className="growEnterpriseServiceIcon" />
            </div>
            <div className="growEnterpriseServiceDetails">
              <h5 className="growEnterpriseServiceHeader">
                Store migration assistance
              </h5>

              <p className="growEnterpriseServiceMessage">
                Woo Enterprise includes migration support to help move your
                store to Woo. Our team of experts will help with data migration
                and setting up your site on a WordPress block theme for easy
                customization.
              </p>
            </div>
          </div>

          <div className="growEnterpriseServiceCard">
          <div className="growEnterpriseServiceIconContainer">
              <FaRegUser className="growEnterpriseServiceIcon" />
            </div>
            <div className="growEnterpriseServiceDetails">
              <h5 className="growEnterpriseServiceHeader">
                Dedicated Customer Success Manager
              </h5>

              <p className="growEnterpriseServiceMessage">
                From onboarding guidance to technical assessments, our Customer
                Success Managers will work with you to grow your business and
                ensure you're using Woo to its full potential.
              </p>
            </div>
          </div>

          <div className="growEnterpriseServiceCard">
          <div className="growEnterpriseServiceIconContainer">
              <HiOutlineSupport className="growEnterpriseServiceIcon" />
            </div>
            <div className="growEnterpriseServiceDetails">
              <h5 className="growEnterpriseServiceHeader">
              Priority support
              </h5>

              <p className="growEnterpriseServiceMessage">
                We want to grt you the help you need, when you need it. If you
                have questions or need technical support, you'll be at the top
                of the queue for our Happiness Engineers.
              </p>
            </div>
          </div>

          <div className="growEnterpriseServiceCard">
          <div className="growEnterpriseServiceIconContainer">
              <GrHost className="growEnterpriseServiceIcon" />
            </div>
            <div className="growEnterpriseServiceDetails">
              <h5 className="growEnterpriseServiceHeader">
                Discounted hosting
              </h5>

              <p className="growEnterpriseServiceMessage">
                Woo's scalable hosting service will improve your performance,
                future-proof your store, and keep your costs in check.
              </p>
            </div>
          </div>
        </div>

        <div className="growEnterpriseBtnContainer">
          <button className="growEnterpriseBtn">Request a demo</button>
        </div>
      </div>
    </div>
  );
};

export default growEnterprise;
