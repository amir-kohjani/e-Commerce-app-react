import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";
import useMobileMode from "../../../hooks/useMobileMode";
import {
    BankDisc,
    BankImg,
  BankItem,
  BankName,
  Banks,
  Container,
  Discription,
  InternetPay,
  Label,
  RadioButton,
  RadioWrapper,
  Title,
  toggleButtonGroupStyle,
  toggleButtonStyle,
  Wrapper,
} from "./styles/paymentMethodStyles";



const PaymentMethod = ({submitBankSelect}) => {
    const [alignment, setAlignment] = useState("mellatBank");
const mobileMode = useMobileMode();
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        submitbankSelectHandler(newAlignment);
      };
    
      const submitbankSelectHandler = (newAlignment) => {
        submitBankSelect(newAlignment);
      };

  return (
    <Container  mobile={mobileMode}>
      <Title>انتخاب شیوه پرداخت</Title>
      <Wrapper mobile={mobileMode}>
        <InternetPay>
          <RadioWrapper>
            <RadioButton type="radio" aria-label="eeeee" checked />
            <Label className="card-label">پرداخت اینترنتی</Label>
          </RadioWrapper>
          <Discription>امکان پرداخت با تمام کارت های عضو شتاب</Discription>
          <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={toggleButtonGroupStyle}
        >
    <ToggleButton
                  value="mellatBank"
                  size="small"
                  sx={toggleButtonStyle}
                 
                >

            <BankItem>
                <BankImg src="../images/banks-imgs/mellatBank.png"/>
                <BankName>درگاه بانک ملت</BankName>
                <BankDisc>امکان پرداخت با تمام کارت های عضو شتاب</BankDisc>
            </BankItem>
                </ToggleButton>
    <ToggleButton
                  value="samanBank"
                  size="small"
                  sx={toggleButtonStyle}
                 
                >

            <BankItem>
                <BankImg src="../images/banks-imgs/samanBank.png"/>
                <BankName>درگاه بانک سامان</BankName>
                <BankDisc>امکان پرداخت با تمام کارت های عضو شتاب</BankDisc>
            </BankItem>
                </ToggleButton>
        </ToggleButtonGroup>
       
        </InternetPay>
      </Wrapper>
    </Container>
  );
};

export default PaymentMethod;
