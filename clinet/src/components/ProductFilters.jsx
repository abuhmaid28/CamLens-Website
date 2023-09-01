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
    <div className="flex flex-col rounded-lg overflow-hidden mb-6">
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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-primary flex-1 flex flex-col gap-y-6 p-6 cursor-auto"
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Sort By:</label>
            <div className="flex flex-col gap-1 ">
              <SortCheckbox
                label="A to Z"
                value="aToZ"
                checked={sortBy === "aToZ"}
                onChange={handleSortByChange}
              />
              <SortCheckbox
                label="Z to A"
                value="zToA"
                checked={sortBy === "zToA"}
                onChange={handleSortByChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Price Order:</label>
            <div className="flex flex-col gap-1">
              <SortCheckbox
                label="Low to High"
                value="lowToHigh"
                checked={priceOrder === "lowToHigh"}
                onChange={handlePriceOrderChange}
              />
              <SortCheckbox
                label="High to Low"
                value="highToLow"
                checked={priceOrder === "highToLow"}
                onChange={handlePriceOrderChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold">Is New:</label>
            <IsNewCheckbox
              label="New Items"
              checked={isNew}
              onChange={handleIsNewChange}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const SortCheckbox = ({ label, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-1 cursor-pointer ">
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span>{label}</span>
    </label>
  );
};

const IsNewCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-1">
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="cursor-pointer">{label}</span>
    </div>
  );
};

export default ProductFilters;
