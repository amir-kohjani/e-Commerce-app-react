import React from "react";
import { Alert, CircularProgress, Divider, Snackbar } from "@mui/material";
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
  ErrorMassage,
} from "./styles/MobileStyles";
import { useState } from "react";
import PN from "persian-number";
import CustomSnakbar from "../../components/snakbar/CustomSnakbar";

const MobileWrapper = ({ addToCart, product }) => {
  const [data, setData] = useState(product);
  const [openSnakbar,setOpenSnakbar] = useState(false);
  const [loading,setLoading] = useState(false);


  const snakbarHandler = (open)=>{
       setOpenSnakbar(open);
     
  }
  const selectColorHandler = (color) => {
    setData({ ...data, colorSelected: color });
  };
  const selectSizeHanlder = (size) => {
    setData({ ...data, sizeSelected: size });
  };
  const addToCartHandler = () => {
    if(!loading){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      addToCart(data);
      snakbarHandler(true);

    }, 2000);
    }
  
  };
  
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
              <span> {PN.convertEnToPe( data.price)}</span>
            </Price>
            <Discount>
              <span>تخفیف بر ای شما : </span>
              <span>{PN.convertEnToPe( data.discount)}%</span>
            </Discount>
            <CurrentPrice className="price-label">
              <span>{PN.convertEnToPe( data.priceWithDiscount)}</span>
            </CurrentPrice>
          </PriceContainer>
        </PropertyContainer>
        <FilterContainer>
          <Filter>
            <FilterTitle>رنگ بندی :</FilterTitle>
            <CustomRadioBtnContainer
              colors={data.colors}
              selectedColor={selectColorHandler}
            />
          </Filter>

          <Filter>
            <FilterTitle>سایز بندی :</FilterTitle>

            {data.sizes && (
              <Select
                items={data.sizes}
                defaultValue={"انتخاب کنید"}
                onSelected={selectSizeHanlder}
              />
            )}
          </Filter>
        </FilterContainer>
        <WrapperBtn>
          <ButtonAddToCart
            onClick={addToCartHandler}
            disabled={data.colorSelected && data.sizeSelected ? false : true}
          >
              {loading ? (
                <CircularProgress color="primary" size={40} />
              ) : (
                "    افزودن به سبد خرید!"
              )}
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
        
      </WrapperInfo>
      <CustomSnakbar open={openSnakbar} onClose={()=> setOpenSnakbar(false)}
       message='محصول با موفقیت به سبد شما اضافه شد!' />
    </Wrapper>
  );
};

export default MobileWrapper;
