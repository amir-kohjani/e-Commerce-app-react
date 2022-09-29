import React from "react";
import styled from "styled-components";
import LoginOrRegister from "../../components/LoginAndRegister/LoginOrRegister";

const Container = styled.div`
  min-height: calc(100vh - 777px);
  padding: calc((100vh - 777px) / 2) 0;
  background-color: #f5f5f5;
  justify-content: center;
  display: flex;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const LoginOrRegisteryPage = () => {
  return (
    <Container>
      <LoginOrRegister />
    </Container>
  );
};

export default LoginOrRegisteryPage;
