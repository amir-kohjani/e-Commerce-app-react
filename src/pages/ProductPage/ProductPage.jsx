import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { productService } from "./services/getData";
import CustomSnakbar from "../../components/snakbar/CustomSnakbar";
const Container = styled.div``;

const CommentWrapper = styled.div``;
const CommentContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const SuggestWrapper = styled.div``;

const ProductPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState();
  const [suggestProduct, setSuggestProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [openSnakbar, setOpenSnakbar] = useState(false);
  const [mobileMode, setMobileMode] = useState(MobileMode);
  const [user, setUser] = useState(useSelector((state) => state.user.user));
  const dispatch = useDispatch();

  const snakbarHandler = (open) => {
    setOpenSnakbar(open);
  };

  const fetchWithPromiseAll = async () => {
    const getProduct = await productService.getProductsById(productId);
    const getSuggest = await productService.getProductsSuggest(
      getProduct.data.product.category
    );
    setData(getProduct.data.product);
    setSuggestProduct(getSuggest.data.products);
    setLoading(false);
  };

  const addToCartHandler = (item) => {
    if (user.id) {
      const userId = user.id;
      const addItemRequest = productService.addItemToCartByUserId(item, userId);
      Promise.all([addItemRequest]).then((res) => {
        if (!res[0].data.isError) {
          dispatch(addItem(item));
          snakbarHandler(true);
        }
      });
    }else {
      snakbarHandler(true);
    }
  };

  useEffect(() => {
    setMobileMode(MobileMode);
  }, [MobileMode]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    fetchWithPromiseAll();
  }, [productId]);


  useEffect(() => {
    if(user.id){

      console.log(user)
    }
  })
  if (loading == true) {
    return <CustomSpinner />;
  } else if (data !== undefined && suggestProduct !== undefined)
    return (
      <>
        <Container>
          {mobileMode ? (
            <MobileWrapper addToCart={addToCartHandler} product={data} />
          ) : (
            <DesktopWrapper addToCart={addToCartHandler} product={data} />
          )}

          <SuggestWrapper>
            <ProductSlider
              title={"برای شما"}
              ICON={Favorite}
              items={suggestProduct}
            />
          </SuggestWrapper>
         {user.id ? <CustomSnakbar
            open={openSnakbar}
            onClose={() => snakbarHandler(false)}
            message="محصول با موفقیت به سبد شما اضافه شد!"
          />:
          <CustomSnakbar
            open={openSnakbar}
            onClose={() => snakbarHandler(false)}
            message="لطفا ابتدا وارد شوید!"
          />}
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
