import { Divider } from "@mui/material";

import React from "react";
import { useState } from "react";
import PN from "persian-number";

import {
  Container,
  Image,
  ImageWrapper,
  InfoWrapper,
  Title,
  Description,
 
  PriceWrapper,
  Price,
  DiscountWrapper,
  Discount,
  PriceWithDiscount,
  FimalPriceWrapper,
  FinalPrice,
  Remove,
} from "./styles/ItemWishListStyles";
import useMobileMode from "../../hooks/useMobileMode";
const ItemWishList = ({item,removeItem}) => {

  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const mobileMode= useMobileMode();
  const deleteItem = () => {
    removeItem(item);
    setDeleteConfirmation(false);
  };

 
  return (
    <>
      <Divider />
      <Container mobile={mobileMode}>
      {/* <Remove className="remove-label" /> */}
        <ImageWrapper>
          <Image src={item.image} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{item.brand}</Title>
          <Description>{item.title}</Description>
        </InfoWrapper>
        {/* <PriceWrapper>
          <Price className="price-label">{item.price}</Price>
          <DiscountWrapper>
            <Discount>{PN.convertEnToPe(item.discount)}</Discount>
            <PriceWithDiscount className="price-label">
              {PN.convertEnToPe(item.priceWithDiscount)}
            </PriceWithDiscount>
          </DiscountWrapper>
        </PriceWrapper>
        <FimalPriceWrapper>
          <FinalPrice className="price-label">
            {PN.convertEnToPe(item.priceWithDiscount)}
          </FinalPrice>
        </FimalPriceWrapper> */}
      </Container>
    </>
  );
};

export default ItemWishList;
