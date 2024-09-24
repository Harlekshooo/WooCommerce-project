import React from "react";
import "./testimonial.css";
import profilePic2 from "../../assets/profile-pic2.png";

const testimonial = () => {
  return (
    <div className="testimonialContainer">
      <div className="testimonialInnerContainer">
        <p className="testimonialParagraph">
          "WooCommerce's greatest strength is its extensibility. There is very
          little I can't build with WooCommerce. Given enough time and
          resources, it can be finely tailored to even your store's most niche
          feature."
        </p>

        <div className="testimonialContact">
          <div className="testimonialImgContainer">
            <img className="testimonialImg" src={profilePic2} alt="" />
          </div>
          <div className="testimonialDetailContainer">
            <h5 className="testimonialName">Kathy Darling,</h5>
            <a href="#" className="testimonialDirectLink">kathyisawesome.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
