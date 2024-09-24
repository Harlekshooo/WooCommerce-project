import React from 'react'
import './sellDropdown.css'

const dropdown = () => {
  return (
    <div className='dropdownContainer'>
      <div className="innerDropdownContainer">
        <div className="commerce">
          <h4 className='dropHeader'>What is WooCommerce?</h4>
          <p className='dropParagraph'>
            Learn more about the platform that powers success for millions of businesses
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Payments</h4>
          <p className='dropParagraph'>
            Accept payments and manage transactions right from your dashboard with WooPayments
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Shipping</h4>
          <p className='dropParagraph'>
            Save time and money with WooCommerce Shipping
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>No-coode customization</h4>
          <p className='dropParagraph'>
            Create exactly the store you want without touching a line of code
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Woo for developers</h4>
          <p className='dropParagraph'>
            Build powerful ecommerce solutions with our open, WordPress-based platform
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Optimized checkout</h4>
          <p className='dropParagraph'>
            Increase conversation with a customized checkout experience
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Marketing</h4>
          <p className='dropParagraph'>
            Build your brand and reach more shoppers with content marketing, SEO tools and up-sells
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Mobile app</h4>
          <p className='dropParagraph'>
            Manage your business on the go
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Woo for enterprise</h4>
          <p className='dropParagraph'>
            Next-level customization and advanced features for established merchants
          </p>
        </div>

        <div className="commerce">
          <h4 className='dropHeader'>Multi-channel ecommerce</h4>
          <p className='dropParagraph'>
            Find new audience and increase sales by selling across multiple channels
          </p>
        </div>
      </div>
    </div>
  )
}

export default dropdown