import React, { useEffect, useState } from "react";
import PN from "persian-number";
import styled from "styled-components";
import { pink } from "@mui/material/colors";

import ItemCartDialog from "./ItemCartDialog";

const Container = styled.div`
  max-width: 1000px;
  min-width: 750px;
`;

const Title = styled.h1`
  font-size: 20pt;
  width: 100%;
  text-align: center;
  margin: 10px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #f5f5f5;
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
  width: 30%;
  margin: 10px;
  background-color: ${pink[500]};
  border: none;
  border-radius: 10px;
`;
const DialogCart = ({ items }) => {
  const [totalPrice, setTotalPrice] = useState(
    items.reduce((acc, item) => acc + parseInt(item.price),0)
  );
  const [payablePrice, setPayablePrice] = useState(items.reduce((acc, item) => acc + parseInt(item.priceWithDiscount),0));

  useEffect(() => {
    items.map((item) => {});
  }, [items]);

  return (
    <Container>
      <Title>سبد خرید شما </Title>
      {items &&
        items.map((item, index) => {
          return <ItemCartDialog item={item} key={index} />;
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
        <BtnContinue>ثبت سفارش</BtnContinue>
      </Wrapper>
    </Container>
  );
};

export default DialogCart;
