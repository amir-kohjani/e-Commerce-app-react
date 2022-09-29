import React from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px;
`;
const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 30px;
`;
const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  /* grid-template-columns: 260px 260px;
  grid-template-rows: 400px 400px; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 50px;
`;

const GridContainer = ({ title='title',items, Component }) => {
  return (
    <Container>
      <Header>
        <Title>
            {title}
        </Title>
      </Header>
      <Wrapper>
        
        {items.map((item, index) => {
          return <GridItem item={item} index={index} />;
        })}
        
      </Wrapper>
    </Container>
  );
};

export default GridContainer;
