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
  LikeContainer,
  Like
} from "./styles/MobileStyles";
import { useState } from "react";
import CustomImageButton from "../../components/customImageButton/CustomImageButton";
import PN from "persian-number";
import CustomSnakbar from "../../components/snakbar/CustomSnakbar";
import { useEffect } from "react";

const MobileWrapper = ({
  addToCart,
  product,
  addWishList,
  productWished,
  removeWishList,
}) => {
  const [data, setData] = useState(product);
  const [loading, setLoading] = useState(false);
  const [curentColor, setCurentColor] = useState([]);
  const [wished, setWished] = useState(false);

  const selectColorHandler = (color) => {
    setData({
      ...data,
      colorSelected: { name: color.name, image: color.images[0] },
    });

    if (color !== undefined) setCurentColor(color);
  };
  const selectSizeHanlder = (size) => {
    setData({ ...data, sizeSelected: size });
  };
  const addToCartHandler = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        addToCart(data);
      }, 2000);
    }
  };
  const likedHandler = () => {
    if (!productWished) {
      addWishList(data, (wishedProduct) => {
        if (wishedProduct) setWished(true);
        else setWished(false);
      });
    } else {
      removeWishList(data);
      setWished(false);
    }
  };
  useEffect(() => {
    setData(product);
    setWished(productWished);
    setCurentColor(product.colors[0]);
  }, [product]);
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
},[curentColor])
  return (
    <Wrapper>
      {curentColor?.images && (
        <ImgContainer>
         <LikeContainer>
                <Like
                  className={wished ? "heart-fill-label" : "heart-label"}
                  onClick={likedHandler}
                ></Like>
              </LikeContainer>
          <ImageSlideProduct item={curentColor?.images} />
        </ImgContainer>
      )}
      <WrapperInfo>
        <Title>{data.title}</Title>
        <Divider />
        <PropertyContainer>
          <InfoContainer>
            <Categoyr>
              <span>دسته بندی:</span>
              <a>{data.category[0]}</a>
            </Categoyr>
            <Brand>{data.brand}</Brand>
            <Description>{data.desc}</Description>
          </InfoContainer>
          <PriceContainer>
            <Price className="price-label">
              <span> {PN.convertEnToPe(PN.sliceNumber(data.price))}</span>
            </Price>
            <Discount>
              <span>تخفیف بر ای شما : </span>
              <span>{PN.convertEnToPe(data.discount)}%</span>
            </Discount>
            <CurrentPrice className="price-label">
              <span>
                {" "}
                {PN.convertEnToPe(PN.sliceNumber(data.priceWithDiscount))}
              </span>
            </CurrentPrice>
          </PriceContainer>
        </PropertyContainer>
        <FilterContainer>
          <Filter>
            <FilterTitle>رنگ بندی :</FilterTitle>
            <CustomImageButton
              colors={data.colors}
              colorSelected={(color) => selectColorHandler(color)}
            />
          </Filter>

          <Filter>
            <FilterTitle>سایز بندی :</FilterTitle>

            {curentColor.sizes && (
              <Select
                items={curentColor.sizes}
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
              <CircularProgress color="primary" size={30} />
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
    </Wrapper>
  );
};

export default MobileWrapper;
