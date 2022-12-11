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
import useMobileMode from "../../../hooks/useMobileMode";

const PaymentInformation = ({cartItems, address }) => {
  const [bankSelected, setBankSelected] = useState("");

const mobileMode = useMobileMode();
  const selectBankHandler = (bank) => {
    setBankSelected(bank);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <Container>
      <PaymentWrapper mobile={mobileMode}>
        <PaymentMethod submitBankSelect={(bank) => selectBankHandler(bank)} />
        <PaymentDescription address={address} />
      </PaymentWrapper>
      <SubmitWrapper  mobile={mobileMode}>
        <p>
          <span>با انتخاب دکمه پرداخت و تکمیل خرید، موافقت خود را با</span>
          <ColorLink> قوانین و مقررات</ColorLink>
          <span> و همچنین </span>
          <ColorLink>شرایط بازگشت کالا  </ColorLink>
          <span>اعلام نموده اید.</span>
        </p>
        <ButtonSubmit  mobile={mobileMode}>
          پرداخت و تکمیل خرید ...
        </ButtonSubmit>
      </SubmitWrapper>
        <Title>لیست سبد شما :</Title>
      <ProductWrapper  mobile={mobileMode}>
        {cartItems &&
          cartItems.map((item, index) => (
            <ItemCartDialog item={item} key={index} border noPrice />
          ))}
      </ProductWrapper>
    </Container>
  );
};

export default PaymentInformation;
