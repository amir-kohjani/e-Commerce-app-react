import { pink } from "@mui/material/colors";
import styled from "styled-components";
import { MobileMode } from "../../../../util/MobileMode";

export const Container = styled.div`
display: flex;
  padding: 10px;
  flex-direction: column;
  padding-bottom: 200px;
  margin-bottom: 200px;
`

export const PaymentWrapper = styled.div`
display: flex;
justify-content:space-around;
flex-direction: ${!MobileMode() ? '':'column' };

`

export const SubmitWrapper = styled.div`
display: flex;
justify-content:space-between;
padding: 25px;
flex-direction: ${!MobileMode() ? '':'column'};

`
export const ColorLink = styled.a`

  color: ${pink[500]};


`
export const ButtonSubmit = styled.button`
background-color: ${pink[500]};
font-size: 12pt;
color: white;
border: none;
border-radius: 10px;
width:${!MobileMode() ?"20%":"100%"};
height: 50px;
`;
export const ProductWrapper = styled.div`
padding: 20px;
padding-bottom: ${!MobileMode()? null:'70px'};
display: flex;
flex-direction: column;
`

export const Title = styled.p`
font-size: 17px;
    font-weight: 500;
    margin-bottom: 30px;
`