import { pink } from "@mui/material/colors";
import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
`;



const move = keyframes`
      0% , 5%{
      left: -32px;
      width: 16px;
    }
    15% , 20%{
      left: -32px;
      width: 48px;
    }
    30% , 35%{
      left: 0px;
      width: 16px;
    }
    45% , 50%{
      left: 0px;
      width: 48px;
    }
    60% , 65%{
      left: 32px;
      width: 16px;
    }
  
    75% , 80% {
      left: 32px;
      width: 48px;
    }
    95%, 100% {
      left: 64px;
      width: 16px;
    }

 `;
const Loader = styled.span`
width: 10px;
height: 10px;
position: relative;
left: 0px;
border-radius: 50%;
color: black;
background: black;
box-shadow: 32px 0, -32px 0, 64px 0;

:after {
  content: "";
  position: absolute;
  left: 0px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${pink[500]};
  animation: ${move} 3s linear infinite alternate;

}
`;
const LoaderPage = () => {
  return (
   

      <Loader />
 
  );
};

export default LoaderPage;
