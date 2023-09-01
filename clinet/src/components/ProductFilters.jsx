import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { motion } from "framer-motion";

// Define constants for filter options to avoid repetition
const SORT_OPTIONS = [
  { label: "A to Z", value: "aToZ" },
  { label: "Z to A", value: "zToA" },
];

const PRICE_ORDER_OPTIONS = [
  { label: "Low to High", value: "lowToHigh" },
  { label: "High to Low", value: "highToLow" },
];

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
          {/* Sort By */}
          <FilterGroup
            label="Sort By:"
            options={SORT_OPTIONS}
            selectedOption={sortBy}
            onChange={handleSortByChange}
          />

          {/* Price Order */}
          <FilterGroup
            label="Price Order:"
            options={PRICE_ORDER_OPTIONS}
            selectedOption={priceOrder}
            onChange={handlePriceOrderChange}
          />

          {/* Is New */}
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

// Reusable component for filter groups
const FilterGroup = ({ label, options, selectedOption, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">{label}</label>
      <div className="flex flex-col gap-1">
        {options.map((option) => (
          <SortCheckbox
            key={option.value}
            label={option.label}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
          />
        ))}
      </div>
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
