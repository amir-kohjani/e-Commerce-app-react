import { useEffect, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import PercentIcon from "@mui/icons-material/Percent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import SliderTop from "../../components/Slider";
import Newsletter from "../../components/Newsletter";
import {
  categories,
  banners,
  sliderItems,
} from "../../data";
import ProductSlider from "../../components/ProductSlider";
import Banners from "../../components/banner/Banners.jsx.jsx";
import Categories from "../../components/category/Categories";
import Footer from "../../components/footer/Footer";
import { HomeService } from "./Servises/getData";
const Home = () => {
  const [offerProducts, setOfferProducts] = useState({});
  const [BestSellersProducts, setBestSellersProducts] = useState({});
  const [NewsProducts, setNewsProducts] = useState({});

  const fetchWithPromiseAll = async () => {
    const getOfferProducts = HomeService.getProductsByCategory("offer");
    const getBestSellersProducts = HomeService.getProductsByCategory(
      "beastSellers"
    );
    const getNewsProducts = HomeService.getProductsByCategory("news");
    const [Offer, BestSellers, News] = await Promise.all([
      getOfferProducts,
      getBestSellersProducts,
      getNewsProducts,
    ]);
 

    setOfferProducts(Offer.data.products.docs);
    setBestSellersProducts(BestSellers.data.products.docs);
    setNewsProducts(News.data.products.docs);
  };

  useEffect(() => {
    fetchWithPromiseAll();
    console.log(process.env.REACT_APP_API_ADDRESS)
  },[]);


  return (
    <>
      <SliderTop items={sliderItems} />
      <Banners smallBanner={banners.small} bigBanner={banners.big} />
      <Categories ICON={CategoryIcon} data={categories} />

     { BestSellersProducts.length == undefined ? null :<ProductSlider
        items={BestSellersProducts}
        title="پرفروش ترین ها"
        ICON={FavoriteIcon}
      /> }
      {/* <BannerCard data={BannerCardData} /> */}
      {NewsProducts.length ==undefined ? null :<ProductSlider
        items={offerProducts}
        title="بیشترین تخفیف ها"
        ICON={PercentIcon}
      />}
     {offerProducts.length ==undefined ? null : <ProductSlider
        items={NewsProducts}
        title="تازه ترین ها"
        ICON={NewReleasesIcon}
      />}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
