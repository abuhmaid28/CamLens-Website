import React from "react";
// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
// import required modules
import { Pagination } from "swiper";
// img
import CameraImg from "../img/camera.png";
//data

const sliderData = [
  {
    img: CameraImg,
    preTitle: "special offer",
    titlePart1: "save 20%",
    titlePart2: "On Your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    preTitle: "special offer",
    titlePart1: "save 20%",
    titlePart2: "On Your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    preTitle: "special offer",
    titlePart1: "save 20%",
    titlePart2: "On Your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
];
const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none bg-cover rounded-lg overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-5 md:p-14">
                {/* text */}
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {slide.preTitle}
                  </div>
                  <div className="text-3xl md:text-5xl font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    <p>{slide.titlePart1}</p>
                    <p>{slide.titlePart2}</p>
                    <p>{slide.titlePart3}</p>
                  </div>
                  <button className="btn btn-accent mx-auto lg:mx-0">
                    Shop now
                  </button>
                </div>
                {/* image */}
                <div className="flex-1">
                  <img
                    className="xl:absolute xl:-right-16 xl:-bottom-12 "
                    src={slide.img}
                    alt="slide_image"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
