import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { MobileMode } from "../../util/MobileMode";
import DesktopWrapper from "./DesktopWrapper";
import MobileWrapper from "./MobileWrapper";
import { USERS } from "../../Data/users";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

const Container = styled.div`
height: 100%;


`;

const OrderPage = () => {
  const [mobileMode, setMobileMode] = useState(MobileMode);
  const [user, setUser] = useState(USERS[0]);
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    setMobileMode(MobileMode);
  }, [MobileMode]);

  return (
    <>
     <Header noLogo/>
    <Container>
      {mobileMode ? (
        <MobileWrapper user={user} items={cartItems} />
        ) : (
          <DesktopWrapper user={user} items={cartItems} />
          )}
    </Container>
   
          </>
  );
};

export default OrderPage;
