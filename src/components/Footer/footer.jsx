import React from 'react'
import './footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import automatticImg from '../../assets/automattic-logo.png'

const footer = () => {
  return (
    <div className='footerContainer'>
        <div className="footerInnerContainer">
        <div className="footerListContainer">
          <div className="footerList">
            <h5 className="footerHeader">sell</h5>
            <a href="#" className="footerParagraph"><p>WooCommerce</p></a>
            <a href="#" className="footerParagraph"><p>Payments</p></a>
            <a href="#" className="footerParagraph"><p>No-code customization</p></a>
            <a href="#" className="footerParagraph"><p>Marketing</p></a>
            <a href="#" className="footerParagraph"><p>Checkout</p></a>
            <a href="#" className="footerParagraph"><p>Shipping</p></a>
            <a href="#" className="footerParagraph"><p>Mobile app</p></a>
            <a href="#" className="footerParagraph"><p>Enterprise ecommerce</p></a>
          </div>
          <div className="footerList">
            <h5 className="footerHeader">extensions and themes</h5>
            <a href="#" className="footerParagraph"><p>WooCommerce extensions</p></a>
            <a href="#" className="footerParagraph"><p>WooCommerce themes</p></a>
            <a href="#" className="footerParagraph"><p>New</p></a>
            <a href="#" className="footerParagraph"><p>Essentials</p></a>
            <a href="#" className="footerParagraph"><p>Collections</p></a>
            <a href="#" className="footerParagraph"><p>Developed by Woo</p></a>
          </div>
          <div className="footerList">
            <h5 className="footerHeader">build</h5>
            <a href="#" className="footerParagraph"><p>Woo for developers</p></a>
            <a href="#" className="footerParagraph"><p>Developer resources</p></a>
            <a href="#" className="footerParagraph"><p>Become a Woo agency</p></a>
            <a href="#" className="footerParagraph"><p>Become a marketplace partner</p></a>
            <a href="#" className="footerParagraph"><p>Become an affiliate</p></a>
          </div>
          <div className="footerList">
            <h5 className="footerHeader">resources</h5>
            <a href="#" className="footerParagraph"><p>Blog</p></a>
            <a href="#" className="footerParagraph"><p>Documentation</p></a>
            <a href="#" className="footerParagraph"><p>Email newsletter</p></a>
            <a href="#" className="footerParagraph"><p>Support</p></a>
            <a href="#" className="footerParagraph"><p>WooCommerce hosting</p></a>
            <a href="#" className="footerParagraph"><p>Customer showcase</p></a>
            <a href="#" className="footerParagraph"><p>Hire an expert agency</p></a>
            <a href="#" className="footerParagraph"><p>Customer success</p></a>
            <a href="#" className="footerParagraph"><p>Support policy</p></a>
            <a href="#" className="footerParagraph"><p>Refund policy</p></a>
            <a href="#" className="footerParagraph"><p>Participate in customer research</p></a>
            <a href="#" className="footerParagraph"><p>Accessibility</p></a>
          </div>
          <div className="footerList">
            <h5 className="footerHeader">woo</h5>
            <a href="#" className="footerParagraph"><p>About</p></a>
            <a href="#" className="footerParagraph"><p>Press</p></a>
            <a href="#" className="footerParagraph"><p>Woo trademark guidelines</p></a>
            <a href="#" className="footerParagraph"><p>Brand and logo guidelines</p></a>
            <a href="#" className="footerParagraph"><p>Contact us</p></a>
          </div>
        </div>

        <hr className="footerLine" />

        <div className="footerEnding">
            <div className="footerSocials">
                <FaXTwitter className="footerIcon" />
                <IoLogoFacebook className="footerIcon" />
                <FaInstagram className="footerIcon" />
            </div>
            <div className="footerCopyright">
                <h5 className="copyRight">copyright woocommerce 2024</h5>
                    <div className="policyContainer">
                        <a href="#" className="copyLink">terms and conditions</a>
                        <a href="#" className="privacyCopyLink">privacy policy</a>
                        <a href="#" className="copyLink">privacy note for carlifornia users</a>
                    </div>
            </div>
            <div className="footerAutomattic">
                <a className="automatticLink" href="#"><img className='automatticImg' src={automatticImg} alt="" /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer