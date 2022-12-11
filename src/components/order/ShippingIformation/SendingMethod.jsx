import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { pink } from "@mui/material/colors";
import ToggleSenddingItem from "./ToggleSenddingItem";
import useMobileMode from "../../../hooks/useMobileMode";
import { MobileMode } from "../../../util/MobileMode";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #f9fafb;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 12pt;
  font-weight: normal;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
`;

const Info = styled.p`
  padding: 10px;
  font-size: 10pt;
  color: gray;
`;

const toggleButtonGroupStyle = (mobileMode) => {
  const style ={
    padding: "10px",
    direction: "rtl",
    background: "none",
    display: !mobileMode ? "" : "flex",
    flexDirection: !mobileMode ? "" : "column",
    justifyContent: "center",
    ".Mui-selected": {
      border: `2px solid ${pink[500]} !important`,
      background: "none !important",
    },
  }
  return style;
};
const toggleButtonStyle = (mobileMode) => {
  const style={
    width: !mobileMode ? "40%" : "100%",
    marginRight: !mobileMode ? "20px !important" : "0px !important",
    marginTop: "20px !important",
    border: "none",
    borderRadius: "10px !important",
  }
  return style;
};

const SendingMethod = ({ submitIndex }) => {
  const [alignment, setAlignment] = useState("");
  const mobileMode = useMobileMode();
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    submitIndexHandler(newAlignment);
  };

  const submitIndexHandler = (newAlignment) => {
    submitIndex(newAlignment);
  };

  return (
    <Container>
      <Header>
        <Title>شیوه ارسال</Title>
      </Header>
      <Wrapper>
        <Info>لطفا نحوه ارسال کالای حود را انتخاب نمایید !</Info>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={toggleButtonGroupStyle(mobileMode)}
        >
          <ToggleButton value={"tipax"} size="small" sx={toggleButtonStyle(mobileMode)}>
            <ToggleSenddingItem
              icon="./images/tipax.jpg"
              title="تیپاکس"
              description="ارسال تا ۷۲ ساعت کار-۱۰ هزار تومان تخفیف"
              price="۱۹۰۰۰"
            />
          </ToggleButton>

          <ToggleButton value={"pishtaz"} size="small" sx={toggleButtonStyle(mobileMode)}>
            <ToggleSenddingItem
              icon="./images/pishtaz.jpg"
              title="پست پیشتاز"
              description="تا ۷۲ ساعت کاری"
              price="۲۵۰۰۰"
            />
          </ToggleButton>
        </ToggleButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default SendingMethod;
