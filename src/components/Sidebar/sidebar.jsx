import React from "react";
import "./sidebar.css";
import { IoMdClose } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
// import { MdOutlineNavigateNext } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const sidebar = ({ setMenuOpen }) => {

  const navigate = useNavigate()

  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  const handleEnterpriseClick = () => {
    navigate('/enterprise')
    setMenuOpen(false)
  }

  return (
    <div className="sidebarContainer">
      <div className="sidebarInnerContainer">
        <div className="sidebarContents">
          <div className="sidebarHeader">
            <div onClick={handleMenuClose} className="sidebarCloseContainer">
              <IoMdClose className="sidebarIcon" />
            </div>
            <div className="sidebarSearchContainer">
              <IoMdSearch className="sidebarIcon" />
            </div>
          </div>

          <div className="sidebarBody">
          <div className="topMenuContainer">
               <div className="sidebarSell">
                <h3 className='sidebarMenu'>sell</h3>
                <MdNavigateNext className='sidebarNext' />
            </div>
            <div className="sidebarExtensions">
                <h3 className='sidebarMenu'>extensions</h3>
                <MdNavigateNext className='sidebarNext' />
            </div>
            <div className="sidebarResources">
                <h3 className='sidebarMenu'>resources</h3>
                <MdNavigateNext className='sidebarNext' />
            </div>
            <div onClick={handleEnterpriseClick} className="sidebarEnterprise">
                <h3 className='enterpriseMenu'>Enterprise ecommerce</h3>
            </div> 
            </div>
            <div className='midMenuContainer'>
                <h3 className='helpMenu'>Develop on Woo</h3>
                <h3 className='helpMenu'>Hire an expert</h3>
                <h3 className='helpMenu'>Get support</h3>
            </div>
            <div className="lowMenuContainer">
                <div className="lowMenu">
                    <h3 className='language'>$ USD</h3>
                    <MdNavigateNext className='sidebarNext' />
                </div>
                <div className="lowMenu">
                    <h3 className='language'>English (United States) </h3>
                    <MdNavigateNext className='sidebarNext' />
                </div>
            </div>
          </div>
          <div className="sidebarFooter">
            <hr />
            <button className='footerBtn'>Create an account</button>
            <button className='footerBtn'>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
