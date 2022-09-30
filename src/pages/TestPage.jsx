import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decrement, increment, incrementByAmount } from "../redux/counter";
import {addItem,deleteItem}  from '../redux/cart'
import { popularProducts } from "../data";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 20px;
`;
const WithotRedux = styled.div``;
const TestPage = () => {
  const [countWithotRedux, setCount] = useState(0);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
 
  return (
    <Container>
      <div>
        <h1>add item to cart</h1>
        <h2>cart items:{items.length}</h2>
        <button onClick={() => dispatch(addItem(popularProducts[1]))}>item+</button>
        {/* <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>+33</button> */}
      </div>
    </Container>
  );
};

export default TestPage;
