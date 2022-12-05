import { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LoginWrapper from "../LoginAndRegister/LoginWrapper";
import WishList from "../wishList/WishList"
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
  Cart,
  LoginText,
  Icon,
  CartIconWrapper,
} from "./styles/search";
import { Link } from "react-router-dom";

import { Menu, MenuItem } from "@mui/material";

const Search = () => {
  const [scrolled, setscrolled] = useState(false);
  const [cartDialogFlag, setCartDialogFlag] = useState(false);
  const [loginDialogFlag, setLoginDialogFlag] = useState(false);
  const [wishListDialogFlag, setWishListDialogFlag] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.user);
  // window.addEventListener("scroll", function () {
  //   window.scrollY > 150 ? setscrolled(true) : setscrolled(false);
  // });

  const dialogCartHandler = () => {
    setCartDialogFlag((perv) => !perv);
  };

  const dialogLoginHandler = () => {
    setLoginDialogFlag((perv) => !perv);
  };

  const handleClickDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };

  const logOutUserHandler = () => {
    localStorage.removeItem("_ID");
    localStorage.removeItem("_t");
    handleCloseDropDown();
    window.location.reload();
  };

  const wishListDialogHandler = () => {
    setWishListDialogFlag((prev) => !prev);
    handleCloseDropDown();
  };
  // useEffect(() => {
  //   console.log(user)
  // })
  return (
    <Searche scrolled={scrolled}>
      <Container>
        <Link to="/">
          <Logo>
            <ImageLogo src={logo} />
          </Logo>
        </Link>
        <SearchBox>
          <i>
            <SearchIcon fontSize="large" />
          </i>
          <input placeholder="جستجو میان تمامی کالاها..." />
        </SearchBox>
        <Icons>
          <Icon>
            <Cart className="cart-label" onClick={() => dialogCartHandler()}>
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </Cart>
          </Icon>
          <span>|</span>
          <Icon>
            {!user.name ? (
              <LoginText onClick={() => dialogLoginHandler()}>
                ورود یا ثبت نام
              </LoginText>
            ) : (
              <>
                <CartIconWrapper>
                  <Cart
                    className="user-label"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickDropDown}
                  ></Cart>
                  <span>{user.name}</span>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseDropDown}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={logOutUserHandler}>خروج</MenuItem>
                    <MenuItem onClick={wishListDialogHandler}>
                      لیست علاقه مندی ها
                    </MenuItem>
                  </Menu>
                </CartIconWrapper>
              </>
            )}
          </Icon>
        </Icons>
        <CustomDialog open={cartDialogFlag} onClose={() => dialogCartHandler()}>
          <DialogCart items={cartItems} onClose={() => dialogCartHandler()} />
        </CustomDialog>
        <CustomDialog open={loginDialogFlag} onClose={dialogLoginHandler}>
          <LoginWrapper onClose={dialogLoginHandler} />
        </CustomDialog>
        <CustomDialog open={wishListDialogFlag} onClose={wishListDialogHandler}>
          <WishList onClose={wishListDialogHandler} />
        </CustomDialog>
      </Container>
    </Searche>
  );
};

export default Search;

{
  /* <Icons>
          <IconCircle>
            {/* <UserIcon
              className="user-label"
              onClick={() => dialogLoginHandler()}
            >
            { user.name  }
            </UserIcon> */
}
// <LoginText>ورود یا ثبت نام</LoginText>
//   </IconCircle>
//   <IconCircle>
//     <Cart className="cart-label" onClick={() => dialogCartHandler()}>
//       {cartItems.length > 0 && <span>{cartItems.length}</span>}
//     </Cart>

//   </IconCircle>
// </Icons> */}
