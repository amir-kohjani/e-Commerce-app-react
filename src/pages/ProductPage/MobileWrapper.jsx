import React from "react";
import styled from "styled-components";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Divider } from "@mui/material";
import { pink,orange,blue,magenta,cyan } from "@mui/material/colors";

import { popularProducts } from "../../data";

import ImageSlideProduct from "../../components/ImageSlideProduct/ImageSlideProduct";
import CustomRadioBtnContainer from "../../components/CustomRadioButton/CustomRadioBtnContainer";
// import ListComments from "../components/ListComments";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Title = styled.h1`
font-size: 20pt;
  font-weight: normal;
`;

const InfoContainer = styled.div`
  direction: rtl;
  margin: 0;
  padding: 10px;
  display: inline-block;
  width: 48.7%;
`;
const PropertyContainer = styled.div`
  display: flex;
  flex: 1;
`;

const PriceContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: end;
  justify-content: start;
  flex-direction: column;
  width: 48.7%;
`;

const Price = styled.p`
  font-size: 16pt;
  color: rgb(148, 149, 151);
  text-decoration: line-through;
  margin: 0px;
`;
const Discount = styled.p`
  font-size: 12pt;
  width: max-content;
  font-weight: bold;
  color: rgb(243, 122, 35);
  margin: 3px 0px;
`;
const CurrentPrice = styled.p`
  font-size: 20pt;
  color: ${pink[500]};
  font-weight: bold;
  margin: 0px;
`;

const Categoyr = styled.div`
  text-align: right;
  position: relative;
  margin-bottom: 6px;

  a {
    font-size: 14px;
    color: ${pink[500]};

    margin-right: 4px;
    font-weight: 600;
  }
`;

const Brand = styled.h1`
  text-align: right;
  font-size: 18pt;
  font-weight: bold;
  margin: 0px 0px 4px;
`;
const Description = styled.h1`
  font-size: 16px;
  font-weight: normal;
  margin: 0px;
`;
const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;
const DeliveryInfo = styled.div`
  width: 100%;
  border: solid 0.5px #a1a1a1;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin: 20px 0px;
  h3 {
    margin: 5px;
  }
    :after{
    color:${pink[300]};
    font-size: 60pt;
  }
`;

const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px;
`

const ButtonAddToCart = styled.button`
  width: 80%;
  padding: 15px;
  border: none;
  border-radius:10px;
 color:white;
  background-color:${pink[400]};
  cursor: pointer;
  font-weight: 600;
  &:active {
    background-color: #dba8a8;
  }
`;
const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;

  display: flex;
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 20px 0px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: normal;
  width: max-content;
`;


const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  width: 50%;
  border-radius: 10px;
`;
const FilterSizeOption = styled.option``;

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
            <FilterSize>
              {data.sizes.map((size) => (
                <FilterSizeOption>{size}</FilterSizeOption>
              ))}
            </FilterSize>
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
