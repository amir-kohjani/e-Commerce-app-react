import styled from "styled-components";
import { orange, pink } from "@mui/material/colors";
import { MobileMode } from "../../../../util/MobileMode";

export const Container = styled.div`
display: flex;
/* flex:1; */
min-height:250px;
min-width:${props=>!props.mobile ? "650px": ''};
max-width: ${props=> !props.noPrice ? null : !props.mobile ? "650px":"250px" };
padding: 10px;
justify-content: space-between;
align-items: center;
flex-direction: ${props => !props.mobile ? ' ' : 'column'};
border:${props => !props.border ? null : `0.5px solid ${pink[500]}`} ;
border-radius: ${props => !props.border ? null : "10px"} ;
margin: 10px;
a{
  display: flex;
  flex-direction:${props => props.mobile ? "column" : "row"};
    align-items: center;
    justify-content: space-around;
    color: black;
}
`;
export const ImageWrapper = styled.div`
padding: 10px;
max-width: 200px;
  min-width: 180px;

display: flex;
align-items: center;
justify-content: center;
`;
export const Image = styled.img`
 width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
width:${props => props.mobile ? "90%" : "50%"};
`;
export const Title = styled.h1`
text-align: right;
font-size: 12pt;
font-weight: bold;
`;
export const Description = styled.p`
text-align: right;
font-size: 12pt;
font-weight: normal;
white-space: ${props => props.mobile ? null : "nowrap"};
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SizeColorWrapper = styled.div`
font-size: 12pt;
display: flex;
justify-content: space-between;
`;
export const Size = styled.span`
margin-right: 10px;
&:before {
  content: "سایز:";
  opacity: 0.7;
  margin-left: 5px;
}
`;
export const Color = styled.span`
margin-right: 10px;
&:before {
  content: "رنگ:";
  opacity: 0.7;
  margin-left: 5px;
}
`;
export const PriceWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const Price = styled.span`
font-size: 12pt;
text-decoration: line-through;
color: #8b8b8b;
`;
export const DiscountWrapper = styled.div`
display: flex;
justify-content: space-between;
font-size: 12pt;
color: ${orange[500]};
`;
export const Discount = styled.span`
&:before {
  content: "تخفیف";
  margin-left: 5px;
}

&:after {
  content: "%";
  margin-left: 10px;
}
`;
export const PriceWithDiscount = styled.span``;
export const QuntityWrapper = styled.div`
display: flex;
justify-content: space-between;
font-size: 16pt;
align-items: center;
`;
export const Add = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;
export const Count = styled.span``;
export const Remove = styled.span`
  margin-right: 10px;
  cursor: pointer;
`;
export const FimalPriceWrapper = styled.div`
font-size: 16pt;
color: ${pink[500]};
`;
export const FinalPrice = styled.span``;

export const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction:  ${props => !props.mobile ? ' ' : 'column'};
width: 40%;
`

export const ConfirmationBtn = styled.button`

background-color:${props => props.backgroundColor};
width: 50%;
padding: 10px;
margin: 10px 10px;
color:white;
font-size:12pt;
border: none;
border-radius:10px;
`
