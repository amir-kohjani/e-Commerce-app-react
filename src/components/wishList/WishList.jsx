import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/cart";
import useMobileMode from "../../hooks/useMobileMode";
import CustomDialog from "../CustomDialog/CustomDialog";
import LoginWrapper from "../LoginAndRegister/LoginWrapper";
import ItemWishList from "./ItemWishList";
import {
  Container,
  EmpetyWrapper,
  EmpetyIcon,
  Title,
  LoginButton,
} from "./styles/wishListStyles";

const WishList = ({ oClose, wishSubmit }) => {
  const [loginDialogFlag, setLoginDialogFlag] = useState(false);
  const [items, setItems] = useState(
    useSelector((state) => state.wishList.items)
  );
  const user = useSelector((state) => state.user.user);
  const mobileMode = useMobileMode();
  const dispatch = useDispatch();

  const dialogLoginHandler = () => {
    setLoginDialogFlag((perv) => !perv);
  };

  const removeItemHandler = (item) => {
    dispatch(deleteItem(item));
  };

  if (!user.id) {
    return (
      <>
        <Container  mobile={mobileMode}>
          <EmpetyWrapper>
            <EmpetyIcon className="user-label" />
            <Title>لطفا ابتدا وارد حساب خود شوید!</Title>
            <LoginButton onClick={dialogLoginHandler}>
              ورود یا ثبت نام
            </LoginButton>
          </EmpetyWrapper>
        </Container>
        <CustomDialog
          open={loginDialogFlag}
          onClose={() => dialogLoginHandler()}
        >
          <LoginWrapper onClose={() => dialogLoginHandler()} />
        </CustomDialog>
      </>
    );
  }
  if (items.length === 0) {
    return (
      <Container mobile={mobileMode}>
        <EmpetyWrapper>
          <EmpetyIcon className="heart-label" />
          <Title>لیست علاقه مندی های شما خالی میباشد!</Title>
        </EmpetyWrapper>
      </Container>
    );
  }

  return (
    <Container mobile={mobileMode}>
      <Title>لیست علاقه مندی های شما </Title>
      {items.length > 0 &&
        items.map((item, index) => {
          return (
            <ItemWishList
              item={item}
              index={index}
              removeItem={removeItemHandler}
            />
          );
        })}
    </Container>
  );
};

export default WishList;
