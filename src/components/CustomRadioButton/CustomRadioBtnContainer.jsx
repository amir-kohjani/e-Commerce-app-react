import React from "react";
import { useEffect } from "react";
import CustomRadioBtn from "./CustomRadioBtn";
import {Container} from './styles/customradioBtnContainerStyles'
const CustomRadioBtnContainer = ({ colors, selectedColor }) => {
  useEffect(() => {
    selectedColor();

  },[colors])
  return (
    <Container>
      {colors &&
        colors.map((color,index) => {
          return <CustomRadioBtn color={color} selectedColor={selectedColor} key={index} />;
        })}
    </Container>
  );
};

export default CustomRadioBtnContainer;
