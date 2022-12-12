import { pink } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const Header = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
padding:10px;
width:100%;

`

export const Title = styled.p`
    color: rgb(29, 29, 29);
    font-size: 18px;
    font-weight: bold;
    line-height: 1.88;
    margin: 0px;
`
export const Wrapper = styled.div`
    display: flex;
    border-top: 1px solid rgb(217, 222, 229);
    padding-top: 30px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    /* flex-wrap: wrap; */
    /* overflow-x:scroll; */
    `

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 31%;
    min-width:250px;
    border-radius: 22px;
    border: 1px solid rgb(217, 222, 229);
    padding: 15px;
    `

export const Circle = styled.div`
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 50%;
    background-color:${pink[300]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

    export const Count = styled.span`
    color: white;
    padding: 0px;
    
    font-weight: 600;
    font-size: 30px;
    margin: 0px;
    display: block;
    line-height: 60px;
    float: none;
    `
    export const CircleTitle = styled.span`
    color: white;
    padding: 0px;
   
    font-weight: 500;
    font-size: 16px;
    margin: 0px;
    display: block;
    float: none;
    `
    export const ColTitle = styled.span`
        color: rgb(77, 77, 77);
    padding: 0px;
    text-align: center;
    font-weight: normal;
    font-size: 15px;
    margin: 20px 0px 15px;
    display: block;
    float: none;
    `