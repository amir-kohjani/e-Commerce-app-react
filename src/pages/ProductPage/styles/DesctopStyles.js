import styled from "styled-components";
import { pink, orange, blue, magenta, cyan, red } from "@mui/material/colors";

export const  Wrapper = styled.div`
padding: 100px 30px;
display: flex;
flex-wrap: wrap-reverse;
`;

export const  ImgContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`;

export const  WrapperInfo = styled.div`
display: flex;
flex: 2;
`;
export const  InfoContainer = styled.div`
direction: rtl;
flex: 2;
padding: 0px 50px;
`;

export const  Title = styled.h1`
text-align: right;
font-size: 20pt;
font-weight: normal;
`;

export const  PropertyContainer = styled.div`
display: flex;
flex-direction: column;
margin: 20px 0px;
`;

export const  Categoyr = styled.div`
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
export const  Description = styled.h1`
text-align: right;
font-size: 16px;
font-weight: normal;
margin: 0px 0px 4px;
`;
export const  Brand = styled.h1`
text-align: right;
font-size: 18pt;
font-weight: bold;
margin: 10px 0px 10px;
`;

export const  PriceContainer = styled.div`
padding: 10px 50px;
display: flex;
flex-direction: column;
width: 48.7%;
`;

export const  PriceAndDiscountWrapper = styled.div`
display: flex;
width: fit-content;
`;
export const  Price = styled.p`
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
export const  Discount = styled.p`
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

export const  CurrentPrice = styled.p`
text-align: right;
font-size: 22pt;
color: ${pink[500]};
font-weight: bold;
margin-top: 3rem;
`;
export const  DeliveryInfo = styled.div`
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

export const  WrapperBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
margin: 10px;
`;

export const  ButtonAddToCart = styled.button`
width: 40%;
display: flex;
align-items: center;
justify-content: center;
max-height: 50px;
padding: 15px;
border: none;
border-radius: 10px;
color: white;

background-color: ${props=>props.disabled ?pink[100]:pink[500]};
cursor:${props=>props.disabled ? 'no-drop':'pointer'};
font-weight: 600;
&:hover {
  background-color: ${pink[300]};
}
`;
export const  FilterContainer = styled.div`
margin: 30px 0px;
padding: 0px 50px;

justify-content: space-between;
align-items: center;
display: flex;
`;

export const  Filter = styled.div`
display: flex;
align-items: center;
`;

export const  FilterTitle = styled.span`
font-size: 20px;
font-weight: normal;
margin-left: 10px;
`;

export const ErrorMassage = styled.p`
margin: 10px;
color:${red[500]};
visibility : ${props=>props.show ? 'visible' : 'hidden'};
`
export const WrapperLikeAndInfo = styled.div`
display: flex;
direction: ltr;
justify-content:space-between;
align-items:center;

`
export const  LikeContainer = styled.div`
flex:1;
display: flex;
justify-content:center;
` 
export const Like = styled.span`
font-size: 25pt;
color:${pink[500]};
&:hover{
 font-size:27pt;
 transition: all 0.2s ease;
}
`