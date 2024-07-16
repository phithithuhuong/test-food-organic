import AdvertisementScreen from "./components/Advertisement";
import BannerScreen from "./components/Banner";
import CategoriesSlider from "./components/CategorisSlider";
import DownloadAppScreen from "./components/DowloadApp";
import FeaturesScreen from "./components/Features";
import LatestArticles from "./components/LatestArticles";
import NewSletterScreen from "./components/NewSletter";
import PeopleLooking from "./components/PeopleLooking";
import ProductsScreen from "./components/Products";
import ProductsSaleScreen from "./components/ProductsSale";
import ProductsSellingScreen from "./components/ProductsSelling";
import FooterScreen from "./layout/Footer";
import HeaderScreen from "./layout/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center flex-col">
      <div className="bg-[url('/banner.png')] min-h-[813px] w-full bg-cover bg-center bg-no-repeat relative">
        <HeaderScreen />
        <BannerScreen />
      </div>
      <CategoriesSlider />
      <ProductsScreen />
      <AdvertisementScreen />
      <ProductsSellingScreen />
      <ProductsSaleScreen />
      <LatestArticles />
      <NewSletterScreen />
      <DownloadAppScreen />
      <FeaturesScreen />
      <PeopleLooking />
      <FooterScreen />
    </div>
  );
}
