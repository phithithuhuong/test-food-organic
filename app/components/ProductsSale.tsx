"use client";
import { products } from "../data";
import ProductItem from "../Base/ProductItem";
import { SliderCustom } from "../Base/SliderCustom";
import { map } from "lodash";
import { SwiperSlide } from "swiper/react";

const ProductsSaleScreen: React.FC = () => {
  return (
    <div className="w-full max-w-[1600px] pb-10 px-2.5">
      <SliderCustom
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          stopOnLastSlide: false,
        }}
        numberPerView={6}
        slidesPerGroup={2}
        spaceBetween={30}
        title={"Products On Sale"}
      >
        <div className="flex items-stretch">
          {map(products, (product, index) => {
            return (
              <SwiperSlide key={index} style={{ width: "544px" }}>
                <ProductItem
                  product={product}
                  key={Math.random()}
                  rateColor="green"
                />
              </SwiperSlide>
            );
          })}
        </div>
      </SliderCustom>
    </div>
  );
};

export default ProductsSaleScreen;
