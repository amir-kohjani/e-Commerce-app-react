import { pink } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
  padding: 10px;
  flex-direction: column;
`

export const PaymentWrapper = styled.div`
display: flex;
justify-content:space-around;

`

export const SubmitWrapper = styled.div`
display: flex;
justify-content:space-between;
padding: 25px;

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
width: 20%;
height: 50px;
`;
export const ProductWrapper = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
`

export const Title = styled.p`
font-size: 17px;
    font-weight: 500;
    margin-bottom: 30px;
`