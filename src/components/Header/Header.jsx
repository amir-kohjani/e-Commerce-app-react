import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Search from "./Search";
import MobileNavbar from "./MobileNavbar"
import MobileHeader from "./MobileHeader";
import {MobileMode} from "../../util/MobileMode"




const Header = () => {
const [mobileMode , setMobileMode] = useState(MobileMode);

useEffect(() => {
  setMobileMode(MobileMode);

},[MobileMode])
  if (mobileMode) {
    return(
      <>
      <MobileHeader/>
      <MobileNavbar/>
      </>
    )
  }else {
    return(
      <>
      <Search/>
      <Navbar/>
      </>
    )
  }
};

export default Header;
