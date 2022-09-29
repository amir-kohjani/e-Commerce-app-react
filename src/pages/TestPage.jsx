import React, { useState } from "react";
import styled from "styled-components";
import LoaderPage from "../components/Loader/Loader";

const Container = styled.div`
  display: flex;
align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
`;

const TestPage = () => {
  return (
    <Container>
     
      <LoaderPage />
    </Container>
  );
};

export default TestPage;
