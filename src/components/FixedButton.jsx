import { pink,orange,blue,magenta,cyan } from "@mui/material/colors";

import styled from "styled-components"
const Icon = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
font-size: 20pt;
color: white;
background-color: ${pink[400]};
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:active {
  background-color: ${pink[300]};
  transform: scale(1.1);
}
`;

const FixedButton = () => {
  return (
    <Icon className="filter-label">
        
    </Icon>
  )
}

export default FixedButton