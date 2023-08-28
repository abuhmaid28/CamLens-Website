import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import PromImg1 from "../img/promo_img1.png";
import PromImg2 from "../img/promo_img2.png";
const Hero = () => {
  return (
    <section className="mb-8 pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-7 xl:flex-row xl:gap-x-7">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg lg:max-w-3xl mx-auto ">
            <MainSlider />
          </div>
          {/* promos */}
          <div className="flex flex-col gap-y-7  h-[500px] w-full mx-auto">
            {/* promo 1 */}
            <div className="grad flex-1 h-60 rounded-lg overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-xl uppercase leading-tight font-medium mb-4">
                  save 10% all dslr cameras
                </div>
                <a href="#" className="text-accent uppercase">
                  Shop now
                </a>
              </div>
              {/* image */}
              <img
                className="absolute z-20 -top-2 -right-4"
                src={PromImg1}
                alt="card_image"
              />
            </div>
            {/* promo 2 */}
            <div className="grad flex-1 h-60 rounded-lg overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-xl uppercase leading-tight font-medium mb-4">
                  save 5% all mirrorless cameras
                </div>
                <a href="#" className="text-accent uppercase">
                  Shop now
                </a>
              </div>
              {/* image */}
              <img
                className="absolute z-20 top-4 -right-6"
                src={PromImg2}
                alt="card_image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
