import React from "react";
import "./explore.css";
import exploreImage1 from "../../assets/explore-image1.jpg";
import exploreImage2 from "../../assets/explore-image2.jpg";
import exploreImage3 from "../../assets/explore-image3.jpg";

const explore = () => {
  return (
    <div className="exploreContainer">
      <div className="exploreInnerContainer">
        <h3 className="exploreHeader">Explore our enterprise resources</h3>

        <div className="exploreBody">
          <div className="nutriBullet">
            <div className="exploreImgContainer">
              <img className="exploreImg" src={exploreImage1} alt="" />
            </div>
            <div className="exploreDetailsContainer">
              <h3 className="exploreDetailHeader">
                Nutribullet improves conversations by 35% with Woo
              </h3>
              <p className="exploreDetailParagraph">
                A close partnership and new tech led to incredible results for
                Nutribullet. Learn how they made it happen with Woo.
              </p>
              <button className="exploreDetailBtn">Read the case study</button>
            </div>
          </div>

          <div className="omniChannel">
            <div className="exploreImgContainer">
              <img className="exploreImg" src={exploreImage2} alt="" />
            </div>
            <div className="exploreDetailsContainer">
              <h3 className="exploreDetailHeader">
                Take your brand everywhere with omnichannel
              </h3>
              <p className="exploreDetailParagraph">
                Download our free ebook to learn hoe to create unified presence
                accross all of your channels - including offline - and build
                trust with your customers.
              </p>
              <button className="exploreDetailBtn">Download the ebook</button>
            </div>
          </div>

          <div className="openSource">
            <div className="exploreImgContainer">
              <img className="exploreImg" src={exploreImage3} alt="" />
            </div>
            <div className="exploreDetailsContainer">
              <h3 className="exploreDetailHeader">
                Why you should choose an open-source ecommerce platform
              </h3>
              <p className="exploreDetailParagraph">
              Find out how an open-source platform compares to proprietary
                systems and how it might be a better optionfor your business.
              </p>
              <button className="exploreDetailBtn">Find out more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default explore;
