"use client";

import { SliderCustom } from "../Base/SliderCustom";
import { SwiperSlide } from "swiper/react";
import { categories } from "../data";
import { map } from "lodash";
import CardRadiusItem from "../Base/CardRadiusItem";

const CategoriesSlider = () => {
  return (
    <div className="max-w-[1600px] w-full mb-10 items-center flex flex-col px-2.5">
      <SliderCustom
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          stopOnLastSlide: false,
        }}
        numberPerView={8}
        slidesPerGroup={2}
        spaceBetween={31}
        title={"Popular Categories"}
        see_more="View All Categories"
      >
        <div className="flex items-stretch">
          {map(categories, (category, index) => {
            return (
              <SwiperSlide key={index} style={{ width: "544px" }}>
                <CardRadiusItem
                  key={Math.random()}
                  label={category.name}
                  img={category.image}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </SliderCustom>
    </div>
  );
};

export default CategoriesSlider;
