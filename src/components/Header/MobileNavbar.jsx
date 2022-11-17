import React from "react";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { pink } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  /* direction: rtl; */

  text-align: center;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0px;
  border-top: 1px solid rgb(238, 238, 238);
  z-index: 5;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 25%;
  padding: 8px 0px 3px;
  position: relative;
  a {
    text-decoration: none;
    display: block;
    color: ${(props) => (props.active ? pink[500] : "black")};
  }
  :hover {
    color: ${pink[500]};
  }
`;

const Icon = styled.span`
  display: block;
  &::before {
    font-size: 18pt;
    font-weight: bold;
  }
`;

const Title = styled.span`
  display: block;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  padding: 5px 0px;
  transition: all 0.2s ease 0s;
  white-space: nowrap;
`;
const MobileNavbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Item active={pathname == "/" ? true : false}>
        <Link to="/">
          <Icon className="home-label"></Icon>

          <Title>خانه</Title>
        </Link>
      </Item>
      <Item active={pathname == "/mobileSearch" ? true : false}>
        <Link to="/mobileSearch">
          <Icon className="search-label"></Icon>

          <Title>جستجو</Title>
        </Link>
      </Item>
      <Item active={pathname == "/order" ? true : false}>
        <Link to="/order">
          <Icon className="cart-label"></Icon>

          <Title>سبد خرید</Title>
        </Link>
      </Item>
      <Item>
        <a>
          <Icon className="heart-label"></Icon>

          <Title>مورد علاقه</Title>
        </a>
      </Item>
      <Item>
        <a>
          <Icon className="profile-label"></Icon>

          <Title>پروفایل</Title>
        </a>
      </Item>
    </Container>
  );
};

export default MobileNavbar;
