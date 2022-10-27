import { pink } from "@mui/material/colors";
import styled from "styled-components";
import { MobileMode } from "../../../../util/MobileMode";


export const Container = styled.div`
    border-radius: 16px;
    border: solid 1px #d8d8d8;
    padding: ${!MobileMode()? "32px 64px":"10px 5px"};
    margin: 15px;
`

export const Title = styled.p`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 30px;
    `

export const Wrapper = styled.div`
    display: block;
    position: relative;
    padding-right:${!MobileMode()? "26px" : "0px"};
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    `
export const InternetPay = styled.div`
display: flex;
flex-direction: column;
`
export const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    
    `
    export const Label = styled.label`
    font-size: 15px;
    font-weight: 500;
    color: #28292c;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    &:before{
        font-size:20px;
        margin-left: 5px;
    }
`
export const RadioButton = styled.input`
    width: 20px;
    height: 20px;
    background:${pink[500]};
    border-radius: 50%;
  
  
    `
export const Discription = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #656565;
    margin: 17px 0 33px;
`


export const Banks = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
align-items:center;
`

export const BankItem = styled.div`
    border-radius: 8px;
    border: 1px solid #f7f8f9;
    background-color: #f7f8f9;
    display: flex;
    align-items: center;
    justify-content: right;
    width: 524px;
    padding: 9px 18px;
`
export const  BankImg = styled.img`
  min-height: 27px;
  max-height: 27px;
`

export const BankName = styled.span`
    font-size: 12px;
    color: #3c3c3c;
    text-align: center;
    font-weight: 700;
    margin-right: 12px;
    margin-left: 12px;
    margin-top: 0;
    margin-bottom: 0;
`

export const BankDisc = styled.span`
    font-size: 11px;
    color: #656565;
    font-weight: 500;
`


export const toggleButtonGroupStyle = {
    padding:!MobileMode()? "10px":'0px',
    direction: "rtl",
    background: "none",
    display:'flex',
    flexDirection: 'column',
    flexWrap: "wrap",
    ".Mui-selected": {
      border: `2px solid ${pink[500]} !important`,
      background: "none !important",
    },
  };

 export const toggleButtonStyle = {
    width:'100%',
 
    border: "none",
    borderRadius: "10px !important",
  };



export const PersonPay = styled.div``

