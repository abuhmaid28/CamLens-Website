import React from "react";
import CategoryNav from "../components/CategoryNav";
import MainSlider from "../components/MainSlider";
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
          <div className="w-full max-w-lg lg:max-w-3xl mx-auto bg-pink-200">
            <MainSlider />
          </div>
          {/* promos */}
          <div className="flex flex-col gap-y-7  h-[500px] w-full mx-auto">
            {/* promo 1 */}
            <div className="grad flex-1 h-60 rounded-lg overflow-hidden relative p-6">
              {/* text */}
              <div>text</div>
              {/* image */}
              <img
                className="absolute z-20 -top-2"
                src={PromImg1}
                alt="card_image"
              />
            </div>
            {/* promo 2 */}
            <div>PromImg2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
