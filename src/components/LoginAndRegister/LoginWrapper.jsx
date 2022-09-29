import React, { useState } from 'react'
import styled from 'styled-components';
import LoginOrRegister from './LoginOrRegister'
import ValidationNumber from './ValidationNumber'

const Container = styled.div`

`;
const LoginWrapper = () => {
    const [step, setStep] = useState(1);
    const [numberPhone,setNumberPhone] =useState('')
    const [numberValidate,setNumberValidate] = useState('');
    const loginOrRegisterSubmitHandler = (num)=>{
        setNumberPhone(num);
        setStep(2);
    }
  
    const validateNumberHandler = (num)=>{
  setNumberValidate(num);
  // setStep(3);
    }
  
    const editNumberPhoneHandler = (flag)=>{
      if(flag) setStep(1);
    }
  return (
    <Container>
      {step === 1 && <LoginOrRegister submit={loginOrRegisterSubmitHandler} />}
      {step === 2 && <ValidationNumber numberPhone={"09366690202"} submit={validateNumberHandler} editNumberPhone={editNumberPhoneHandler} />}
    </Container>
  )
}

export default LoginWrapper