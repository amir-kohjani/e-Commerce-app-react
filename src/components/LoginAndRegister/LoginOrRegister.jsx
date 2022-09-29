import { pink } from "@mui/material/colors";
import PN from "persian-number";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {  regPhoneNumber} from "../../util/regexs"
const Container = styled.div`
  width: 750px;
  height: 500px;
  display: flex;
  justify-content: center;

  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 360px;
  direction: rtl;
  border-radius: 16px;
  background-color: #ffffff;
  padding: 30px 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 18pt;
`;
const Description = styled.p`
  font-size: 12pt;
  color: gray;
  text-align: center;
  margin-bottom: 50px;
`;
const InputWrapper = styled.div`
  border: ${prop=>prop.error ? `1px solid red `:`1px solid gray`};
  border-radius: 10px;
  width: 40%;
`;
const InputNumber = styled.input`
  width: 100%;
  line-height: 60px;
  height: 60px;
  border-radius: 12px;
  font-size: 16pt;
  border: none;
  color: #000;
  padding-right: 7px;
  transition: 0.3s;
`;

const ErrorMessage = styled.p`
  text-align: right;
  color: red;
  font-size: 10pt;
`;
const SubmitButton = styled.button`
  width: 40%;
  line-height: 60px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  background-color: ${pink[500]};
`;

const LoginOrRegister = () => {
  const [numberPhone, setNumberPhone] = useState("");
  const [error, setError] = useState(false);
  const submitHandler = () => {
    if(!numberPhone || !regPhoneNumber.test(numberPhone))setError(true);
    else console.log("Number :" , numberPhone);
  }
  return (
    <Container>
      <Wrapper>
        <Title>ورود یا ثبت نام</Title>
        <Description>
          لطفا برای ورود یا ثبت نام شماره همراه خود را وارد نمایید
        </Description>
        <InputWrapper error={error}>
          <InputNumber
            placeholder="شماره همراه"
            maxLength="11"
            value={PN.convertEnToPe(numberPhone)}
            onChange={(e) => setNumberPhone(PN.convertPeToEn(e.target.value))}
          ></InputNumber>
        </InputWrapper>
        {error && (
          <ErrorMessage>شماره تلفن به درستی وارد نشده است</ErrorMessage>
        )}
        <SubmitButton onClick={submitHandler}>ادامه</SubmitButton>
      </Wrapper>
    </Container>
  );
};

export default LoginOrRegister;
