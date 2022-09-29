import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { MobileMode } from "../../util/MobileMode";
import DesktopWrapper from "./DesktopWrapper";
import MobileWrapper from "./MobileWrapper";
import {USERS} from "../../Data/users"

const Container = styled.div``;

const OrderPage = () => {
  const [mobileMode, setMobileMode] = useState(MobileMode);
  const [user,setUser] = useState(USERS[0]);
  useEffect(() => {
    setMobileMode(MobileMode);
  }, [MobileMode]);

  return (
    <Container>{mobileMode ? <MobileWrapper /> : <DesktopWrapper user={user} />}</Container>
   
  );
};

export default OrderPage;
