import React from "react";
import styled from "styled-components";
import CustomRadioBtn from "./CustomRadioBtn";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomRadioBtnContainer = ({ colors, selectedColor }) => {
  return (
    <Container>
      {colors &&
        colors.map((color) => {
          return <CustomRadioBtn color={color} selectedColor={selectedColor} />;
        })}
    </Container>
  );
};

export default CustomRadioBtnContainer;
