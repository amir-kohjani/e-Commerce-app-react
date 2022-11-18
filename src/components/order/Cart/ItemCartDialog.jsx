import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const ItemCartDialog = ({
  item,
  noQuantity = false,
  noPrice = false,
  noDiscount = false,
  removeItem
}) => {
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    if (item.quantity) {
      setQuantity(item.quantity)
    }else {
      setQuantity(1)
    }
  }, []);

  const addQuantityHandler = () =>{
    setQuantity(prev=>prev+1);
  }
  const removeQuantityHandler = () =>{
    if(quantity > 1){
      setQuantity(prev=>prev-1);
    }else if(quantity ==1){
      removeItem(item);
    }
  }
  return (
    <>
      <Divider />
      <Container>
        <Link to={`/product/${item.id}`}>
          <ImageWrapper>
            <Image src={item.colors[item.colorSelected.index].images[0]} />
          </ImageWrapper>
          <InfoWrapper>
            <Title>{item.brand}</Title>
            <Description>{item.title}</Description>
            <SizeColorWrapper>
              <Size>{item.sizeSelected}</Size>
              <Color>{item.colorSelected.name}</Color>
            </SizeColorWrapper>
          </InfoWrapper>
        </Link>
        {!noDiscount &&
          (item.discount ? (
            <PriceWrapper>
              <Price className="price-label">{item.price}</Price>
              <DiscountWrapper>
                <Discount>{PN.convertEnToPe(item.discount)}</Discount>
              </DiscountWrapper>
            </PriceWrapper>
          ) : null)}
        {!noQuantity && (
          <QuntityWrapper>
            <Add className="add-label" onClick={()=>addQuantityHandler()} />
            <Count>{PN.convertEnToPe(quantity)}</Count>
            <Remove className="remove-label" onClick={()=>removeQuantityHandler()} />
          </QuntityWrapper>
        )}
        {!noPrice && (
          <FimalPriceWrapper>
            <FinalPrice className="price-label">
              {item.discount
                ? PN.convertEnToPe(item.priceWithDiscount)
                : PN.convertEnToPe(item.price)}
            </FinalPrice>
          </FimalPriceWrapper>
        )}
      </Container>
    </>
  );
};

export default ItemCartDialog;
