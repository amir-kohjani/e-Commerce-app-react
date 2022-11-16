import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  ImageItemList,
  ColorName,
  Wraper,
  NunStock,
  NunStockTitle,
} from "./styles/styles";

const CustomImageButton = ({ colors, colorSelected }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectHandler = (index, color) => {
    if(color.stock){

        setSelectedIndex(index);
        colorSelected(color);
    }
  };
  return (
    <Container>
      {colors &&
        colors.map((color, index) => {
          return (
            <Wraper
              key={index}
              stock={color.stock} 
              border={selectedIndex == index && true}
              onClick={() => selectHandler(index, color)}
            >
              {!color.stock&&
                <>
                  <NunStock></NunStock>
                  <NunStockTitle>ناموجود</NunStockTitle>
                </>
              }
              <ImageItemList src={color.images[0]} stock={color.stock} />
              <ColorName>{color.name}</ColorName>
            </Wraper>
          );
        })}
    </Container>
  );
};

export default CustomImageButton;
