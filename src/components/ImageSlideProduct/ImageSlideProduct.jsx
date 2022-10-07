import React, { useState,useEffect } from "react";
import styled from "styled-components";
import ImageMagnify from "image-magnify";
import { mobile } from "../../responsive";
import { MobileMode } from "../../util/MobileMode";
const Container = styled.div`
  padding: 10px;
`;
const ImageWrapper = styled.div`
  min-width: 250px;
  direction: ltr;
`;


const ListImages = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemListImage = styled.span`
  margin: 10px;
  cursor: pointer;
`;

const ImageItemList = styled.img`
  max-width: 70px;
`;

const ImageSlideProduct = ({ item }) => {
  const [coverImg,setCoverImg] = useState(item.img)
  const [mobileMode,setMobileMode] = useState(false);

  useEffect(() => {
    setMobileMode( MobileMode);
  },[MobileMode])

  const handler = (img) =>{
    setCoverImg(img);
  }
  return (
    <Container>
      <ImageWrapper>
        {/* <CurrentImage src={items[0].img} /> */}
        <ImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: false,
              src: coverImg,
              width:mobileMode ? 350 :500,
              height: mobileMode ? 350 :500,

            },
            largeImage: {
              src: coverImg,
              width: 1200,
              height: 1200,
            },
            enlargedImagePosition: "over",
          }}
        />
      </ImageWrapper>
      <ListImages>
        {item.imgs.map((img,index) => {
          return (
            <ItemListImage onClick={(e) =>handler(img)} key={index}>
              <ImageItemList src={img} />
            </ItemListImage>
          );
        })}
      </ListImages>
    </Container>
  );
};

export default ImageSlideProduct;
