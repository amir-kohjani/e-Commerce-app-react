import { pink } from "@mui/material/colors";
import { Statistic } from "antd";
import PN from "persian-number";
import React from "react";
import { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import styled from "styled-components";

import { regPhoneNumber } from "../../util/regexs";
import { useEffect } from "react";
import { MobileMode } from "../../util/MobileMode";
const Container = styled.div`
  width: ${MobileMode() ? "100%":"750px"};
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
  padding: 30px 10px;
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
  margin-bottom: 10px;
`;
const EditNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const NumberPhone = styled.h2`
  font-size: 16px;
  color: #28292c;
  font-weight: 500;
  margin: 0;
`;
const EditNumberPhoneBtn = styled.button`
  margin-right: 40px;
  direction: ltr;
  line-height: normal;
  color: ${pink[500]};
  margin-right: 14px;
  font-weight: 400;
  border: none;
  background: none;
  &:after {
    font-size:18pt;
    margin-left:5px ;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  direction: ltr;
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
const ErrorTimeOutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const CountDownWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
&::before{
  font-size:20pt;
  margin-left:10px ;
  margin-bottom: 6px;
  color:gray;
}
`
const ReSendCodeBtn = styled.button`
  margin-right: 40px;
  line-height: normal;
  color: ${pink[500]};
  margin-right: 14px;
  font-weight: 400;
  border: none;
  background: none;
`;
const ErrorTimeOut = styled.p`
  text-align: right;
  color: red;
  font-size: 10pt;
  margin: 0;
`;
const { Countdown } = Statistic;
const ValidationNumber = ({ numberPhone, editNumberPhone, submit,incorrectCode }) => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [timeValid, setTimeValid] = useState(Date.now() + 1000 * 120);
  const [errorTimeOut, setErrorTimeOut] = useState(false);

  const editNumberPhoneHandler = () => {
    editNumberPhone(true);
  };
  const validateNumber = () => {
    return true;
  };

  const submitHandler = () => {
    if (number.length < 4 || !validateNumber) setError(true);
    else {
      setError(false);
      submit(PN.convertPeToEn(number));
    }
  };

  const finishTimerHandler = () => {
    setErrorTimeOut(true);
    //time out valid code
  };

  const reSendHandler = () => {
    setErrorTimeOut(false);
    setTimeValid(Date.now() + 1000 * 120);
    //resend validation code to user
  };

  return (
    <Container>
      <Wrapper>
        <Title>احراز هویت با شماره همراه</Title>
        <Description>
          کد تایید ۴ رقمی ارسال شده به شماره همراه زیر را وارد نمایید.
        </Description>
        <EditNumberWrapper>
          <NumberPhone>{PN.convertEnToPe(numberPhone)}</NumberPhone>
          <EditNumberPhoneBtn className="edite-label"onClick={editNumberPhoneHandler}>
            ویرایش شماره
          </EditNumberPhoneBtn>
        </EditNumberWrapper>
        <InputWrapper error={error}>
          <ReactInputVerificationCode
            autoFocus={true}
            placeholder=""
            length={4}
            onChange={(n) => PN.convertPeToEn(setNumber(n))}
            value={PN.convertEnToPe(number)}
          />
        </InputWrapper>
        {error && <ErrorMessage>شماره به درستی وارد نشده است</ErrorMessage>}
        <SubmitButton onClick={submitHandler}>ادامه</SubmitButton>
        <CountDownWrapper className="timer-label">
          <Countdown
            format="mm:ss"
            value={timeValid}
            onFinish={finishTimerHandler}
          />
        </CountDownWrapper>
        {errorTimeOut && (
          <ErrorTimeOutWrapper>
            <ErrorTimeOut>مهلت زمان کد به پایان رسیده است.</ErrorTimeOut>
            <ReSendCodeBtn onClick={reSendHandler}>ارسال دوباره</ReSendCodeBtn>
          </ErrorTimeOutWrapper>
        )}
        {incorrectCode && (
          <ErrorTimeOutWrapper>
            <ErrorTimeOut>کد وارد شده صحیح نمی باشد!</ErrorTimeOut>
            
          </ErrorTimeOutWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default ValidationNumber;

{
  /* <InputWrapper error={error}>
          <InputNumber
          error={error}
            maxLength="1"
            value={''}
            // onChange={(e) => setNumberPhone(PN.convertPeToEn(e.target.value))}
          ></InputNumber>
          <InputNumber
          error={error}
            maxLength="1"
            value={''}
            // onChange={(e) => setNumberPhone(PN.convertPeToEn(e.target.value))}
          ></InputNumber>
          <InputNumber
          error={error}
            maxLength="1"
            value={''}
            // onChange={(e) => setNumberPhone(PN.convertPeToEn(e.target.value))}
          ></InputNumber>
          <InputNumber
          error={error}
            maxLength="1"
            value={''}
            // onChange={(e) => setNumberPhone(PN.convertPeToEn(e.target.value))}
          ></InputNumber>
          <InputNumber
          error={error}
            maxLength="1"
            value={''}
            // onChange={(e) => setNumberPhone(PN.convertPeToEn(e.target.value))}
          ></InputNumber>
        </InputWrapper> */
}
