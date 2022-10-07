import styled from "styled-components";
import CustomPagination from "../components/customPagination/CustomPagination";
import Products from "../components/Products";
import FilterContainer from "../FilterProduct/FilterContainer";
import { mobile } from "../responsive";
import FixedButton from "../components/FixedButton";
import { popularProducts } from "../data";
import { useState } from "react";
import CustomDialog from "../components/CustomDialog/CustomDialog";
import FilterContainerMobile from "../FilterProduct/FilterContainerMobile";
import {useParams} from'react-router-dom'
import { useEffect } from "react";

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
  const [items,setItems]=useState(popularProducts);
  const [open, setOpen] = useState(false);
  const [filterProp, setFilterProp] = useState({});
  const {categoryName} = useParams();
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

  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'});
   setItems(popularProducts);
  },[categoryName])
  if (!items) {
    return <div className="text-center mt-5">Loading...</div>
}

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
            <Products items={items} />
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
