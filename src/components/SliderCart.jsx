import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Divider } from "@mui/material";

const Section = styled.section`
  position: relative;
  background: #ffffff;
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 90%;
  margin: auto;
`;
const Wrapper = styled.div`
  padding: 30px 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: grey;
`;

const Icon = styled.div`
  font-size: 40px;
  color: #e94560;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 5px;
`;

const SliderCart = ({ Component, items, title, ICON }) => {
  const [slidToShowCount, setSlidToShowCount] = useState(3);
  useEffect(() => {
    if (window.outerWidth > 1290) setSlidToShowCount(5);
    else if (window.outerWidth > 1000) setSlidToShowCount(2);
    else setSlidToShowCount(1);
  }, []);
  const setings = {
    dots: true,
    infinite: false,
    slidesToShow: slidToShowCount,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
   
  };

  return (
    <>
      <Section>
        <Container>
          <Header>
            <HeaderLeft>
              <Icon>{<ICON style={{ fontSize: "45px" }} />}</Icon>
              <Title>{title}</Title>
            </HeaderLeft>
            <HeaderRight>
              <span>View All</span>
              <ArrowRightIcon />
            </HeaderRight>
          </Header>
          <Divider />
          <Wrapper>
            <Slider {...setings}>
              {items.map((item, index) => {
                return <Component item={item} index={index} />;
              })}
            </Slider>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default SliderCart;
