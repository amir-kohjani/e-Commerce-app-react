import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Product from "./ProductCard/Product";
import { mobile } from "../responsive";
import { Divider } from "@mui/material";

const Container = styled.div`
  margin: 10px 0px;
  padding: 10px 30px;
`;
const Wrapper = styled.div`
  padding: 30px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  direction: rtl;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  flex: 1;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: grey;
`;
const Icon = styled.div`
display: flex;
  font-size: 40px;
  color: #e94560;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  margin: 5px;
  ${mobile({
    fontSize: "20px",
    margin: "5px",
  })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  background-color: #526970;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "-20px"};
  right: ${(props) => props.direction === "right" && "-20px"};
  margin: auto;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;


const ProductSlider = ({ items, title, ICON }) => {
  const [mobileMode, setMobileMode] = useState(true);
  const [slidToShowCount, setSlidToShowCount] = useState(4);
  useEffect(() => {
    if (window.outerWidth > 1290) setSlidToShowCount(4);
    else if (window.outerWidth > 1000) setSlidToShowCount(3);
    else if (window.outerWidth > 700) setSlidToShowCount(2);
    else setSlidToShowCount(1);
  }, []);

  const settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidToShowCount,
    slidesToScroll: 1,
    fade: false,
    rtl: true,
    className:"slider-div"
  };

console.log(items)
if(items=={}){
  return <>no products</>
}
else
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Icon>{<ICON style={{ fontSize: "45px" }} />}</Icon>
          <a>
            <Title>{title}</Title>
          </a>
        </HeaderLeft>
      </Header>
      <Divider />
      <Wrapper>
        <Slider {...settings}>
          {items.map((item, key) => {
            return <Product product={item} key={key} />;
          })}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default ProductSlider;
