import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AddCircle, RemoveCircle, Favorite } from "@mui/icons-material";
import {addItem,deleteItem} from "../../redux/cart"
import { NewProduct, popularProducts } from "../../data";
import { MobileMode } from "../../util/MobileMode";
import ProductSlider from "../../components/ProductSlider";
import CommentBox from "../../components/customCommentBox/CommentBox";
import DesktopWrapper from "./DesktopWrapper";
import MobileWrapper from "./MobileWrapper";

const Container = styled.div``;

const CommentWrapper = styled.div``;
const CommentContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const SuggestWrapper = styled.div``;

const ProductPage = () => {
  const [data, setData] = useState(popularProducts[1]);
  const [amunt, setAmunt] = useState(1);
  const [mobileMode, setMobileMode] = useState(MobileMode);
const dispatch = useDispatch();
  useEffect(() => {
    setMobileMode(MobileMode);
  }, [MobileMode]);

  const addToCartHandler = (item) => {
   dispatch(addItem(item));
  };

  
  return (
    <Container>
      {mobileMode ? (
        <MobileWrapper  addToCart={addToCartHandler} product={data} />
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
  );
};

export default ProductPage;


//<CommentWrapper>
{/* {data.comments && <ListComments comments={data.comments} />} */}
//<CommentBox comments={data.comments} />
//</CommentWrapper>