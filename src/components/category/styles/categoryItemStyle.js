import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 10px;
  padding: 20px;
  height: 350px;
  width: 350px;
  //min-width: 420px;
  max-width: 420px;
  ${mobile({

    maxWidth: '500px',
    minWidth: '350px',
})}
`;
export const Image = styled.img`
  border-radius: 10%;
  width: 70%;
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
