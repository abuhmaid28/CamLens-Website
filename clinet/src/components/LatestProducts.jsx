import React from "react";
import ProductSlider from "./ProductSlider";
import useFetch from "../hooks/useFetch";

const LatestProducts = () => {
  // Fetch the latest products using the useFetch hook
  const { data } = useFetch("/products?populate=*&filters[isNew]=true");

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        {/* Section title */}
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      {/* Display the latest products using the ProductSlider component */}
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
