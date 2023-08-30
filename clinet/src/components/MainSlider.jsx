import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
import { Pagination } from "swiper";
import CameraImg from "../img/camera.webp";
import CameraImg2 from "../img/camera2.webp";
import CameraImg3 from "../img/camera3.webp";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const sliderData = [
  {
    img: CameraImg,
    preTitle: "special offer",
    titlePart1: "save 5% on",
    titlePart2: "PROFESSIONAL",
    titlePart3: "Camera order",
    btnText: "Shop now",
    link: "/products/4",
  },
  {
    img: CameraImg2,
    preTitle: "special offer",
    titlePart1: "save 15%",
    titlePart2: "On Your",
    titlePart3: "Canon order",
    btnText: "Shop now",
    link: "/search?query=canon",
  },
  {
    img: CameraImg3,
    preTitle: "special offer",
    titlePart1: "save 10%",
    titlePart2: "On Your",
    titlePart3: "Sony order",
    btnText: "Shop now",
    link: "/search?query=sony",
  },
];

const MainSlider = () => {
  const { data } = useFetch("/categories");
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider cursor-grab active:cursor-grabbing h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat bg-cover rounded-lg overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col xl:flex-row h-full p-5 md:p-14">
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center xl:text-left">
                    {slide.preTitle}
                  </div>
                  <div className="text-3xl md:text-5xl font-semibold uppercase leading-none text-center xl:text-left mb-8 xl:mb-20">
                    <p>{slide.titlePart1}</p>
                    <p>{slide.titlePart2}</p>
                    <p>{slide.titlePart3}</p>
                  </div>
                  <div>
                    <button className="btn btn-accent mx-auto xl:mx-0">
                      <Link to={slide.link}>{slide.btnText}</Link>
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <img
                    className="xl:absolute xl:-right-16 xl:-bottom-12 lg:mt-5 lg:mr-8 xl:mt-0 xl:mr-0 "
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
