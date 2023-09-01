import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import PromImg1 from "../img/promo_img1.webp";
import PromImg2 from "../img/promo_img2.webp";
import { motion } from "framer-motion";
import { fadeVariants } from "./AnimationVariants";

const Hero = () => {
  const heroHeight = 500;

  return (
    <section className="mb-8 pt-36 lg:pt-0">
      <div className="container mx-auto grid sm:gap-7 gap-y-7 sm:gap-y-0 grid-cols-12 2xl:px-20">
        {/* Sidebar */}
        <motion.div
          className="xl:block xl:col-span-2 hidden"
          initial="initial"
          animate="animate"
          variants={fadeVariants}
        >
          <CategoryNav height={heroHeight} />
        </motion.div>
        {/* Main Slider */}
        <motion.div
          className="xl:col-span-7 lg:col-span-8 sm:col-span-7 col-span-12"
          initial="initial"
          animate="animate"
          variants={fadeVariants}
        >
          <MainSlider />
        </motion.div>
        {/* Promotional Content */}
        <div className="xl:col-span-3 lg:col-span-4 sm:col-span-5 col-span-12 grid grid-cols-1 gap-7">
          {/* Promo 1 */}
          <motion.div
            className="grad rounded-lg overflow-hidden relative p-6"
            initial="initial"
            animate="animate"
            variants={fadeVariants}
          >
            {/* Text */}
            <div className="flex flex-col max-w-[142px] h-full justify-center">
              <div className="text-xl uppercase leading-tight font-medium mb-4">
                save 10% on all dslr cameras
              </div>
              <a href="#" className="text-accent uppercase">
                Shop now
              </a>
            </div>
            {/* Image */}
            <img
              className="absolute z-20 xl:-top-2 lg:-right-4 md:-right-8 lg:top-16 md:top-10 -top-4 -right-4 w-36 sm:w-auto"
              src={PromImg1}
              alt="card_image"
            />
          </motion.div>
          {/* Promo 2 */}
          <motion.div
            className="grad rounded-lg overflow-hidden relative p-6"
            initial="initial"
            animate="animate"
            variants={fadeVariants}
          >
            {/* Text */}
            <div className="flex flex-col max-w-[140px] h-full justify-center">
              <div className="text-xl uppercase leading-tight font-medium mb-4">
                save 5% on mirrorless cameras
              </div>
              <a href="#" className="text-accent uppercase">
                Shop now
              </a>
            </div>
            {/* Image */}
            <img
              className="absolute z-20 xl:top-4 lg:-right-4 md:-right-8 lg:top-24 md:top-16 top-2 -right-4 w-28 sm:w-auto"
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
