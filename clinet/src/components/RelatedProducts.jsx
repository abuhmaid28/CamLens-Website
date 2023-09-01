import React from "react";
import useFetch from "../hooks/useFetch";
import ProductSlider from "./ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  // Fetch products by category using the useFetch hook
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="h2 mb-6 text-accent xl:text-left text-center">
          Related Products
        </h2>

        {/* Display related products using ProductSlider */}
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
