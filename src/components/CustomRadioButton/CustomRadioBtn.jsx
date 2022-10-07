import React, { useState, useEffect } from "react";

import {
  Container,
  Item,
  RadioButton,
  RadioButtonLabel,
  Name,
} from "./styles/customRadioBtnStyles";
function CustomRadioBtn({ color, selectedColor }) {
  return (
    <Container>
      <Item onClick={() => selectedColor(color)}>
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
