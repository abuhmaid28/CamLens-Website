import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import PromImg1 from "../img/promo_img1.png";
import PromImg2 from "../img/promo_img2.png";
// framer motion import
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for fade-in effect
  const fadeVariants = {
    initial: { opacity: 0, scale: 0.9, y: 30 },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
      scale: 1,
      y: 0,
    }, // Adjust duration and delay values as needed
  };

  const heroHieght = 500;
  return (
    <section className="mb-8 pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-7 xl:flex-row xl:gap-x-7">
          {/* sidebar */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeVariants}
          >
            <CategoryNav hieght={heroHieght} />
          </motion.div>
          {/* main slider */}
          <motion.div
            className="w-full max-w-lg lg:max-w-3xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeVariants}
          >
            <MainSlider />
          </motion.div>
          {/* promos */}
          <div className="flex flex-col gap-y-7  h-[500px] w-full mx-auto">
            {/* promo 1 */}
            <motion.div
              className="grad flex-1 h-60 rounded-lg overflow-hidden relative p-6"
              initial="initial"
              animate="animate"
              variants={fadeVariants}
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
                className="absolute z-20 -top-2 -right-4"
                src={PromImg1}
                alt="card_image"
              />
            </motion.div>
            {/* promo 2 */}
            <motion.div
              className="grad flex-1 h-60 rounded-lg overflow-hidden relative p-6"
              initial="initial"
              animate="animate"
              variants={fadeVariants}
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
                className="absolute z-20 top-4 -right-6"
                src={PromImg2}
                alt="card_image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
