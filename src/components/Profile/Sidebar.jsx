import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  ItemMenu,
  Menu,
  Name,
  Phone,
  TitleWrapper,
} from "./styles/sidebarStyles";
const Sidebar = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user.user);

  if (user.name){
    return (
      <Container>
        <TitleWrapper>
          <Name>{user.name}</Name>
          <Phone>{user.phone}</Phone>
        </TitleWrapper>
        <Menu>
          <ItemMenu active={pathname == "/my-account"}>
            <Link to="/my-account" className="user-label">
              <span>حساب کاربری</span>
            </Link>
          </ItemMenu>
          <ItemMenu active={pathname == "/my-orders"}>
            <Link to="/my-orders" className="order-label">
              <span>سفارشات</span>
            </Link>
          </ItemMenu>
          <ItemMenu active={pathname === "/address-list"}>
            <Link to="/address-list" className="star-label">
              <span>لیست آدرس ها</span>
            </Link>
          </ItemMenu>
        </Menu>
      </Container>
    );}

};

export default Sidebar;
