import React from 'react'
import './enterpriseSlider.css'
import Slider from "react-slick";
import TopMobileSlider1 from "../../assets/mobile-topSlider-image1.png";
import TopMobileSlider2 from "../../assets/mobile-topSlider-image2.png";
import TopMobileSlider3 from "../../assets/mobile-topSlider-image3.png";
import TopMobileSlider4 from "../../assets/mobile-topSlider-image4.png";
import TopMobileSlider5 from "../../assets/mobile-topSlider-image5.png";
import TopMobileSlider6 from "../../assets/mobile-topSlider-image6.png";
import BottomMobileSlider1 from "../../assets/mobile-bottomSlider-image1.png";
import BottomMobileSlider2 from "../../assets/mobile-bottomSlider-image2.png";
import BottomMobileSlider3 from "../../assets/mobile-bottomSlider-image3.png";
import BottomMobileSlider4 from "../../assets/mobile-bottomSlider-image4.png";
import BottomMobileSlider5 from "../../assets/mobile-bottomSlider-image5.png";
import BottomMobileSlider6 from "../../assets/mobile-bottomSlider-image6.png";
import TopDesktopSlider1 from "../../assets/desktop-topSlider-image1.png"
import TopDesktopSlider2 from "../../assets/desktop-topSlider-image2.png"
import TopDesktopSlider3 from "../../assets/desktop-topSlider-image3.png"
import TopDesktopSlider4 from "../../assets/desktop-topSlider-image4.png"
import TopDesktopSlider5 from "../../assets/desktop-topSlider-image5.png"
import TopDesktopSlider6 from "../../assets/desktop-topSlider-image6.png"
import BottomDesktopSlider1 from "../../assets/desktop-bottomSlider-image1.png"
import BottomDesktopSlider2 from "../../assets/desktop-bottomSlider-image2.png"
import BottomDesktopSlider3 from "../../assets/desktop-bottomSlider-image3.png"
import BottomDesktopSlider4 from "../../assets/desktop-bottomSlider-image4.png"
import BottomDesktopSlider5 from "../../assets/desktop-bottomSlider-image5.png"
import BottomDesktopSlider6 from "../../assets/desktop-bottomSlider-image6.png"

const enterpriseSlider = () => {

    var settings = {
        dots:false,
        infinite:true,
        arrows:false,
        slidesToShow:2,
        slidesToScroll:1,
        autoplay: true,
        speed:2000,
        autoplaySpeed:2000,
        pauseOnHover: true,
        cssEase:'linear',
        rtl:true,
      };


    var secondSettings = {
        dots:false,
        infinite:true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed:2000,
        pauseOnHover: true,
        cssEase:'linear',
      };

  return (
    <div className='enterpriseSliderContainer'>
        <div className="innerEntSliderContainer">
        <Slider {...settings} className="upperSlider">
          <div className="upperSliderImageContainer"><img className="upperSliderImage" src={TopMobileSlider1} alt="" /></div>
          <div className="upperSliderImageContainer"><img className="upperSliderImage" src={TopMobileSlider2} alt="" /></div>
          <div className="upperSliderImageContainer"><img className="upperSliderImage" src={TopMobileSlider3} alt="" /></div>
          <div className="upperSliderImageContainer"><img className="upperSliderImage" src={TopMobileSlider4} alt="" /></div>
          <div className="upperSliderImageContainer"><img className="upperSliderImage" src={TopMobileSlider5} alt="" /></div>
          <div className="upperSliderImageContainer"><img className="upperSliderImage" src={TopMobileSlider6} alt="" /></div>
        </Slider>

        <Slider {...settings} className="desktopUpperSlider">
          <div className="desktopUpperSliderImageContainer"><img className="desktopUpperSliderImage" src={TopDesktopSlider1} alt="" /></div>
          <div className="desktopUpperSliderImageContainer"><img className="desktopUpperSliderImage" src={TopDesktopSlider2} alt="" /></div>
          <div className="desktopUpperSliderImageContainer"><img className="desktopUpperSliderImage" src={TopDesktopSlider3} alt="" /></div>
          <div className="desktopUpperSliderImageContainer"><img className="desktopUpperSliderImage" src={TopDesktopSlider4} alt="" /></div>
          <div className="desktopUpperSliderImageContainer"><img className="desktopUpperSliderImage" src={TopDesktopSlider5} alt="" /></div>
          <div className="desktopUpperSliderImageContainer"><img className="desktopUpperSliderImage" src={TopDesktopSlider6} alt="" /></div>
        </Slider>

        
        <Slider {...secondSettings} className="lowerSlider">
          <img className="lowerSliderImage" src={BottomMobileSlider1} alt="" />
          <img className="lowerSliderImage" src={BottomMobileSlider2} alt="" />
          <img className="lowerSliderImage" src={BottomMobileSlider3} alt="" />
          <img className="lowerSliderImage" src={BottomMobileSlider4} alt="" />
          <img className="lowerSliderImage" src={BottomMobileSlider5} alt="" />
          <img className="lowerSliderImage" src={BottomMobileSlider6} alt="" />
        </Slider>

        <Slider {...secondSettings} className="desktopLowerSlider">
          <div className="desktopLowerSliderImageContainer"><img className="desktopLowerSliderImage" src={BottomDesktopSlider1} alt="" /></div>
          <div className="desktopLowerSliderImageContainer"><img className="desktopLowerSliderImage" src={BottomDesktopSlider2} alt="" /></div>
          <div className="desktopLowerSliderImageContainer"><img className="desktopLowerSliderImage" src={BottomDesktopSlider3} alt="" /></div>
          <div className="desktopLowerSliderImageContainer"><img className="desktopLowerSliderImage" src={BottomDesktopSlider4} alt="" /></div>
          <div className="desktopLowerSliderImageContainer"><img className="desktopLowerSliderImage" src={BottomDesktopSlider5} alt="" /></div>
          <div className="desktopLowerSliderImageContainer"><img className="desktopLowerSliderImage" src={BottomDesktopSlider6} alt="" /></div>
        </Slider>
      </div>
    </div>
  )
}

export default enterpriseSlider