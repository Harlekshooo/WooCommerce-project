import React from 'react'
import './enterpriseEcommerce.css'
import Header from '../../Header/header'
import OtherComponents from '../../OtherComponents'
import EnterpriseOtherComponents from '../../enterpriseOtherComponents'

const enterpriseEcommerce = ({menuOpen, setMenuOpen}) => {


  const freezeOtherComponentsMainContainer = {
    height:'100vh',
    overflowY:'hidden'
  }
  const unFreezeOtherComponentsMainContainer = {
    overflowY:'scroll'
  }

  return (
    <div>
        <div className="headerMainContainer">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {menuOpen ? (<div style={freezeOtherComponentsMainContainer} className="otherComponentsMainContainer">
        <EnterpriseOtherComponents />
      </div>)
      :
      (<div style={unFreezeOtherComponentsMainContainer} className="otherComponentsMainContainer">
      <EnterpriseOtherComponents />
    </div>)
    }
    </div>
  )
}

export default enterpriseEcommerce