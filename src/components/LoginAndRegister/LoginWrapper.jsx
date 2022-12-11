import React, { useState } from "react";
import styled from "styled-components";
import LoginOrRegister from "./LoginOrRegister";
import ValidationNumber from "./ValidationNumber";
import authService from "./services/authService";
import { addUser } from "../../redux/user";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cart";
import { addItemsWishList } from "../../redux/wishList";
import { appService } from "../../appServises/appservices";
const Container = styled.div``;
const LoginWrapper = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [numberPhone, setNumberPhone] = useState("");
  const [numberValidate, setNumberValidate] = useState("");
  const [incorrectCode, setIncorrectCode] = useState(false);
  const dispatch = useDispatch();
  const setUserInRedux = (user) => {
    dispatch(addUser(user));
  };
  const setItemCartInRedux = (cart) => {
    dispatch(addItems(cart.itemList));
  };
  const setItemWishListInRedux = (wishList) => {
    dispatch(addItemsWishList(wishList.itemList));
  };
  const loginOrRegisterSubmitHandler = (num) => {
    const genCodeRequest = authService.genCode(num);
    Promise.all([genCodeRequest])
      .then((response) => {
        console.log(response);
        setNumberPhone(num);
        setStep(2);
      })
      .catch((error) => console.log(error));
  };
  const fetchUser = (code,callback) => {
 
    const validateCodeRequest = authService.validateCode(numberPhone, code);
    Promise.all([validateCodeRequest])
      .then((response) => {
        if (response[0].data.isError) setIncorrectCode(true);
        else {
          const user = response[0].data._doc;
          setNumberValidate(code);
          window.localStorage.setItem("_ID", user.id);
          setUserInRedux(user);
          callback(user);
        }
      })
      .catch((error) => console.error(error));
  };

  const fetchCart = (id) => {
    const getCartRequest = appService.getCartByUserId(id);
    const getWishListRequest = appService.getWishListByUserId(id);
    Promise.all([getCartRequest,getWishListRequest])
      .then((response) => {
        const cart = response[0].data._doc;
        const wishList = response[1].data._doc;
        setItemCartInRedux(cart);
        setItemWishListInRedux(wishList);
        onClose(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validateNumberHandler = (code) => {
    fetchUser(code,(user)=>{
      fetchCart(user.id)
    });
    // setStep(3);
  };

  const editNumberPhoneHandler = (flag) => {
    if (flag) setStep(1);
  };
  return (
    <Container>
      {step === 1 && <LoginOrRegister submit={loginOrRegisterSubmitHandler} />}
      {step === 2 && (
        <ValidationNumber
          numberPhone={numberPhone}
          submit={validateNumberHandler}
          editNumberPhone={editNumberPhoneHandler}
          incorrectCode={incorrectCode}
        />
      )}
    </Container>
  );
};

export default LoginWrapper;
