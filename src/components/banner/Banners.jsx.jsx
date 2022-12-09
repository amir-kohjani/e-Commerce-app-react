import React from "react";
import styled from "styled-components";
import useMobileMode from "../../hooks/useMobileMode";
import { mobile } from "../../responsive";
import BigBanner from "./BigBanner";
import SmallBanner from "./SmallBanner";

const Container = styled.div`
  display: ${(props) => (props.mobile ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Banners = ({ smallBanner, bigBanner }) => {
  const mobileMode = useMobileMode();
  return (
    <Container mobile={mobileMode}>
      <SmallBanner img={smallBanner} />
      <BigBanner img={bigBanner} />
    </Container>
  );
};

export default Banners;
