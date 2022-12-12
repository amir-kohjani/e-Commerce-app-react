import { pink } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
  padding: 30px;
  float: right;
  width: calc(24% - 42px);
  display: block;
  min-width:300px;
`;
export const TitleWrapper = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: normal;
    align-items: normal;
    padding: 0px 8px;
    margin: unset;
`;
export const Name = styled.span`
  color: rgb(0, 0, 0);
  padding: 0px;
  text-align: right;
  font-weight: 500;
  font-size: 16px;
  margin: 10px 0px;
  display: block;
  float: none;
`;

export const Phone = styled.div`
  color: rgb(102, 102, 102);
  padding: 0px;
  text-align: right;
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  display: block;
  float: none;
`;
export const Menu = styled.ul`
    list-style: none;
    padding: 30px 0px 0px;
    margin: 30px 0px;
    border-top: 1px solid rgb(204, 204, 204);
`

export const ItemMenu = styled.li`
    margin: 16px 0px;
    transition: all 0.2s ease 0s;
    border-radius: 8px;
    padding: 10px;
    background-color:${props=>props.active ? pink[100]:'transparent'};
    a{
    display: flex;
    justify-content: start;
    align-items: center;
    span{
    color: rgb(34, 34, 34);
    padding: 5px;
    text-align: right;
    font-weight: 700;
    font-size: 15px;
    margin: 0px;
    display: block;
    float: none;
    }
    &:before{
        width: 20px;
    display: inline-block;
    color: ${pink[500]};
    font-size: 18pt;
    margin-left: 8px;

}
    }
    }
`