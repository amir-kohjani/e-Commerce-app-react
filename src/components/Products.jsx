import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Product from "./ProductCard/Product";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 10px 10px;
  margin-left: auto;

  ${mobile({ marginLeft: "0" })}
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  flex: 1;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: grey;
`;
const Icon = styled.div`
  font-size: 40px;
  color: #e94560;
  margin-top: 5px;
`;
const Title = styled.h1`
  font-size: 25px;
  margin: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${mobile({
    justifyContent: "center",
    width: "100%",
  })}
`;

const Products = ({ items, ICON, title, products }) => {
  const [Products, setProducts] = useState(products);

  // useEffect(() => {
  //   console.log(Products);
  // }, [products]);

  if (Products.length == 0) return <>No products</>;
  else
    return (
      <Container>
        {ICON && title && (
          <Header>
            <HeaderLeft>
              <Icon>{<ICON style={{ fontSize: "45px" }} />}</Icon>
              <Title>{title}</Title>
            </HeaderLeft>
            <HeaderRight>
              <span>View All</span>
              <ArrowRightIcon />
            </HeaderRight>
          </Header>
        )}
        <Wrapper>
          {Products.map((product, index) => (
            <Product  key={index} product={product} />
          ))}
        </Wrapper>
      </Container>
    );
};
export default Products;
