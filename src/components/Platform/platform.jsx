import React from 'react'
import './platform.css'
import starEmoji from '../../assets/star-emoji.svg'

const platform = () => {
  return (
    <div className='platformContainer'>
        <div className="platformInnerContainer">
            <h2 className="platformHeader">
                The most-trusted ecommerce platform for building success
                <img className="platformHeaderImg" src={starEmoji} alt="" />
            </h2>

            <div className="ratingsContainer">
            <div className="firstRatingCard">
                <h2 className="firstRatingNumber">3.6<sup className="firstRatingValue"> M</sup></h2>
                <p className="ratingParagraph">online stores built with WooCommerce</p>
                <p className="ratingFooter">StoreLeads (using WooCart/Checkout), <a href="#" className="ratingLink">State of Ecommerce</a></p>
            </div>

            <div className="secondRatingCard">
                <h2 className="ratingNumber">31<sup className="ratingValue">%</sup></h2>
                <p className="ratingParagraph">of the top 1 million ecommerce sites</p>
                <p className="ratingFooter">StoreLeads (using WooCart/Checkout), <a href="#" className="ratingLink">State of Ecommerce</a></p>
            </div>

            <div className="thirdRatingCard">
                <h2 className="thirdRatingNumber">43<sup className="thirdRatingValue">%</sup></h2>
                <p className="ratingParagraph">of the web is built on WordPress</p>
                <p className="ratingFooter">StoreLeads (using WooCart/Checkout), <a href="#" className="ratingLink">State of Ecommerce</a></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default platform