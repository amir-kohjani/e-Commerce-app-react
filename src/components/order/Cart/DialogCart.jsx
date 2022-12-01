import React, { useEffect, useState } from "react";
import PN from "persian-number";
import styled from "styled-components";
import { pink } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import ItemCartDialog from "./ItemCartDialog";
import { Link } from "react-router-dom";
import { MobileMode } from "../../../util/MobileMode";
import { deleteItem } from "../../../redux/cart";
import LoginWrapper from "../../LoginAndRegister/LoginWrapper";
import CustomDialog from "../../CustomDialog/CustomDialog";

const Container = styled.div`
  max-width: 1000px;
  min-width: ${!MobileMode() ? "750px" : "100%"};
  padding-bottom: ${!MobileMode() ? null : "70px"};
  height: 100%;
`;
const EmpetyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 10px;
`;

const EmpetyIcon = styled.span`
  &::before {
    font-size: 100pt;
  }
`;
const Title = styled.h1`
  font-size: 20pt;
  width: 100%;
  text-align: center;
  margin: 10px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: ${!MobileMode() ? "space-between" : ""};
  align-items: ${!MobileMode() ? "" : "center"};

  background-color: #f5f5f5;
  flex-direction: ${!MobileMode() ? "" : "column"};
  padding-bottom: 70px;
`;
const FinalPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  padding: 10px;
`;

const TotalPrice = styled.span`
  font-size: 14pt;
  color: #8b8b8b;
  margin-left: 10px;
`;
const PayablePrice = styled.span`
  font-size: 18pt;
  color: ${pink[500]};
  margin-left: 10px;
`;

const BtnContinue = styled.button`
  font-size: 14pt;
  color: white;
  width: ${!MobileMode() ? "30%" : "90%"};
  height: 50px;
  margin: 10px;
  background-color: ${pink[500]};
  border: none;
  border-radius: 10px;
`;
const LoginButton = styled.button`
  width: 40%;
  line-height: 60px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  background-color: ${pink[500]};
`;
const DialogCart = ({ items, onClose, cartSubmit }) => {
  const [loginDialogFlag, setLoginDialogFlag] = useState(false);

  const user = useSelector((state) => state.user.user);

  const [totalPrice, setTotalPrice] = useState(
    items.reduce((acc, item) => acc + parseInt(item.price), 0)
  );
  const [payablePrice, setPayablePrice] = useState(
    items.reduce((acc, item) => acc + parseInt(item.priceWithDiscount), 0)
  );

  const dispatch = useDispatch();
  const removeItemHandler = (item) => {
    dispatch(deleteItem(item));
  };
const dialogLoginHandler = () => {
    setLoginDialogFlag((perv) => !perv);
    
  };
  
if(!user.id){
  return(
    <>
  <Container>
        <EmpetyWrapper>
          <EmpetyIcon className="user-label" />
          <Title>لطفا ابتدا وارد حساب خود شوید!</Title>
        <LoginButton onClick={dialogLoginHandler} >ورود یا ثبت نام</LoginButton>
        </EmpetyWrapper>
      </Container>
       <CustomDialog
       open={loginDialogFlag}
       onClose={() => dialogLoginHandler()}
       >
       <LoginWrapper onClose={() => dialogLoginHandler()} />
     </CustomDialog>
       </>
  )
}

  if (items.length == 0) {
    return (
      <Container>
        <EmpetyWrapper>
          <EmpetyIcon className="emptyCart-label" />
          <Title>سبد شما خالی می باشد!</Title>
        </EmpetyWrapper>
      </Container>
    );
  }
  return (
    <Container>
      <Title>سبد خرید شما </Title>
      {items &&
        items.map((item, index) => {
          return (
            <ItemCartDialog
              item={item}
              key={index}
              removeItem={(item) => removeItemHandler(item)}
            />
          );
        })}

      <Wrapper>
        <FinalPriceWrapper>
          <TotalPrice>
            <span>قیمت کل سفارش: </span>
            <span className="price-label">{PN.convertEnToPe(totalPrice)}</span>
          </TotalPrice>
          <PayablePrice>
            <span>قیمت قابل پرداخت: </span>
            <span className="price-label">
              {PN.convertEnToPe(payablePrice)}
            </span>
          </PayablePrice>
        </FinalPriceWrapper>

        {!MobileMode() ? (
          <BtnContinue onClick={() => onClose(true)}>
            <Link to="/order" style={{ color: "white" }}>
              ثبت سفارش
            </Link>
          </BtnContinue>
        ) : (
          <BtnContinue onClick={() => cartSubmit(true)}>ثبت سفارش</BtnContinue>
        )}
      </Wrapper>
    </Container>
  );
};

export default DialogCart;
