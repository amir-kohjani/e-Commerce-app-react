import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Divider, Snackbar, SnackbarContent } from "@mui/material";
import {
  Wrapper,
  WrapperInfo,
  Title,
  PropertyContainer,
  InfoContainer,
  Categoyr,
  Brand,
  Description,
  PriceContainer,
  PriceAndDiscountWrapper,
  Price,
  Discount,
  CurrentPrice,
  FilterContainer,
  Filter,
  FilterTitle,
  WrapperBtn,
  ButtonAddToCart,
  DeliveryInfo,
  ImgContainer,
  ErrorMassage,
} from "./styles/DesctopStyles";

import ImageSlideProduct from "../../components/ImageSlideProduct/ImageSlideProduct";
import CustomRadioBtnContainer from "../../components/CustomRadioButton/CustomRadioBtnContainer";
import Select from "../../components/customSelect/Select";
import { pink } from "@mui/material/colors";

// import ListComments from "../components/ListComments";

const DesktopWrapper = ({ addToCart, product }) => {
  const [data, setData] = useState(product);
  const selectColorHandler = (color) => {
    setData({ ...data, colorSelected: color });
  };
  const selectSizeHanlder = (size) => {
    setData({ ...data, sizeSelected: size });
  };
  const addToCartHandler = () => {
  
    addToCart(data);
  };
  return (
    <Wrapper>
      <WrapperInfo>
        <InfoContainer>
          <Title>{data.title}</Title>
          <Divider />
          <PropertyContainer>
            <InfoContainer>
              <Categoyr>
                <span>دسته بندی:</span>
                <a>{data.category}</a>
              </Categoyr>
              <Brand>{data.brand}</Brand>
              <Description>{data.desc}</Description>
            </InfoContainer>
            <PriceContainer>
              <PriceAndDiscountWrapper>
                <Price className="price-label">
                  <span> {data.price}</span>
                </Price>
                <Discount>
                  <span>تخیف برای شما :</span>
                  <span>{data.discount}%</span>
                </Discount>
              </PriceAndDiscountWrapper>
              <CurrentPrice className="price-label">
                <span>{data.priceWithDiscount}</span>
              </CurrentPrice>
            </PriceContainer>
          </PropertyContainer>
          <FilterContainer>
            {data.colors && (
              <Filter>
                <FilterTitle>رنگ بندی</FilterTitle>
                <CustomRadioBtnContainer
                  colors={data.colors}
                  selectedColor={selectColorHandler}
                />
              </Filter>
            )}

            {data.sizes && (
              <Filter>
                <FilterTitle>سایز</FilterTitle>

                <Select
                  items={data.sizes}
                  defaultValue={"انتخاب کنید"}
                  onSelected={selectSizeHanlder}
                />
              </Filter>
            )}
          </FilterContainer>
          <WrapperBtn>
            <ButtonAddToCart
              onClick={addToCartHandler}
              disabled={data.colorSelected && data.sizeSelected ? false : true}
            >
              افزودن به سبد خرید!
            </ButtonAddToCart>
            <ErrorMassage
              show={data.colorSelected && data.sizeSelected ? false : true}
            >
              لطفا ابتدا رنگ وسایز مورد نظر را انتخاب نمایید!
            </ErrorMassage>
          </WrapperBtn>
          <Divider />
          <DeliveryInfo className="shoppingCar-label">
            <div>
              <h3>ارسال رایگان</h3>
              <p>برای خرید های بالای ۵۰۰ هزار تومان</p>
            </div>
          </DeliveryInfo>
        </InfoContainer>
      </WrapperInfo>
      <ImgContainer>
        <ImageSlideProduct item={data} />
      </ImgContainer>
    </Wrapper>
  );
};

export default DesktopWrapper;
