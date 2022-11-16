import { orange, pink } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageItemList = styled.img`
  max-width: 70px;
  margin: 10px;
  z-index:1;
  opacity:${props=>props.stock ? 1 : 0.3};


`;

export const Wraper = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
margin-left:10px;
border:${(props)=> props.border && `0.5px solid ${pink[500]}`}; 
border-radius:10px;
cursor:${props=>props.stock ? 'pointer' : 'not-allowed'};
position:relative;


`

export const ColorName = styled.span`
font-size:10pt;
width:max-content;
`
export const NunStock = styled.div`
width: 100%;
height: 100%;
background-color: #e6e6e6;
    
border-radius:10px;
position:absolute;
text-align: center;
`

export const NunStockTitle = styled.span`
    position: absolute;
    color:${orange[700]};
    z-index: 1;
    font-weight: bold;
    opacity:1;
    font-size: 12pt;
`