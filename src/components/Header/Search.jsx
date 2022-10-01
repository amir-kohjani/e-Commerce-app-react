import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../assets/images/logo.svg";
import { mobile } from "../../responsive";
import CustomDialog from "../CustomDialog/CustomDialog";
import DialogCart from "../order/Cart/DialogCart";

import LoginWrapper from "../LoginAndRegister/LoginWrapper";
import { pink } from "@mui/material/colors";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: auto;
  position: relative;
`;

const Searche = styled.div`
  padding: 20px 0;
  ${(props) =>
    props.scrolled
      ? {
          height: "12vh",
          position: "fixed",
          top: "0",
          zIndex: "1000",
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: " -1px 11px 24px -11px rgba(0, 0, 0, 0.2)",
          transition: "0s",
        }
      : ""}
`;

const Logo = styled.div`
  /* width: 20%; */
`;

const ImageLogo = styled.img`
  width: 90%;
  height: auto;
`;
const SearchBox = styled.div`
  direction: rtl;
  display: flex;
  position: relative;
  justify-content: start;
  width: 50%;
  height: 4rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  /* padding: 10px; */
  background-color: #f5f5f5;
  border-radius: 50px;
  i {
    width: 10%;
    text-align: center;
    font-size: 20px;
    opacity: 0.5;
    padding: 15px 20px;
  }
  input {
    text-align: right;
    width: 80%;
    padding: 10px;
    border: none;
    outline: none;
    z-index: 1000;
    background-color: #f5f5f5;

    ::placeholder {
      font-size: 15px;
    }
    ${mobile({
      width: "60%",
    })}
  }
  span {
    display: flex;
    text-align: center;
    align-items: center;
    width: 20%;
    opacity: 0.5;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 20%;
`;
const IconCircle = styled.span`
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: none;
  margin-left: 20px;
  text-align: center;
  border-radius: 50%;
  span {
    position: absolute;
    top: 0px;
    right: 0px;
    left: auto;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    background-color: #e94560;
    font-size: 10pt;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;
const UserIcon = styled.div`
  position: relative;
  font-size: 22pt;
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${pink[500]};
  }

  a {
    text-decoration: none;
    color: #c90000;
  }
`;

const Cart = styled.div`
  position: relative;
  font-size: 25pt;
  max-width: max-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${pink[500]};
  }
  a {
    text-decoration: none;
    color: #c90000;
  }
`;

const Search = () => {
  const [scrolled, setscrolled] = useState(false);
  const [cartDialogFlag, setCartDialogFlag] = useState(false);
  const [loginDialogFlag, setLoginDialogFlag] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  window.addEventListener("scroll", function () {
    window.scrollY > 100 ? setscrolled(true) : setscrolled(false);
  });

  const dialogCartHandler = () => {
    setCartDialogFlag((perv) => !perv);
  };

  const dialogLoginHandler = () => {
    setLoginDialogFlag((perv) => !perv);
  };

  return (
    <Searche scrolled={scrolled}>
      <Container>
        <Logo>
          <ImageLogo src={logo} />
        </Logo>
        <SearchBox>
          <i>
            <SearchIcon fontSize="large" />
          </i>
          <input placeholder="جستجو میان تمامی کالاها..." />
        </SearchBox>
        <Icons>
          <IconCircle>
            <UserIcon
              className="user-label"
              onClick={() => dialogLoginHandler()}
            >
              <a></a>
            </UserIcon>
          </IconCircle>
          <IconCircle>
            <Cart className="cart-label" onClick={() => dialogCartHandler()}>
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </Cart>
            <CustomDialog
              open={cartDialogFlag}
              onClose={() => dialogCartHandler()}
            >
              <DialogCart items={cartItems} />
            </CustomDialog>
            <CustomDialog
              open={loginDialogFlag}
              onClose={() => dialogLoginHandler()}
            >
              <LoginWrapper />
            </CustomDialog>
          </IconCircle>
        </Icons>
      </Container>
    </Searche>
  );
};

export default Search;
