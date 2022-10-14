import { pink,grey } from "@mui/material/colors";
import styled from "styled-components"
import { mobile } from "../../../responsive"


export const Container = styled.div`
direction: rtl;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    background-color:${pink[50]};
    color:${grey[700]};
    
`

export const Logo = styled.div`
width: 15%;

`;

export const ImageLogo = styled.img`
width: 100%;
height: auto;
`;

export const Description = styled.p`
    font-size: 10pt;
    line-height: 32px;
    font-weight: 500;
    text-align: right;
    margin: 10px 0px;
`
export const ContentUs = styled.div`
margin: 10px 0px;
display: flex;
justify-content: space-between;
`


export const ContactItem = styled.div`
font-size: 10pt;
margin-left: 10px;
border-left: 1px solid grey;
padding: 0px 10px;
&:last-child{
    border: none;
}
`;


