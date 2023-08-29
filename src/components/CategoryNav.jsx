import React from "react";
import { motion } from "framer-motion"; // Import the motion object from framer-motion
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  const { data } = useFetch("/categories");

  return (
    <motion.aside // Wrap the entire component with motion.aside for animation
      initial={{ x: -100 }} // Set the initial position (offscreen to the left)
      animate={{ x: 0 }} // Animate the x-axis position to 0
      transition={{ delay: 1, duration: 3 }} // Add a delay before the animation starts
      className="hidden xl:flex"
    >
      <div className="bg-primary flex flex-col w-72 h-[500px] rounded-lg overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className="uppercase"
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};

export default CategoryNav;
