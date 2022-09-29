import styled from "styled-components";

import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
 
  flex-direction: column;
  margin: 20px;
  padding: 50px;
`;
const Wrapper = styled.div`
      display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -15px;
    margin-left: -15px;
    ${mobile({

    })}
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  font-size: 40px;
  color: #e94560;
  margin-top: 5px;
`;
const Title = styled.h2`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 45px;
  margin: 5px;
`;
const Categories = ({ data, ICON }) => {
  return (
    <Container>
      <Wrapper>
        {data.map((item) => (
          <CategoryItem item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
