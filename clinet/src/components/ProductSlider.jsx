import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
import { Pagination, Navigation } from "swiper";
import Product from "./Product";
import { calculatePrice } from "./PriceUtils";

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
    >
      {data?.map((product) => {
        const categoryTitle =
          product.attributes.categories.data[0].attributes.title;
        const cameraTitle = product.attributes.title;
        const cameraPrice = product.attributes.price;

        const calculatedPrice = calculatePrice(
          cameraTitle,
          categoryTitle,
          cameraPrice
        );

        if (cameraPrice !== calculatedPrice) {
          return (
            <SwiperSlide key={product.id}>
              {!product.attributes.isNew ? (
                <Product showStrikethrough={true} product={product} />
              ) : (
                <Product product={product} />
              )}
            </SwiperSlide>
          );
        }
        return null; // Return null for products that don't meet the condition
      })}
    </Swiper>
  );
};

export default ProductSlider;
