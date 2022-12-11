
import { pink } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(331deg,#c4c4c4aa 10%,#ffffff 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Wrapper = styled.div`
  background-color: white;
  border-radius: 25px;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:fit-content;
`;
const Title = styled.span`
  font-size: 16px;
  line-height: 2.17;
  text-align: center;
  color: black;
  margin:10px ;
`;

const RegisterBtn = styled.button`
  display: block;
  width: 80%;
  padding: 17px 5px;
  background-color: ${pink[500]};
  position: relative;
  border: none;
  border-radius: 10px;



  z-index: 3;
  text-align: center;
  font-size: 14px;
  color: white;

`;

const ProfilePage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>این بخش به زودی تکمیل خواهد شد!</Title>
        {/* <RegisterBtn>ورود یا ثبت نام</RegisterBtn> */}
      </Wrapper>
    </Container>
  );
};

export default ProfilePage;
