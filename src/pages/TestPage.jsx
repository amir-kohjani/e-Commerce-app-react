import React, { useState } from "react";

import styled from "styled-components";

import { useQuery } from "react-query";
import axios from "axios";
import { userDevices } from "../util/MobileMode";
import useMobileMode from "../hooks/useMobileMode";
import { useEffect } from "react";

const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
`;
const WithotRedux = styled.div``;
const TestPage = () => {
  const mobileMode = useMobileMode();

  useEffect(() => {
    console.log(mobileMode);
  });

  const [userDevice] = useState(userDevices);
  return (
    <ContainerMain>
      {mobileMode ? <p>mobile Mode</p> : <p>descktop Mode</p>}
    </ContainerMain>
  );
};

export default TestPage;
