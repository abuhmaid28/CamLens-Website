import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { motion } from "framer-motion";
const ProductFilters = ({
  sortBy,
  setSortBy,
  priceOrder,
  setPriceOrder,
  isNew,
  setIsNew,
}) => {
  const isSmallScreen = window.innerWidth < 640;

  const [showFilters, setShowFilters] = useState(!isSmallScreen);

  const handleSortByChange = (value) => {
    if (value === sortBy) {
      setSortBy(null);
    } else {
      setSortBy(value);
    }
  };

  const handlePriceOrderChange = (value) => {
    if (value === priceOrder) {
      setPriceOrder(null);
    } else {
      setPriceOrder(value);
    }
  };

  const handleIsNewChange = () => {
    setIsNew(!isNew);
  };

  return (
    <div className=" flex flex-col rounded-lg overflow-hidden mb-6  ">
      <div
        className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-between lg:text-base text-sm px-3 "
        onClick={() => isSmallScreen && setShowFilters(!showFilters)}
      >
        Filter Options
        <button
          className="sm:hidden transition-all duration-300 "
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
        </button>
      </div>
      {showFilters && (
        <motion.div // Wrap the content inside motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }} // Add transition here
          className="bg-primary flex-1 flex flex-col gap-y-6 p-6 cursor-auto"
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Sort By:</label>
            <div className="flex flex-col gap-1 ">
              <label className="flex items-center space-x-1 cursor-pointer ">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  checked={sortBy === "aToZ"}
                  onChange={() => handleSortByChange("aToZ")}
                />
                <span>A to Z</span>
              </label>
              <label className="flex items-center space-x-1 cursor-pointer">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  checked={sortBy === "zToA"}
                  onChange={() => handleSortByChange("zToA")}
                />
                <span>Z to A</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Price Order:</label>
            <div className="flex flex-col gap-1">
              <label className="flex items-center space-x-1 cursor-pointer">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  checked={priceOrder === "lowToHigh"}
                  onChange={() => handlePriceOrderChange("lowToHigh")}
                />
                <span>Low to High</span>
              </label>
              <label className="flex items-center space-x-1 cursor-pointer">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  checked={priceOrder === "highToLow"}
                  onChange={() => handlePriceOrderChange("highToLow")}
                />
                <span>High to Low</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Is New:</label>
            <div className="flex items-center space-x-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                checked={isNew}
                onChange={handleIsNewChange}
              />
              <span className="cursor-pointer">New Items</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductFilters;
