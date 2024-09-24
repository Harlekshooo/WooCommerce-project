import React from 'react'
import Hero from './Hero/hero'
import Help from './Help/help'
import Reviews from './Reviews/reviews'
import Charge from './Charge/charge'
import About from './About/about'
import Platform from './Platform/platform'
import Testimonial from './Testimonial/testimonial'
import Grow from './Grow/grow'
import Footer from './Footer/footer'

const OtherComponents = () => {
  return (
    <div className='otherComponentsContainer'>
        <Hero />
        <Help />
        <Reviews />
        <Charge />
        <About />
        <Platform />
        <Testimonial />
        <Grow />
        <Footer />
    </div>
  )
}

export default OtherComponents