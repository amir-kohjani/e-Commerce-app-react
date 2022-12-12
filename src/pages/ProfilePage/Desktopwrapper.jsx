import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AddressList from "../../components/Profile/AddressList";
import Content from "../../components/Profile/Content";
import MyAccount from "../../components/Profile/MyAccount";
import MyOrders from "../../components/Profile/MyOrders";
import Sidebar from "../../components/Profile/Sidebar";
import {USERS } from "../../Data/users"
const Container = styled.div`
  max-width: 1440px;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: noWrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Desktopwrapper = ({ user }) => {
  const { pathname } = useLocation();
  const editHandler = () => {
    console.log("Edit");
  };

  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Content>
          {pathname == "/my-account" && (
            <MyAccount user={user} editSubmit={editHandler} />
          )}
          {pathname == "/my-orders" &&( <MyOrders />)}
          {pathname == "/address-list" &&( <AddressList address={USERS[0].address} />)}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Desktopwrapper;
