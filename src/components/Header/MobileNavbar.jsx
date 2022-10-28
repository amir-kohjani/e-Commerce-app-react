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
  display: inline-block;
  width: 25%;
  padding: 8px 0px 3px;
  position: relative;
  a {
    text-decoration: none;
    display: block;
    color: ${props=>props.active ? pink[500] : 'black'};
  }
  :hover{
    color:${pink[500]};
  }
`;

const Icon = styled.span`
  display: block;
`;

const Title = styled.span`
  display: block;
  font-size: 9px;
  text-align: center;
  padding: 5px 0px;
  transition: all 0.2s ease 0s;
  white-space: nowrap;
`;
const MobileNavbar = () => {
  const {pathname} =useLocation();

  return (
    <Container>
      <Item active={pathname=='/' ? true : false}>
        <Link to="/">
          <Icon >
            <HomeIcon />
          </Icon>

          <Title>Home</Title>
        </Link>
      </Item>
      <Item active={pathname=='/mobileSearch' ? true : false}>
        <Link to="/mobileSearch">
          <Icon>
            <SearchIcon />
          </Icon>

          <Title>Search</Title>
        </Link>
      </Item>
      <Item active={pathname=='/order' ? true : false}>
        

        <Link to='/order' > 
          <Icon>
            <ShoppingCartIcon />
          </Icon>

          <Title>Cart</Title>
        </Link>
      </Item>
      <Item>
        <a>
          <Icon>
            <FavoriteBorderIcon />
          </Icon>

          <Title>Favorite</Title>
        </a>
      </Item>
      <Item>
        <a>
          <Icon>
            <AccountCircleIcon />
          </Icon>

          <Title>Profile</Title>
        </a>
      </Item>
    </Container>
  );
};

export default MobileNavbar;
