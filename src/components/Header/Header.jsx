import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Search from "./Search";
import MobileNavbar from "./MobileNavbar";
import MobileHeader from "./MobileHeader";
import { MobileMode } from "../../util/MobileMode";
import { useLocation } from "react-router-dom";
import { ContactsOutlined } from "@ant-design/icons";
import GoBackHeader from "./GoBackHeader";

const Header = () => {
  const [mobileMode, setMobileMode] = useState(MobileMode);
  const [noLogo, setNologo] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMode(MobileMode);
  }, [MobileMode]);

  useEffect(() => {
    if (
      pathname == "/order" ||
      pathname == "/mobileSearch" ||
      pathname.includes("/category/") ||
      pathname.includes("/product/")
    )
      setNologo(true);
      else setNologo(false);
  }, [pathname]);
  if (mobileMode) {
    return (
      <>
        {!noLogo ? <MobileHeader /> : <GoBackHeader/>}
        <MobileNavbar />
      </>
    );
  } else {
    return (
      <>
        <Search />
        <Navbar />
      </>
    );
  }
};

export default Header;
