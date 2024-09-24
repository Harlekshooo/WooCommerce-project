import React, { useRef, useState } from "react";
import "./Homescreen.css";
import Header from "../Header/header";
import OtherComponents from "../OtherComponents";

const Homescreen = ({menuOpen, setMenuOpen}) => {

    


    const freezeOtherComponentsMainContainer = {
      height:'100vh',
      overflowY:'hidden'
    }
    const unFreezeOtherComponentsMainContainer = {
      overflowY:'scroll'
    }

  return (
    <div className="entireContainer">
      <div className="headerMainContainer">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {menuOpen ? (<div style={freezeOtherComponentsMainContainer} className="otherComponentsMainContainer">
        <OtherComponents />
      </div>)
      :
      (<div style={unFreezeOtherComponentsMainContainer} className="otherComponentsMainContainer">
      <OtherComponents />
    </div>)
    }
    </div>
  );
};

export default Homescreen;
