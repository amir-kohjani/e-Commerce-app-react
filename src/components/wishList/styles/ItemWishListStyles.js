import styled from "styled-components";
import { orange, pink } from "@mui/material/colors";
import { MobileMode } from "../../../util/MobileMode";

export const  Container = styled.div`
display: flex;
position: relative;
padding: 10px;
justify-content: space-between;
align-items:center;
flex-direction: ${props=>!props.mobile? ' ':'column'};

`;
export const  ImageWrapper = styled.div`
padding: 10px;
max-width: 150px;
  min-width: 150px;

display: flex;
align-items: center;
justify-content: center;
`;
export const  Image = styled.img`
 width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const  InfoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const  Title = styled.h1`
text-align: right;
font-size: 12pt;
font-weight: bold;
`;
export const  Description = styled.p`
text-align: center;
font-size: 12pt;
font-weight: normal;
`;

export const  PriceWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const  Price = styled.span`
font-size: 12pt;
text-decoration: line-through;
color: #8b8b8b;
`;
export const  DiscountWrapper = styled.div`
display: flex;
justify-content: space-between;
font-size: 12pt;
color: ${orange[500]};
`;
export const  Discount = styled.span`
&:before {
  content: "تخفیف";
  margin-left: 5px;
}

&:after {
  content: "%";
  margin-left: 10px;
}
`;
export const  PriceWithDiscount = styled.span``;
export const  Remove = styled.span`
  margin-right: 10px;
  cursor: pointer;
  position: absolute;
`;
export const  FimalPriceWrapper = styled.div`
font-size: 16pt;
color: ${pink[500]};
`;
export const  FinalPrice = styled.span``;

