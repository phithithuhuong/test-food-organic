"use client";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FC, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { AutoplayOptions } from "swiper/types";
import TextLabelBase from "../TextLabel";

type Props = {
  children?: React.ReactNode;
  numberPerView?: number;
  mousewheel?: boolean;
  slidesPerGroup?: number;
  spaceBetween?: number;
  autoplay?: boolean | AutoplayOptions;
  isShowPagination?: boolean;
  title?: React.ReactNode | string;
  see_more?: string;
};

export const SliderCustom: FC<Props> = ({
  children,
  slidesPerGroup = 3,
  numberPerView = 3,
  mousewheel = false,
  autoplay = false,
  spaceBetween = 14.5,
  see_more,
  title,
}) => {
  const [swiperRef, setSwiperRef] = useState(null as any);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  const handleMouseEnter = () => {
    swiperRef?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef?.autoplay?.start();
  };

  return (
    <div
      className={classNames("relative w-full")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-10">
        <TextLabelBase
          see_more={see_more}
          label={title as string}
          isNextPageCustom={
            <div className="flex space-x-3 justify-end">
              <button
                onClick={prevHandler}
                className="bg-[#F1F1F1]  rounded-[10px] w-[38px] h-[38px] hover:bg-[#f8f5f5] items-center justify-center flex"
              >
                <FontAwesomeIcon icon={faChevronLeft} fontSize={20} />
              </button>
              <button
                onClick={nextHandler}
                className="bg-primary rounded-[10px] w-[38px] h-[38px] hover:bg-green_200 items-center justify-center flex"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className=" text-white"
                  fontSize={20}
                />
              </button>
            </div>
          }
        />
      </div>

      <Swiper
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: numberPerView,
            spaceBetween: spaceBetween,
          },
        }}
        style={{ zIndex: 0 }}
        autoplay={autoplay}
        slidesPerView={numberPerView}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        spaceBetween={spaceBetween}
        loop={false}
        slidesPerGroup={slidesPerGroup}
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        mousewheel={mousewheel}
      >
        {children}
      </Swiper>
    </div>
  );
};
