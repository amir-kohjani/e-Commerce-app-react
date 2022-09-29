import React, { useState } from "react";
import styled from "styled-components";
import InputEmoji from "react-input-emoji";

const Container = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
flex-direction: column;
`;

const InputText = styled.textarea`
  width: 50%;
 
  border: 0.5px solid gray;
  border-radius: 10px;

  text-decoration: none;
  background-color: transparent;
  margin-left: 6px;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.15;
  resize: none;
`;

const EmojyWrapper = styled.div``;

const SubmitBtn = styled.button`
    width: 20%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    
    background-color: #e97373;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;

`;
const AddComment = () => {
  const [text, setText] = useState("");
  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <Container>
      <InputText placeholder="Type your comment..." />
      <EmojyWrapper></EmojyWrapper>
      <SubmitBtn>PoSt</SubmitBtn>
    </Container>
  );
};

export default AddComment;
