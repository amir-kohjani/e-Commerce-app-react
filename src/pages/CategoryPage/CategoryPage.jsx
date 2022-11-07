import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import CustomPagination from "../../components/customPagination/CustomPagination";
import Products from "../../components/Products";
import FilterContainer from "../../FilterProduct/FilterContainer";
import FixedButton from "../../components/FixedButton";
import CustomDialog from "../../components/CustomDialog/CustomDialog";
import FilterContainerMobile from "../../FilterProduct/FilterContainerMobile";
import CustomSpinner from "../../components/customSpinner/CustomSpinner";
import { popularProducts } from "../../data";
import {
  Container,
  Title,
  MainContainer,
  ProductWrapper,
  SpinerWrapper,
  FilterWrapper,
  FixedButtonWrapper,
  PaginationWrapper,
} from "./styles/CategoryPageStyles";
import { categoryService } from "./Servises/getData";
const CategoryPage = (props) => {
  const [items, setItems] = useState(popularProducts);
  const [open, setOpen] = useState(false);
  const [filterProp, setFilterProp] = useState({});
  const [loading, setLoading] = useState(false);
  const { categoryName } = useParams();
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

  const fetchWithPromiseAll = async (categoryName) => {
    const getProducts = categoryService.getProductsByCategory(categoryName);
    const [products] = await Promise.all([getProducts]);
    // this func for add products from server
    // setItems(products.data.products);
    console.log(products);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setTimeout(() => {
      setItems(popularProducts);
      setLoading(false);
      fetchWithPromiseAll(categoryName);
    }, 2000);
  }, [categoryName]);

  return (
    <Container>
      <Title>{}</Title>
      <MainContainer>
        <FilterWrapper>
          <FilterContainer onSubmit={onChangeFilterProp} />
        </FilterWrapper>
        <CustomDialog open={open} onClose={closeDialog}>
          <FilterContainerMobile onSubmit={onChangeFilterProp} />
        </CustomDialog>
        <ProductWrapper>
          {loading ? (
            <CustomSpinner />
          ) : (
            <div>
              <Products items={items} />
              <PaginationWrapper>
                <CustomPagination />
              </PaginationWrapper>
            </div>
          )}
        </ProductWrapper>
      </MainContainer>
      <FixedButtonWrapper onClick={() => openDialog()}>
        <FixedButton />
      </FixedButtonWrapper>
    </Container>
  );
};

export default CategoryPage;
