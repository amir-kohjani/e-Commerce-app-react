import React from "react";
import { Divider } from "@mui/material";
import ImageSlideProduct from "../../components/ImageSlideProduct/ImageSlideProduct";
import CustomRadioBtnContainer from "../../components/CustomRadioButton/CustomRadioBtnContainer";
import Select from "../../components/customSelect/Select";
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
} from "./styles/MobileStyles";

const MobileWrapper = ({ amuntHandler, data, amunt }) => {
  return (
    <Wrapper>
      <ImgContainer>
        <ImageSlideProduct item={data} />
      </ImgContainer>
      <WrapperInfo>
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
            <Price className="price-label">
              <span> {data.price}</span>
            </Price>
            <Discount>
              <span>تخفیف بر ای شما : </span>
              <span>{data.discount}%</span>
            </Discount>
            <CurrentPrice className="price-label">
              <span>{data.priceWithDiscount}</span>
            </CurrentPrice>
          </PriceContainer>
        </PropertyContainer>
        <FilterContainer>
          <Filter>
            <FilterTitle>رنگ بندی :</FilterTitle>
            <CustomRadioBtnContainer
              colors={data.colors}
              selectedColor={(color) => console.log(color)}
            />
          </Filter>

          <Filter>
            <FilterTitle>سایز بندی :</FilterTitle>
           

            {data.sizes && (
              <Select
                items={data.sizes}
                defaultValue={"انتخاب کنید"}
                onSelected={(e) => console.log(e)}
              />
            )}
          </Filter>
        </FilterContainer>
        <WrapperBtn>
          <ButtonAddToCart>افزودن به سبد خرید!</ButtonAddToCart>
        </WrapperBtn>
        <Divider />
        <DeliveryInfo className="shoppingCar-label">
          <div>
            <h3>ارسال رایگان</h3>
            <p>برای خرید های بالای ۵۰۰ هزار تومان</p>
          </div>
        </DeliveryInfo>
      </WrapperInfo>
    </Wrapper>
  );
};

export default MobileWrapper;
