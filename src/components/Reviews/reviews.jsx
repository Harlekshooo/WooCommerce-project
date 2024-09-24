import React from "react";
import "./reviews.css";
import heartEmoji from "../../assets/reviewsImg8.svg";
import reviewsImg1 from "../../assets/reviewsImg1.png";
import reviewsImg2 from "../../assets/reviewsImg2.jpg";
import reviewsImg3 from "../../assets/reviewsImg3.png";
import reviewsImg4 from "../../assets/reviewsImg4.png";
import reviewsImg5 from "../../assets/reviewsImg5.png";
import reviewsImg6 from "../../assets/reviewsImg6.png";
import reviewsImg7 from "../../assets/reviewsImg7.png";
import reviewsLogo1 from '../../assets/reviewsLogo1.png'
import reviewsLogo2 from '../../assets/reviewsLogo2.png'
import reviewsLogo3 from '../../assets/reviewsLogo3.png'
import reviewsLogo4 from '../../assets/reviewsLogo4.png'
import reviewsLogo5 from '../../assets/reviewsLogo5.png'
import reviewsLogo6 from '../../assets/reviewsLogo6.png'
import reviewsLogo7 from '../../assets/reviewsLogo7.png'
import reviewsLogo8 from '../../assets/reviewsLogo8.png'

const reviews = () => {
  return (
    <div className="reviewsContainer">
      <div className="reviewsInnerContainer">
        <h3 className="reviewsHeader">
          Loved by millions of brands{" "}
          <img className="reviewsEmoji" src={heartEmoji} alt="" />
        </h3>

        <div className="reviewsBody">
          <div className="reviewsRowContainer">
            <div className="firstRow">
              <img className="reviewImages" src={reviewsImg1} alt="" />
              <img className="reviewImages" src={reviewsImg2} alt="" />
            </div>
            <div className="secondRow">
              <img className="reviewImages" src={reviewsImg3} alt="" />
              <img className="reviewImages" src={reviewsImg4} alt="" />
              <img className="reviewImages" src={reviewsImg5} alt="" />
            </div>
            <div className="thirdRow">
              <img className="reviewImages" src={reviewsImg6} alt="" />
              <img className="reviewImages" src={reviewsImg7} alt="" />
            </div>
          </div>

          <div className="reviewsLogoContainer">
            <div className="reviewLogoRows">
                <img className='reviewLogo' src={reviewsLogo1} alt="" />
                <img className='reviewLogo' src={reviewsLogo2} alt="" />
                <img className='reviewLogo' src={reviewsLogo3} alt="" />
                <img className='reviewLogo' src={reviewsLogo4} alt="" />
                <img className='reviewLogo' src={reviewsLogo5} alt="" />
                <img className='reviewLogo' src={reviewsLogo6} alt="" />
                <img className='reviewLogo7' src={reviewsLogo7} alt="" />
                <img className='reviewLogo8' src={reviewsLogo8} alt="" />
            </div>
          </div>

          <div className="reviewsBtnContainer">
            <button className="reviewsBtn">Discover more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reviews;
