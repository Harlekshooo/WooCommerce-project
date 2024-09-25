import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logoImage.svg";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6"
import { FaAngleUp } from "react-icons/fa6";
import { IoSearchSharp } from 'react-icons/io5'
import Sidebar from "../Sidebar/sidebar";
import SellDropdown from "../SellDropdown/sellDropdown"
import ExtDropdown from "../ExtDropdown/extDropdown"
import ResDropDown from "../../components/ResDropDown/resDropDown"
import { useNavigate } from "react-router-dom";

const header = ({ setMenuOpen, menuOpen }) => {

  const handleMenuClick = () => {
    setMenuOpen(true)
  }
  
  const navigate = useNavigate()

  const [sellState, setSellState] = useState(false)
  const [extensionState, setExtensionState] = useState(false)
  const [resourceState, setResourceState] = useState(false)

  const handleSellClick = () => {
    setSellState(!sellState)
    setExtensionState(false)
    setResourceState(false)
}

const handleExtensionsClick = () => {
    setExtensionState(!extensionState)
    setSellState(false)
    setResourceState(false)
}

const handleResourcesClick = () => {
   setResourceState(!resourceState)
   setExtensionState(false)
   setSellState(false)
}

const handleEnterpriseClick = () => {
  navigate('/enterprise')
  setMenuOpen(false)
}



  return (
    <div className="headerContainer">
      <div className="headerInnerContainer">
        <div className="logoImgContainer">
          <img className="logoImg" src={logo} alt="" />
        </div>
        
      <div className="middleNav">
            <div onClick={handleSellClick} className="middleNavMenu">
                <h5 className='desktopSellHeader'>Sell</h5>
                {sellState ? <FaAngleUp className='desktopUp' /> : <FaAngleDown className='desktopDown' />}
            </div>
            <div onClick={handleExtensionsClick} className="middleNavMenu">
                <h5 className='desktopExtensionsHeader'>Extensions</h5>
                {extensionState ? <FaAngleUp className='desktopUp' /> : <FaAngleDown className='desktopDown' />}
            </div>
            <div onClick={handleResourcesClick} className="middleNavMenu">
                <h5 className='desktopResourcesHeader'>Resources</h5>
                {resourceState ? <FaAngleUp className='desktopUp' /> : <FaAngleDown className='desktopDown' />}
                {}
            </div>
            <div onClick={handleEnterpriseClick} className="middleNavMenu">
                <h5 className='desktopEnterpriseHeader'>Enterprise ecommerce</h5>
            </div>
        </div>

        <div className="navEnd">
            <div className="desktopSearchContainer">
                <IoSearchSharp className='desktopSearch'/>
            </div>
            <div className="desktopLogContainer">
                <h5 className='desktopLog'>Log in</h5>
            </div>
            <div className="desktopCreateBtnContainer">
                <button className='desktopCreateBtn'>Create an account</button>
            </div>
        </div>

        <div onClick={handleMenuClick} className="headerMenuContainer">
          <IoMenu className="hamburgerIcon" />
        </div>
      </div>

      {(<div className="theDropdownContainer">
        {sellState && (<SellDropdown />)}
        {extensionState && (<ExtDropdown />)}
        {resourceState && (<ResDropDown />)}
    </div>)}

      {menuOpen && (<div className="sidebarMainContaier">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>)}
    </div>
  );
};

export default header;
