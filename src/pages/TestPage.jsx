import React, { useState } from "react";

import styled from "styled-components";

import {useQuery} from 'react-query'
import axios from 'axios'
import { userDevices } from "../util/MobileMode";


const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
`;
const WithotRedux = styled.div``;
const TestPage = () => {

const [userDevice] = useState(userDevices) 
  return (
    <ContainerMain>
     <p>{userDevice}</p>
    </ContainerMain>
  );
};



export default TestPage;
