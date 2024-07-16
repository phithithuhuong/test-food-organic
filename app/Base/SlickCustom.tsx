"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "../data";
import CardRadiusItem from "./CardRadiusItem";
import { useRef, useState } from "react";
import TextLabelBase from "./TextLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

export const SliderBase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current: number) => setCurrentSlide(current),
  };
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  console.log("currentSlide", currentSlide);

  return (
    <div className="max-w-[1600px] w-full items-center flex flex-col">
      <TextLabelBase
        label={"Popular categories"}
        see_more="View All Categories"
        isNextPageCustom={
          <div className="flex space-x-3 justify-end">
            <button
              onClick={prevSlide}
              className="bg-[#F1F1F1]  rounded-[10px] w-[38px] h-[38px] hover:bg-[#f8f5f5] items-center justify-center flex"
            >
              <FontAwesomeIcon icon={faChevronLeft} fontSize={20} />
            </button>
            <button
              onClick={nextSlide}
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
      <div className="slider-container ">
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category) => (
            <CardRadiusItem
              key={Math.random()}
              label={category.name}
              img={category.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
