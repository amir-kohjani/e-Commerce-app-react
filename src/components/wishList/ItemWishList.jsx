import React from "react";
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
const ItemWishList = ({item}) => {
  return (
    <>
      <Divider />
      <Container>
      <Remove className="remove-label" />
        <ImageWrapper>
          <Image src={item.colors[0].images[0]} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{item.brand}</Title>
          <Description>{item.title}</Description>
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
        <FimalPriceWrapper>
          <FinalPrice className="price-label">
            {PN.convertEnToPe(item.priceWithDiscount)}
          </FinalPrice>
        </FimalPriceWrapper>
      </Container>
    </>
  );
};

export default ItemWishList;
