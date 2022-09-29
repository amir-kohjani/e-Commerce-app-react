import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.svg";

import { pink } from "@mui/material/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageLogo = styled.img`
  display: block;
  width: 60%;

  height: auto;
`;

const Banner = styled.div`
  margin: 2.4%;
  direction: rtl;
  text-align: center;
  line-height: 48px;
  background-color:${pink[400]};
  border-radius: 8px;
  color: white;
  font-size: 10pt;
  text-decoration: none;
  font-weight: 700;
`;

const MobileHeader = () => {
  return (
    <Container>
      <LogoWrapper>
        <ImageLogo src={logo} />
      </LogoWrapper>
      <Banner>   تخیفات ویژه! برای خرید های بالا 500 هزار تومان</Banner>
    </Container>
  );
};

export default MobileHeader;
