import React from "react";
import PN from "persian-number";
import { ImageLogo, Logo } from "../../Header/styles/search";
import {
  Amount,
  ButtonSubmit,
  Container,
  SubmitWrapper,
  Title,
  TypeOfPayment,
  Wrapper,
} from "./styles/PaymentGatewayStyles";
import logo from "../../assets/images/logo.svg";
const PaymentGateway = ({ amount, typeOfPayment }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <ImageLogo src={logo} />
        </Logo>
        <Title>شما به درگاه بانک منتقل میشوید...</Title>
        <Amount>
          مبلغ پرداختی :<span className="price-label">{PN.convertEnToPe(amount)}</span>
        </Amount>
        <TypeOfPayment>
نوع پرداخت : <span>{typeOfPayment}</span>
        </TypeOfPayment>
        <SubmitWrapper>
          <p>درصورت عدم انتقال ، از لینک زیر استفاده نمایید.</p>
          <ButtonSubmit>انتقال به {typeOfPayment}</ButtonSubmit>
        </SubmitWrapper>
      </Wrapper>
    </Container>
  );
};

export default PaymentGateway;
