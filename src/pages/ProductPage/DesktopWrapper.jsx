import React from "react";
import styled from "styled-components";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Divider } from "@mui/material";
import { pink, orange, blue, magenta, cyan } from "@mui/material/colors";

import { popularProducts } from "../../data";

import ImageSlideProduct from "../../components/ImageSlideProduct/ImageSlideProduct";
import CustomRadioBtnContainer from "../../components/CustomRadioButton/CustomRadioBtnContainer";
import Select from "../../components/customSelect/Select";
// import ListComments from "../components/ListComments";

const Wrapper = styled.div`
  padding: 50px 30px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex: 2;
`;
const InfoContainer = styled.div`
  direction: rtl;
  flex: 2;
  padding: 0px 50px;
`;

const Title = styled.h1`
  text-align: right;
  font-size: 20pt;
  font-weight: normal;
`;

const PropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const Categoyr = styled.div`
  text-align: right;
  position: relative;
  margin: 0px 0px 4px;
  a {
    text-align: right;
    font-size: 14px;
    color: ${pink[500]};

    margin-right: 4px;
    font-weight: 600;
  }
`;
const Description = styled.h1`
  text-align: right;
  font-size: 16px;
  font-weight: normal;
  margin: 0px 0px 4px;
`;
const Brand = styled.h1`
  text-align: right;
  font-size: 18pt;
  font-weight: bold;
  margin: 0px 0px 4px;
`;

const PriceContainer = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  width: 48.7%;
`;

const PriceAndDiscountWrapper = styled.div`
  display: flex;
  width: fit-content;
`;
const Price = styled.p`
  text-align: right;
  font-size: 16pt;
  color: rgb(148, 149, 151);
  text-decoration: line-through;
  margin: 3px 0px;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Discount = styled.p`
  text-align: right;
  font-size: 18pt;
  font-weight: normal;
  color: rgb(243, 122, 35);
  padding-right: 50px;
  margin: 3px 0px;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CurrentPrice = styled.p`
  text-align: right;
  font-size: 22pt;
  color: ${pink[500]};
  font-weight: bold;
  margin-top: 3rem;
`;
const DeliveryInfo = styled.div`
  text-align: right;
  width: 50%;
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
  :after {
    color: ${blue[500]};
    font-size: 60pt;
  }
`;

const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px;
`;

const ButtonAddToCart = styled.button`
  width: 40%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${pink[400]};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #dba8a8;
  }
`;
const FilterContainer = styled.div`
  margin: 30px 0px;
  padding: 0px 50px;

  justify-content: space-between;

  display: flex;
`;

const Filter = styled.div`
  display: flex;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: normal;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const FilterSize = styled.select`
  margin-right: 10px;
  padding: 5px;
  height: min-content;
  border: none;
`;
const FilterSizeOption = styled.option``;

const DesktopWrapper = ({ addToCart, data }) => {
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
          {data.colors&&  <Filter>
         
              <FilterTitle>رنگ بندی</FilterTitle>
              <CustomRadioBtnContainer
                colors={data.colors}
                selectedColor={(color) => console.log(color)}
              />
            </Filter>}

            {data.sizes && (
              <Filter>
                <FilterTitle>سایز</FilterTitle>

                <Select
                  items={data.sizes}
                  defaultValue={"انتخاب کنید"}
                  onSelected={(e) => console.log(e)}
                />
              </Filter>
            )}
          </FilterContainer>
          <WrapperBtn>
            <ButtonAddToCart onClick={addToCartHandler}>
              افزودن به سبد خرید!
            </ButtonAddToCart>
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
