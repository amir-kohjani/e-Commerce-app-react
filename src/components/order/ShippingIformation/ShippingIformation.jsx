import { pink } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { MobileMode } from "../../../util/MobileMode";
import AddressMethod from "./AddressMethod";
import SendingMethod from "./SendingMethod";

const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  margin-bottom:${!MobileMode()? '0px':"60px"} ;
  padding-bottom:${!MobileMode()? '50px':"60px"} ;
`;

const SendingWrapper = styled.div`
  padding: 20px;
`;

const AddressWrapper = styled.div`
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  padding: 20px;
`;

const ButtonSubmit = styled.button`
  background-color: ${pink[500]};
  font-size: 16pt;
  color: white;
  border: none;
  border-radius: 10px;
  width:  ${!MobileMode() ? '20%' : '100%'};
  height: 50px;
`;
const ShippingIformation = ({ address ,submitInfo }) => {
  const [state, setState] = useState({
    addressIndex: null,
    senddingIndex: "",
  });

  const addressIndexHandler = (index) => {
   
    setState({ ...state, addressIndex: address[index] });
  };

  const sendingIndexHandler = (index) =>
    setState({ ...state, senddingIndex: index });

    const submitHandler = () => {
      submitInfo(state);
    }

    useEffect(() => {
if(state.addressIndex&&state.senddingIndex){
  window.scrollTo({top:1000, behavior: "smooth" });
console.log('scrolled ')
}
    })



  return (
    <Container>
      <AddressWrapper>
        <AddressMethod address={address} submitIndex={addressIndexHandler} />
      </AddressWrapper>
      <SendingWrapper>
        <SendingMethod submitIndex={sendingIndexHandler} />
      </SendingWrapper>
      {state.addressIndex && state.senddingIndex && (
        <ButtonWrapper>
          <ButtonSubmit  onClick={()=>submitHandler()}>مرحله بعد ...</ButtonSubmit>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default ShippingIformation;
