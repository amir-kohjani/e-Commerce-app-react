import { green, orange } from "@mui/material/colors"
import styled from "styled-components"

export const Container = styled.div`
flex:1;
min-width:300px;
`

export const ShippingSummary  = styled.div`

    border-radius: 16px;
    background-color: #f8f8f9;
    font-size: 16px;
    color: #000;
    line-height: 2.22;
    padding: 31px;
    font-weight: 300;
    margin: 15px;
`

export const CostSummary = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    border: solid 1px #d8d8d8;
    padding: 30px;
    margin-top: 28px;
    font-size: 15px;
`

export const CostItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
color: ${props=> props.color ?green[500] :'black' };
border-top: ${props=> props.borderTop ? '1px solid #d8d8d8;':''};
`
export const Title = styled.p`
    margin: 0;
    padding-bottom: 16px;
    font-weight: ${props=> props.bold ? 'bold' : 'normal'};
`
export const Amount = styled.p`
    margin: 0;
    padding-bottom: 16px;
    font-weight: ${props=> props.bold ? 'bold' : 'normal'};

`