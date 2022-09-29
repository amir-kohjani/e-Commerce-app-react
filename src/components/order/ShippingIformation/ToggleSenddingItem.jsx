import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  justify-content: center;
  border-radius: 10px;
  background-color: #f9fafb;
`;
const WrapperImage = styled.div`
  width: 80px;
`;
const Image = styled.img`
  display: block;
  max-width: 70px;
  width: 100%;
  margin: auto;
`;

const WrapperInfo = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-align: right;
`;
const Description = styled.p`
  font-size: 13px;
  margin-bottom: 0;
`;

const WrapperPrice = styled.div`
  width: 140px;
  font-size: 14px;
  padding-right: 15px;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TitlePrice = styled.span`
    color: #878a8d !important;
`
const Price = styled.span`
font-weight: 600;
&:after{
  content:'تومان';
  margin-right: 10px;
}
`
const ToggleSenddingItem = ({icon ,title , description, price}) => {
  return (
    <Container>
      <WrapperImage>
        <Image src={icon}/>
      </WrapperImage>
      <WrapperInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </WrapperInfo>
      <WrapperPrice>
    <TitlePrice>هزینه ارسال</TitlePrice>
    <Price>{price}</Price>

      </WrapperPrice>
    </Container>
  );
};

export default ToggleSenddingItem;
