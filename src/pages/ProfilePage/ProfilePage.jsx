import { pink } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useMobileMode from "../../hooks/useMobileMode";
import Desktopwrapper from "./Desktopwrapper";
import MobileWrapper from "./MobileWrapper";

const Container = styled.div`
  background: linear-gradient(331deg, #c4c4c4aa 10%, #ffffff 100%);
  position: relative;
  display: flex;
  justify-content: center;
  height: 81%;
  padding: 20px;
`;
const Wrapper = styled.div`
  background-color: white;
  border-radius: 25px;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
`;
const Title = styled.span`
  font-size: 16px;
  line-height: 2.17;
  text-align: center;
  color: black;
  margin: 10px;
`;

const RegisterBtn = styled.button`
  display: block;
  width: 80%;
  padding: 17px 5px;
  background-color: ${pink[500]};
  position: relative;
  border: none;
  border-radius: 10px;

  z-index: 3;
  text-align: center;
  font-size: 14px;
  color: white;
`;

const ProfilePage = ({content}) => {
  const mobileMode = useMobileMode();
  const user =useSelector((state) => state.user.user);
  return (
    <Container>{mobileMode ? <MobileWrapper user={user}/> : <Desktopwrapper content={content}  user={user} />}</Container>
  );
};

export default ProfilePage;
