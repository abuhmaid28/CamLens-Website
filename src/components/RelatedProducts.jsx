import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import ProductSlider from "./ProductSlider";
const RelatedProducts = ({ categoryTitle }) => {
  // get products by category
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );
  return (
    <div className="mb-16 ">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-accent xl:text-left text-center">
          Related Products
        </h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
