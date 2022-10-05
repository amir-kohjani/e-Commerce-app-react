import styled from "styled-components";
import { pink,orange,blue,magenta,cyan, red } from "@mui/material/colors";

export const  Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const  ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const  WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const  Title = styled.h1`
font-size: 20pt;
  font-weight: normal;
`;

export const  InfoContainer = styled.div`
  direction: rtl;
  margin: 0;
  padding: 10px;
  display: inline-block;
  width: 48.7%;
`;
export const  PropertyContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const  PriceContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: end;
  justify-content: start;
  flex-direction: column;
  width: 48.7%;
`;

export const  Price = styled.p`
  font-size: 16pt;
  color: rgb(148, 149, 151);
  text-decoration: line-through;
  margin: 0px;
`;
export const  Discount = styled.p`
  font-size: 12pt;
  width: max-content;
  font-weight: bold;
  color: rgb(243, 122, 35);
  margin: 3px 0px;
`;
export const  CurrentPrice = styled.p`
  font-size: 20pt;
  color: ${pink[500]};
  font-weight: bold;
  margin: 0px;
`;

export const  Categoyr = styled.div`
  text-align: right;
  position: relative;
  margin-bottom: 6px;

  a {
    font-size: 14px;
    color: ${pink[500]};

    margin-right: 4px;
    font-weight: 600;
  }
`;

export const  Brand = styled.h1`
  text-align: right;
  font-size: 18pt;
  font-weight: bold;
  margin: 0px 0px 4px;
`;
export const  Description = styled.h1`
  font-size: 16px;
  font-weight: normal;
  margin: 0px;
`;
export const  WrapperPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;
export const  DeliveryInfo = styled.div`
  width: 100%;
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
    :after{
    color:${pink[300]};
    font-size: 60pt;
  }
`;

export const  WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
`

export const  ButtonAddToCart = styled.button`
  width: 80%;
  padding: 15px;
  border: none;
  border-radius:10px;
 color:white;
 background-color: ${props=>props.disabled ?pink[100]:pink[500]};
cursor:${props=>props.disabled ? 'no-drop':'pointer'};
  font-weight: 600;
  &:active {
    background-color: #dba8a8;
  }
`;
export const ErrorMassage = styled.p`
margin: 10px;
color:${red[500]};
visibility:  ${props=>props.show ? 'visible' : 'hidden'};
`
export const  FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;

  display: flex;
  flex-direction: column;
`;

export const  Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 20px 0px;
`;

export const  FilterTitle = styled.span`
  font-size: 20px;
  font-weight: normal;
  width: max-content;
`;


export const  FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  width: 50%;
  border-radius: 10px;
`;
export const  FilterSizeOption = styled.option``;