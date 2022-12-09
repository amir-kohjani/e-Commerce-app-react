import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import CustomPagination from "../../components/customPagination/CustomPagination";
import Products from "../../components/Products";
import FilterContainer from "../../components/FilterProduct/FilterContainer";
import FixedButton from "../../components/FixedButton";
import CustomDialog from "../../components/CustomDialog/CustomDialog";

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
import useMobileMode from "../../hooks/useMobileMode";
const CategoryPage = (props) => {
  const mobileMode = useMobileMode();
  const [items, setItems] = useState(popularProducts);
  const [products, setProducts] = useState(null);
  const [open, setOpen] = useState(false);
  const [filterProp, setFilterProp] = useState({});
  const [countPage, setCountPage] = useState(0);
  const [curentPage, setCurentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { categoryName } = useParams();
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  const onChangeFilterProp = (filters) => {
    setFilterProp(filters);
    closeDialog();
  };
const changePageHandler = (page)=>{
  setCurentPage(page);
}
  const fetchWithPromiseAll = async (categoryName, filters) => {
    const getProducts = categoryService.getProductsByCategory(
      categoryName,
      filters,
curentPage
    );
    // this func for add products from server
    Promise.all([getProducts])
      .then((Products) => {
        console.log(Products[0].data)
        setCountPage(Products[0].data.products.totalPages);
        setProducts(Products[0].data.products.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(products);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    fetchWithPromiseAll(categoryName, filterProp);
  }, [categoryName, filterProp,curentPage]);

  return (
    <Container>
      <Title>{}</Title>
      <MainContainer>
        <FilterWrapper mobileMode={mobileMode}>
          <FilterContainer onSubmit={onChangeFilterProp} />
        </FilterWrapper>
        <CustomDialog open={open} onClose={closeDialog}>
          <FilterContainer onSubmit={onChangeFilterProp} />
        </CustomDialog>
        <ProductWrapper>
          {loading ? (
            <CustomSpinner />
          ) : (
            <div>
              {products ? <Products items={items} products={products} /> : null}
              <PaginationWrapper>
                <CustomPagination count={countPage} changePage={changePageHandler}curentPage={curentPage} />
              </PaginationWrapper>
            </div>
          )}
        </ProductWrapper>
      </MainContainer>
      <FixedButtonWrapper onClick={() => openDialog()} mobile={mobileMode}>
        <FixedButton />
      </FixedButtonWrapper>
    </Container>
  );
};

export default CategoryPage;
