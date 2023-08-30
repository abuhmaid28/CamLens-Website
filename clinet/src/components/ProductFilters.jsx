import React from "react";

const ProductFilters = ({
  sortBy,
  setSortBy,
  priceOrder,
  setPriceOrder,
  isNew,
  setIsNew,
}) => {
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
    <div className="bg-primary flex flex-col h-96 rounded-lg overflow-hidden">
      <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
        Filter Options
      </div>
      <div className="flex flex-col gap-y-6 p-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Sort By:</label>
          <div className="flex flex-col gap-1">
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={sortBy === "aToZ"}
                onChange={() => handleSortByChange("aToZ")}
              />
              <span>A to Z</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
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
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={priceOrder === "lowToHigh"}
                onChange={() => handlePriceOrderChange("lowToHigh")}
              />
              <span>Low to High</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={priceOrder === "highToLow"}
                onChange={() => handlePriceOrderChange("highToLow")}
              />
              <span>High to Low</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Is New:</label>
          <div className="flex items-center space-x-1">
            <input
              type="checkbox"
              checked={isNew}
              onChange={handleIsNewChange}
            />
            <span>New Items</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
