import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LoginWrapper from "../LoginAndRegister/LoginWrapper";
import CustomDialog from "../CustomDialog/CustomDialog";
import logo from "../assets/images/logo.svg";
import DialogCart from "../order/Cart/DialogCart";

import {
  Searche,
  Container,
  Logo,
  ImageLogo,
  SearchBox,
  Icons,
  IconCircle,
  UserIcon,
  Cart,
  
} from './styles/search'



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
