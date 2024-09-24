import React from 'react'
import './extDropdown.css'
import { IoChevronForwardOutline } from "react-icons/io5";

const extDropdown = () => {
  return (
    <div className='extDropdownContainer'>
        <div className="innerExtDropDownContainer">
            <div className="innerExtDropDownContent">
                <div className="marketplace">
                    <h4 className='extHeader'>WooCommerce Marketplace</h4>
                    <p className='extParagraph'>
                        Find everything you need to enhance your store and grow your sales
                    </p>
                </div>

                <div className="marketplace">
                    <h4 className='extHeader'>Extensions</h4>
                    <p className='extParagraph'>
                        Grow your business with hundreds of free and paid extensions
                    </p>
                </div>

                <div className="marketplace">
                    <h4 className='extHeader'>What is WooCommerce?</h4>
                    <p className='extParagraph'>
                        Learn more about the platform that powers success for millions of businesses
                    </p>
                </div>

                <div className="marketplace">
                    <h4 className='extHeader'>What is WooCommerce?</h4>
                    <p className='extParagraph'>
                        Learn more about the platform that powers success for millions of businesses
                    </p>
                </div>

                <div className="marketplace">
                    <h4 className='extHeader'>What is WooCommerce?</h4>
                    <p className='extParagraph'>
                        Learn more about the platform that powers success for millions of businesses
                    </p>
                </div>

                <div className="extCategory">
                    <h4 className='extHeader'>Category</h4>
                    <div className='extParagraph'>
                        <h5>All extensions</h5>
                    </div>
                    <div className='extParagraph'>
                        <h5>New</h5>
                    </div>
                    <div className='extParagraph'>
                        <h5>Developed by Woo</h5>
                    </div>
                    <div className='extParagraph'>
                        <h5>Free</h5>
                    </div>
                    <div className='extParagraph'>
                        <h5>Payments</h5>
                        <IoChevronForwardOutline />
                    </div>
                    <div className='extParagraph'>
                        <h5>Merchandising</h5>
                        <IoChevronForwardOutline />
                    </div>
                    <div className='extParagraph'>
                        <h5>Store content and customizations</h5>
                        <IoChevronForwardOutline />
                    </div>
                    <div className='extParagraph'>
                        <h5>Shipping, delivery, and fufilment</h5>
                        <IoChevronForwardOutline />
                    </div>
                    <div className='extParagraph'>
                        <h5>Marketing</h5>
                        <IoChevronForwardOutline />
                    </div>
                    <div className='extParagraph'>
                        <h5>Conversion</h5>
                        <IoChevronForwardOutline />
                    </div>
                    <div className='extParagraph'>
                        <h5>Customer service</h5>
                        <IoChevronForwardOutline />
                    </div>
                    <div className='extParagraph'>
                        <h5>Store management</h5>
                        <IoChevronForwardOutline />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default extDropdown