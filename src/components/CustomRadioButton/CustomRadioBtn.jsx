import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import { mobile } from "../../responsive";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-right: 10px;

`

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;

  border-radius: 2px;
  margin-bottom: 10px;
${mobile({
  height: "20px"
})}
`;


const RadioButtonLabel = styled.label`
  position: absolute;
  opacity: 0.5;
  width: 40px;
  height:40px;
  border-radius: 50%;
  background: ${prop=>prop.color};
  border: 'none';
  ${mobile({
  height: "25px",
  width: "25px",
})}
  
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    opacity: 0.7;
  }
  &:checked + ${Item} {
    background: ${prop=>prop.color};
 
  }
  &:checked + ${RadioButtonLabel} {
    background: ${prop=>prop.color};
  
    opacity:1;
    &::after {
      content:${ShoppingCartOutlined} ;

      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
   
  }
`;

const Name = styled.span`
font-size:12pt;
width:max-content;


`

function CustomRadioBtn({ color ,selectedColor }) {
  return (
    <Container>

    <Item onClick={()=>selectedColor(color)}>
        <RadioButton
          type="radio"
          name="radio"
          value="optionA"
          color={color.color}
          // checked={select === "optionA"}
          //onChange={event => handleSelectChange(event)}
          />
        <RadioButtonLabel color={color.color} />
     
      </Item>
       <Name>{color.name}</Name>
          </Container>
         
  );
}

export default CustomRadioBtn;
