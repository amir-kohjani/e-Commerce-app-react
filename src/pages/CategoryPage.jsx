import styled from "styled-components";
import CustomPagination from "../components/CustomPagination";
import Products from "../components/Products";
import FilterContainer from "../FilterProduct/FilterContainer";
import { mobile } from "../responsive";
import FixedButton from "../components/FixedButton";
import { popularProducts } from "../data";
import { useState } from "react";
import CustomDialog from "../components/CustomDialog/CustomDialog";
import FilterContainerMobile from "../FilterProduct/FilterContainerMobile";

const Container = styled.div`
  background-color: white;

  direction: rtl;
`;
const Title = styled.h1`
  margin: 0px 20px;
  padding: 20px;
  text-align: center;
`;
const MainContainer = styled.div`
  display: flex;
`;
const ProductWrapper = styled.div`
  flex: 9;
`;
const FilterWrapper = styled.div`
  flex: 1;
  padding: 30px;
  margin: 2rem;
  width: 180px;
  min-width: 180px;

  ${mobile({ display: "none" })}
`;
const FixedButtonWrapper = styled.div`
  display: none;

  ${mobile({
    display: "flex",
    justifyContent: "start",
    margin: "10px",
    position: "sticky",
    top: "auto",
    bottom: "60px",
    zIndex: "4",
  })}
`;
const PaginationWrapper = styled.div`
  direction: ltr;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  ${mobile({})}
`;
const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  const [filterProp, setFilterProp] = useState({});

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  const onChangeFilterProp = (prop) => {
    setFilterProp(prop);
    closeDialog();
  };

  return (
    <>
      <Container>
        <Title>{}</Title>
        <MainContainer>
          <FilterWrapper>
            <FilterContainer onSubmit={onChangeFilterProp}  />
          </FilterWrapper>
          <CustomDialog open={open} onClose={closeDialog}>
            <FilterContainerMobile onSubmit={onChangeFilterProp} />
          </CustomDialog>
          <ProductWrapper>
            <Products items={popularProducts} />
            <PaginationWrapper>
              <CustomPagination />
            </PaginationWrapper>
          </ProductWrapper>
        </MainContainer>
        <FixedButtonWrapper onClick={() => openDialog()}>
          <FixedButton />
        </FixedButtonWrapper>
      </Container>
    </>
  );
};

export default CategoryPage;
