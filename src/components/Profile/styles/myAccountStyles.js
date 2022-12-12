import { pink } from '@mui/material/colors'
import styled from 'styled-components'


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
export const ChangeBtn = styled.button`
background-color: ${pink[500]};
    color: white;
    border: none;
    width: 140px;
    border-radius: 12px;
    line-height: 48px;
    transition: all 0.3s ease 0s;
    `;

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
    align-items: start;
    justify-content: center;
    width: 33%;
    min-width:250px;
padding: 15px;
border-right: ${props=>props.border ? "1px solid rgb(217, 222, 229)":'none'};
    border-left: ${props=>props.border ? "1px solid rgb(217, 222, 229)":'none'};
    `

export const Row = styled.div`
        display: flex;
    flex-direction: column;
    margin-bottom: 30px;
 align-items: start;
    `
export const TitleRow = styled.span`
    color: rgb(143, 143, 143);
    padding: 0px;
    text-align: right;
    font-weight: normal;
    font-size: 14px;
    margin: 0px;
    display: block;
    float: none;
    `
export const ValueRow = styled.span`
        color: rgb(0, 0, 0);
    padding: 0px;
    text-align: right;
    font-weight: normal;
    font-size: 14px;
    margin: 15px 0px 0px;
    display: block;
    float: none
    `