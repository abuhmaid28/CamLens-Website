// Hero.js
import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import PromImg1 from "../img/promo_img1.png";
import PromImg2 from "../img/promo_img2.png";
import { motion } from "framer-motion";
import { fadeVariants } from "./AnimationVariants"; // Import the animation variants

const Hero = () => {
  const heroHeight = 500;

  return (
    <section className="mb-8 pt-36 lg:pt-0">
      <div className="container mx-auto grid lg:gap-7 grid-cols-12 2xl:px-20">
        {/* sidebar */}
        <motion.div
          className="xl:block xl:col-span-2 lg:hidden"
          initial="initial"
          animate="animate"
          variants={fadeVariants} // Use the imported fadeVariants here
        >
          <CategoryNav height={heroHeight} />
        </motion.div>
        {/* main slider */}
        <motion.div
          className="xl:col-span-7 lg:col-span-8"
          initial="initial"
          animate="animate"
          variants={fadeVariants} // Use the imported fadeVariants here
        >
          <MainSlider />
        </motion.div>
        {/* promos */}
        <div className="xl:col-span-3 lg:col-span-4 grid grid-cols-1 gap-7">
          {/* promo 1 */}
          <motion.div
            className="grad rounded-lg overflow-hidden relative p-6"
            initial="initial"
            animate="animate"
            variants={fadeVariants} // Use the imported fadeVariants here
          >
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
              className="absolute z-20 xl:-top-2 xl:-right-4 lg:top-0 lg:align-middle"
              src={PromImg1}
              alt="card_image"
            />
          </motion.div>
          {/* promo 2 */}
          <motion.div
            className="grad rounded-lg overflow-hidden relative p-6"
            initial="initial"
            animate="animate"
            variants={fadeVariants} // Use the imported fadeVariants here
          >
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
              className="absolute z-20 xl:top-4 -right-6 lg:top-0"
              src={PromImg2}
              alt="card_image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
