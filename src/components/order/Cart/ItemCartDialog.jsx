import { Divider } from "@mui/material";
import { orange, pink } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import PN from "persian-number"
const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
const ImageWrapper = styled.div`
  padding: 10px;
  max-width: 200px;
    min-width: 180px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
   width: 100%;
    height: 100%;
    object-fit: cover;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  text-align: right;
  font-size: 12pt;
  font-weight: bold;
`;
const Description = styled.p`
  text-align: right;
  font-size: 12pt;
  font-weight: normal;
`;

const SizeColorWrapper = styled.div`
  font-size: 12pt;
  display: flex;
  justify-content: space-between;
`;
const Size = styled.span`
  margin-right: 10px;
  &:before {
    content: "سایز:";
    opacity: 0.7;
    margin-left: 5px;
  }
`;
const Color = styled.span`
  margin-right: 10px;
  &:before {
    content: "رنگ:";
    opacity: 0.7;
    margin-left: 5px;
  }
`;
const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Price = styled.span`
  font-size: 12pt;
  text-decoration: line-through;
  color: #8b8b8b;
`;
const DiscountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12pt;
  color: ${orange[500]};
`;
const Discount = styled.span`
  &:before {
    content: "تخفیف";
    margin-left: 5px;
  }

  &:after {
    content: "%";
    margin-left: 10px;
  }
`;
const PriceWithDiscount = styled.span``;
const QuntityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16pt;
  align-items: center;
`;
const Add = styled.span`
    margin-left: 10px;
    cursor: pointer;
`;
const Count = styled.span``;
const Remove = styled.span`
    margin-right: 10px;
    cursor: pointer;
`;
const FimalPriceWrapper = styled.div`
  font-size: 16pt;
  color: ${pink[500]};
`;
const FinalPrice = styled.span``;

const ItemCartDialog = ({item}) => {


  return (
    <>
    <Divider />
    <Container>
         
      <ImageWrapper>
        <Image  src={item.img}/>
      </ImageWrapper>
      <InfoWrapper>
        <Title>{item.brand}</Title>
        <Description>{item.title}</Description>
        <SizeColorWrapper>
          <Size>{item.sizeSelected}</Size>
          <Color>{item.colorSelected.name}</Color>
        </SizeColorWrapper>
      </InfoWrapper>
      <PriceWrapper>
        <Price className="price-label">{item.price}</Price>
        <DiscountWrapper>
          <Discount>{PN.convertEnToPe(item.discount)}</Discount>
          <PriceWithDiscount className="price-label">{PN.convertEnToPe(item.priceWithDiscount)}</PriceWithDiscount>
        </DiscountWrapper>
      </PriceWrapper>
      <QuntityWrapper>
        <Add className="add-label" />
        <Count>1</Count>
        <Remove className="remove-label" />
      </QuntityWrapper>
      <FimalPriceWrapper>
        <FinalPrice className="price-label">{PN.convertEnToPe(item.priceWithDiscount)}</FinalPrice>
      </FimalPriceWrapper>
    </Container>
            </>
  );
};

export default ItemCartDialog;
