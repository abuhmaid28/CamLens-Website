import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
import { Pagination } from "swiper";
import sliderData from "./SliderData"; // Import sliderData from the new component
import { Link } from "react-router-dom";

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider cursor-grab active:cursor-grabbing h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat bg-cover rounded-lg overflow-hidden drop-shadow-2xl"
    >
      {sliderData.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col xl:flex-row h-full p-5 md:p-14">
              <div className="w-full lg:flex-1">
                {/* Pre-title */}
                <div className="uppercase mb-1 text-center xl:text-left">
                  {slide.preTitle}
                </div>
                {/* Title */}
                <div className="text-3xl md:text-5xl font-semibold uppercase leading-none text-center xl:text-left mb-8 xl:mb-20">
                  <p>{slide.titlePart1}</p>
                  <p>{slide.titlePart2}</p>
                  <p>{slide.titlePart3}</p>
                </div>
                {/* Button */}
                <div>
                  <button className="btn btn-accent mx-auto xl:mx-0">
                    {/* Link to the specified destination */}
                    <Link to={slide.link}>{slide.btnText}</Link>
                  </button>
                </div>
              </div>
              {/* Image */}
              <div className="flex-1 flex justify-center items-center">
                <img
                  className="xl:absolute xl:-right-16 xl:-bottom-12 lg:mt-5 lg:mr-8 xl:mt-0 xl:mr-0"
                  src={slide.img}
                  alt="slide_image"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainSlider;
