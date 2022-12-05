import { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
import { addItem } from "../../redux/cart";
import { addItemWishList,removeItemWishList } from "../../redux/wishList";

import { MobileMode } from "../../util/MobileMode";
import ProductSlider from "../../components/ProductSlider";

import CustomSpinner from "../../components/customSpinner/CustomSpinner";

import { productService } from "./services/getData";
import CustomSnakbar from "../../components/snakbar/CustomSnakbar";

const Container = styled.div``;
const SuggestWrapper = styled.div``;

const ProductPage = () => {
  
  //get product id from params router
  const { productId } = useParams();

  const [data, setData] = useState();
  const [suggestProduct, setSuggestProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [openSnakbar, setOpenSnakbar] = useState(false);
  const [snakMassage, setSnakMassage] = useState('')
  const [mobileMode, setMobileMode] = useState(MobileMode);
  const [wished, setWished] = useState(false);

//read data from redux
  const user = useSelector((state) => state.user.user);
  const wishList = useSelector((state) => state.wishList.items);
  const dispatch = useDispatch();
  
  const snakbarHandler = (open,massage) => {
    setSnakMassage(massage);
    setOpenSnakbar(open);
  };
  //check this product is wished or no
  const wishListHandler = (product) => {
    if (wishList.length > 0) {
      const item = wishList.find(
        (wishListItem) => wishListItem.id == product.id
      );
      if (item) setWished(true);
      else setWished(false);
    }
  };
  //fetch product and sugesst item
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
          snakbarHandler(true,"محصول به سبد شما اضاف گردید!");
        }
      });
    } else {
      snakbarHandler(true,'اقزودن محصول با مشکلی رو به رو شد!');
    }
  };

  const addToWishListHandler = (item,callback) => {
    if (user.id) {
      const userId = user.id;
      const wishListItem = {
        id: item.id,
        title: item.title,
        desc: item.desc,
        image: item.colors[0].images[0],
      };
      const addItemRequest = productService.addItemToWishListByUserId(
        userId,
        wishListItem
      );
      Promise.all([addItemRequest]).then((res) => {
        if (!res[0].data.isError) {
          dispatch(addItemWishList(wishListItem));
          callback(true)
          snakbarHandler(true,'محصول به لیست شما افزوده شد!');

        } else {
          callback(false)
          snakbarHandler(true,'اقزودن محصول با مشکلی رو به رو شد!');

        }
      });
    }else {
      snakbarHandler(true,"لطفا ابتدا وارد شوید!");
      setWished(false)
      callback(false)
    }
  };
  const removeWishListHandler = (item) => {
    if (user.id) {
      const userId = user.id;
      const wishListItem = {
        id: item.id,
        title: item.title,
        desc: item.desc,
        image: item.colors[0].images[0],
      };
      const addItemRequest = productService.removeItemToWishListByUserId(
        userId,
        wishListItem
      );
      Promise.all([addItemRequest]).then((res) => {
        if (!res[0].data.isError) {
          dispatch(removeItemWishList(wishListItem));
          snakbarHandler(true,"محصول از لیست شما حذف گردید!");
          setWished(false);
        } else {
          snakbarHandler(true,"مشکلی در حذف محصول پیش آمده است!");
        }
      });
    }
  };

  //this func for check mobile Mode
  useEffect(() => {
    setMobileMode(MobileMode);
  }, [MobileMode]);
  //this func for check productId changed , refetch data and scrolled page to up
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    fetchWithPromiseAll();
  }, [productId]);
//if data was changed wishList handler called
  useEffect(() => {
    if(data)
    wishListHandler(data)
  },[data,wishList])
  //set time out 2000 ms and render component
  const DesktopComponent = lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./DesktopWrapper")), 2000)
      )
  );
  //set time out 2000 ms and render component
  const MobileComponent = lazy(
    () =>
      new Promise(
        (resolve, reject) =>
          setTimeout(() => resolve(import("./MobileWrapper"))),
        2000
      )
  );
  if (loading == true) {
    return <CustomSpinner />;
  } else if (data !== undefined && suggestProduct !== undefined)
    return (
      <>
        <Container>
          {mobileMode ? (
            <Suspense fallback={<CustomSpinner />}>
              <MobileComponent addToCart={addToCartHandler} product={data} />
            </Suspense>
          ) : (
            <Suspense fallback={<CustomSpinner />}>
              <DesktopComponent
                addToCart={addToCartHandler}
                product={data}
                addWishList={addToWishListHandler}
                removeWishList={removeWishListHandler}
                productWished={wished}
              />
            </Suspense>
          )}

          <SuggestWrapper>
            <ProductSlider
              title={"برای شما"}
              ICON={Favorite}
              items={suggestProduct}
            />
          </SuggestWrapper>
        
            <CustomSnakbar
              open={openSnakbar}
              onClose={() => snakbarHandler(false)}
              message={snakMassage}
            />
       
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
