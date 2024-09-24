import React from 'react'
import './resDropDown.css'
import { IoChevronForwardOutline } from "react-icons/io5";

const resDropDown = () => {
  return (
    <div className='resDropdownContainer'>
        <div className="innerResDropDownContainer">
            <div className="resCategoriesContainer">
                <div className="firstResCategories">
                <div className="blog">
                    <h4 className='resHeader'>Blog</h4>
                    <p className='resParagraph'>
                        Get popular tips, tricks and ecommerce inspiration from the Woo team 
                    </p>
                </div>

                <div className="blog">
                    <h4 className='resHeader'>Learn</h4>
                    <p className='resParagraph'>
                        Ecommerce resources to help you learn WooCommerce, launch fast and sell more
                    </p>
                </div>

                <div className="blog">
                    <h4 className='resHeader'>Documentation</h4>
                    <p className='resParagraph'>
                        Discover guides, tutorials, and technical resources for WooCommerce
                    </p>
                </div>

                <div className="blog">
                    <h4 className='resHeader'>Customer showcase</h4>
                    <p className='resParagraph'>
                        See how merchants and developers are using Woo to create beautiful, successful stores
                    </p>
                </div>

                <div className="blog">
                    <h4 className='resHeader'>Hire an agency</h4>
                    <p className='resParagraph'>
                        Get help building or customizing your store from one of our trusted agencies
                    </p>
                </div>

                <div className="blog">
                    <h4 className='resHeader'>WooCommerce hosting</h4>
                    <p className='resParagraph'>
                        Find trusted hosting solutions for your Woo store
                    </p>
                </div>

                <div className="blog">
                    <h4 className='resHeader'>Join the Woo community</h4>
                    <p className='resParagraph'>
                        Connect with thousands of Woo users to get help or get inspired
                    </p>
                </div>
            </div>
            <div className="secondResCategories">
                <div className="guide">
                    <h5 className='guideHeader'>Guides</h5>
                    <IoChevronForwardOutline className='guideArrow' />
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default resDropDown