import React from "react";
import styled from "styled-components";
import Product from "../Product";

const Container = styled.div`
  
  /* padding: 10px; */
`;

const GridItem = ({ Component, item }) => {
  return (
    <Container>
      <Product item={item} />
    </Container>
  );
};

export default GridItem;
