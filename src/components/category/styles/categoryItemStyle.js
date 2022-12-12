import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
flex:1;
margin: 10px;

width: 250px;
max-width: 270px;
min-width: 170px;
position: relative;
a{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
  &:hover{
    a{
      text-decoration: none;
    }
  }
`;
export const Image = styled.img`
  border-radius: 10%;
  width: 100%;
  object-fit: cover;
  &:hover{
    transform:scale(1.2);
    transition:  0.5s  all;
  }
`;

export const Info = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #000000;
  text-align: center;
  font-size: 20px;
  margin: 20px;

`;
