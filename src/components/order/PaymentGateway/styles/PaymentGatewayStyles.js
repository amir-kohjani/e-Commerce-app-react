import { pink } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:#f8f8f8;

`

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px;
width: 600px;

`



export const Title = styled.h1`
font-size: 20pt;
font-weight: bold;
color:${pink[500]};
padding: 10px;
`

export const Amount = styled.p`
font-size: 16pt;
font-weight: normal;
color: #666;
margin: 0;
padding: 10px;
span{
    color: ${pink[500]};
    font-weight: bold;
}
`

export const TypeOfPayment = styled.p`
font-size: 16pt;
font-weight: normal;
color: #666;
margin: 0;
padding: 10px;
span{
    font-weight: bold;

}
`

export const SubmitWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
`

export  const ButtonSubmit = styled.button`
background-color: ${pink[500]};
font-size: 16pt;
color: white;
border: none;
border-radius: 10px;
width: 20%;
height: 50px;
padding: 10px;
`;

