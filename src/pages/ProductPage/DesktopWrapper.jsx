import React, { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  Alert,
  CircularProgress,
  Divider,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import CustomSpinner from "../../components/customSpinner/CustomSpinner";
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
import PN from "persian-number";
import CustomSnakbar from "../../components/snakbar/CustomSnakbar";
import { useEffect } from "react";
import CustomImageButton from "../../components/customImageButton/CustomImageButton";

// import ListComments from "../components/ListComments";

const DesktopWrapper = ({ addToCart, product }) => {
  const [data, setData] = useState({});
  const [openSnakbar, setOpenSnakbar] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [curentColorIndex, setCurentColorIndex] = useState();
  const [curentColor, setCurentColor] = useState([]);

  const snakbarHandler = (open) => {
    setOpenSnakbar(open);
  };
  const selectColorHandler = (color) => {
    const indexColor = data.colors.indexOf(color);
    setData({ ...data, colorSelected:{name:color.name,index:indexColor} });
    // console.log(indexColor);
    if (color !== undefined) setCurentColor(color);
  };
  const selectSizeHanlder = (size) => {
    setData({ ...data, sizeSelected: size });
  };
  const addToCartHandler = () => {
    //this func add product to cart and this is just for test
    if (!loadingProduct) {
      setLoadingProduct(true);
      setTimeout(() => {
        setLoadingProduct(false);
        addToCart(data);
        snakbarHandler(true);
      }, 2000);
    }
  };

  useEffect(() => {
    setData(product);
    // setCurentColorIndex(0);
    setCurentColor(product.colors[0]);
  }, [product]);
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
              {data.discount ? (
                <>
                  {" "}
                  <PriceAndDiscountWrapper>
                    <Price className="price-label">
                      <span> {PN.convertEnToPe(data.price)}</span>
                    </Price>
                    <Discount>
                      <span>تخیف برای شما :</span>
                      <span>{PN.convertEnToPe(data.discount)}%</span>
                    </Discount>
                  </PriceAndDiscountWrapper>
                  <CurrentPrice className="price-label">
                    <span>{PN.convertEnToPe(data.priceWithDiscount)}</span>
                  </CurrentPrice>
                </>
              ) : (
                <CurrentPrice>
                  <span>قیمت : </span>
                  <span className="price-label">
                    {PN.convertEnToPe(data.price)}
                  </span>
                </CurrentPrice>
              )}
            </PriceContainer>
          </PropertyContainer>
          <FilterContainer>
            {data.colors && (
              <Filter>
                <FilterTitle>رنگ بندی</FilterTitle>
                <CustomImageButton colors={data.colors} colorSelected={(color)=>selectColorHandler(color)}/>
              </Filter>
            )}

            {curentColor.sizes && (
              <Filter>
                <FilterTitle>سایز</FilterTitle>

                <Select
                  items={curentColor.sizes}
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
              {loadingProduct ? (
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
        </InfoContainer>
      </WrapperInfo>
      {/* {console.log(curentColor?.images)} */}
      {curentColor?.images && (
        <ImgContainer>
          <ImageSlideProduct item={curentColor?.images} />
        </ImgContainer>
      )}
      <CustomSnakbar
        open={openSnakbar}
        onClose={() => setOpenSnakbar(false)}
        message="محصول با موفقیت به سبد شما اضافه شد!"
      />

      {/* <CustomSpinner/> */}
    </Wrapper>
  );
};

export default DesktopWrapper;
