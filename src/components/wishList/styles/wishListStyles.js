import { pink } from "@mui/material/colors";
import styled from "styled-components";
import {MobileMode} from  '../../../util/MobileMode'

export const Container = styled.div`
  max-width: 1000px;
  min-width: ${!MobileMode() ? "750px" : "100%"};
  padding-bottom: ${!MobileMode() ? null : "70px"};
  height: 100%;
`;

export const EmpetyWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
`;

export const EmpetyIcon = styled.span`
&::before {
  font-size: 100pt;
}
`;

export const Title = styled.h1`
  font-size: 20pt;
  width: 100%;
  text-align: center;
  margin: 10px 0px;
`;
export const LoginButton = styled.button`
  width: 40%;
  line-height: 60px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  background-color: ${pink[500]};
`;