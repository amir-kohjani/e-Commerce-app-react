import { useEffect, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import PercentIcon from "@mui/icons-material/Percent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import SliderTop from "../../components/Slider";
import { useLocation } from "react-router-dom";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import {
  popularProducts,
  TopCategoris,
  NewProduct,
  BigOfferData,
  BannerCardData,
  categories,
  banners,
  sliderItems,
} from "../../data";
import ProductSlider from "../../components/ProductSlider";
import SliderCart from "../../components/SliderCart";
import BigOffercart from "../../components/BigOffercart";
import BannerCard from "../../components/BannerCard/BannerCard";
import Banners from "../../components/banner/Banners.jsx.jsx";
import Categories from "../../components/category/Categories";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { HomeService } from "./Servises/getData";
const Home = () => {
  const [offerProducts, setOfferProducts] = useState({});
  const [BestSellersProducts, setBestSellersProducts] = useState({});
  const [NewsProducts, setNewsProducts] = useState({});

const fetchWithPromiseAll = async ()=>{
  const getOfferProducts =  HomeService.getProductsByCategory("offer");
  const getBestSellersProducts =  HomeService.getProductsByCategory("bestSellers");
  const getNewsProducts =  HomeService.getProductsByCategory("news");
  const [Offer , BestSellers , News ] = await Promise.all([getOfferProducts, getBestSellersProducts, getNewsProducts])

  setOfferProducts(Offer.data.products);
  setBestSellersProducts(BestSellers.data.products);
  setNewsProducts(News.data.products);
}

  useEffect(() => {
   fetchWithPromiseAll();
  }, []);
  return (
    <>
   
      <SliderTop items={sliderItems} />
      <Banners smallBanner={banners.small} bigBanner={banners.big} />
      <Categories ICON={CategoryIcon} data={categories} />
      <ProductSlider
        items={popularProducts}
        title="پرفروش ترین ها"
        ICON={FavoriteIcon}
      />
      {/* <BannerCard data={BannerCardData} /> */}
      <ProductSlider
        items={popularProducts}
        title="بیشترین تخفیف ها"
        ICON={PercentIcon}
      />
      <ProductSlider
        items={popularProducts}
        title="تازه ترین ها"
        ICON={NewReleasesIcon}
      />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
