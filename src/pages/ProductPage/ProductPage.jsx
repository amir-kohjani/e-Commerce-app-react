import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AddCircle, RemoveCircle, Favorite } from "@mui/icons-material";
import { addItem, deleteItem } from "../../redux/cart";
import { popularProducts } from "../../data";
import { MobileMode } from "../../util/MobileMode";
import ProductSlider from "../../components/ProductSlider";
import CommentBox from "../../components/customCommentBox/CommentBox";
import DesktopWrapper from "./DesktopWrapper";
import MobileWrapper from "./MobileWrapper";
import CustomSpinner from "../../components/customSpinner/CustomSpinner";
import Header from "../../components/Header/Header";

const Container = styled.div``;

const CommentWrapper = styled.div``;
const CommentContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const SuggestWrapper = styled.div``;

const ProductPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState(
    popularProducts.find((product) => product.id == productId)
  );
  const [loading, setLoading] = useState(false);
  const [mobileMode, setMobileMode] = useState(MobileMode);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    setMobileMode(MobileMode);
  }, [MobileMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(popularProducts.find((product) => product.id == productId));
    }, 2000);
  }, [productId]);
  return (
    <>
    <Header noLogo={MobileMode() ? true: false}/>
    <Container>
      {loading ? (
        <CustomSpinner />
        ) : mobileMode ? (
        <MobileWrapper addToCart={addToCartHandler} product={data} />
      ) : (
        <DesktopWrapper addToCart={addToCartHandler} product={data} />
      )}

      <SuggestWrapper>
        <ProductSlider
          title={"برای شما"}
          ICON={Favorite}
          items={popularProducts}
        />
      </SuggestWrapper>
    </Container>
          </>
  );
};

export default ProductPage;

//<CommentWrapper>
{
  /* {data.comments && <ListComments comments={data.comments} />} */
}
//<CommentBox comments={data.comments} />
//</CommentWrapper>
