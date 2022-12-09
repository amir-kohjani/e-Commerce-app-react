import styled from "styled-components";
import useMobileMode from "../../hooks/useMobileMode";

import { mobile } from "../../responsive";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  margin: 20px;
  padding:${props=>props.mobile ? "10px":"50px"};
`;
const Wrapper = styled.div`
      display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -15px;
    margin-left: -15px;
 
`;

const Categories = ({ data, ICON }) => {

  const mobileMode = useMobileMode();
  return (
    <Container mobile={mobileMode}>
      <Wrapper>
        {data.map((item,index) => (
          <CategoryItem item={item} key={index} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
