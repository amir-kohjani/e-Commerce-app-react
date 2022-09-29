import { pink } from "@mui/material/colors";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import AddressMethod from "./AddressMethod";
import SendingMethod from "./SendingMethod";

const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
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
  width: 20%;
  height: 50px;
`;
const ShippingIformation = ({ address }) => {
  const [state, setState] = useState({
    addressIndex: null,
    senddingIndex: "",
  });

  const addressIndexHandler = (index) => {
    setState({ ...state, addressIndex: address[index] });
  };

  const sendingIndexHandler = (index) =>
    setState({ ...state, senddingIndex: index });

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
          <ButtonSubmit>مرحله بعد ...</ButtonSubmit>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default ShippingIformation;
