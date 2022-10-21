import { Divider } from "@mui/material";
import React from "react";
import PN from "persian-number";

import {
  Container,
  Image,
  ImageWrapper,
  InfoWrapper,
  Title,
  Description,
  SizeColorWrapper,
  Size,
  Color,
  PriceWrapper,
  Price,
  DiscountWrapper,
  Discount,
  PriceWithDiscount,
  QuntityWrapper,
  Add,
  Count,
  Remove,
  FimalPriceWrapper,
  FinalPrice,
  
} from "./styles/itemCartDialogStyles";
const ItemCartDialog = ({ item }) => {
  return (
    <>
      <Divider />
      <Container>
        <ImageWrapper>
          <Image src={item.img} />
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
            <PriceWithDiscount className="price-label">
              {PN.convertEnToPe(item.priceWithDiscount)}
            </PriceWithDiscount>
          </DiscountWrapper>
        </PriceWrapper>
        <QuntityWrapper>
          <Add className="add-label" />
          <Count>1</Count>
          <Remove className="remove-label" />
        </QuntityWrapper>
        <FimalPriceWrapper>
          <FinalPrice className="price-label">
            {PN.convertEnToPe(item.priceWithDiscount)}
          </FinalPrice>
        </FimalPriceWrapper>
      </Container>
    </>
  );
};

export default ItemCartDialog;
