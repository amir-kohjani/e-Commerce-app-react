import React, { useEffect } from "react";
import { useState } from "react";
import PaymentDescription from "./PaymentDescription";
import PaymentMethod from "./PaymentMethod";
import ItemCartDialog from "../Cart/ItemCartDialog";
import {
  ButtonSubmit,
  ColorLink,
  Container,
  PaymentWrapper,
  ProductWrapper,
  SubmitWrapper,
  Title,
} from "./styles/paymentInfoStyles";
import { useSelector } from "react-redux";

const PaymentInformation = ({cartItems, address }) => {
  const [bankSelected, setBankSelected] = useState("");


  const selectBankHandler = (bank) => {
    setBankSelected(bank);
  };
  const submitHandler = ()=>{

  }
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <Container>
      <PaymentWrapper>
        <PaymentMethod submitBankSelect={(bank) => selectBankHandler(bank)} />
        <PaymentDescription address={address} />
      </PaymentWrapper>
      <SubmitWrapper>
        <p>
          <span>با انتخاب دکمه پرداخت و تکمیل خرید، موافقت خود را با</span>
          <ColorLink> قوانین و مقررات</ColorLink>
          <span> و همچنین </span>
          <ColorLink>شرایط بازگشت کالا  </ColorLink>
          <span>اعلام نموده اید.</span>
        </p>
        <ButtonSubmit>
          پرداخت و تکمیل خرید ...
        </ButtonSubmit>
      </SubmitWrapper>
      <ProductWrapper>
        <Title>لیست سبد شما :</Title>
        {cartItems &&
          cartItems.map((item, index) => (
            <ItemCartDialog item={item} key={index} noQuantity noPrice noDiscount />
          ))}
      </ProductWrapper>
    </Container>
  );
};

export default PaymentInformation;
