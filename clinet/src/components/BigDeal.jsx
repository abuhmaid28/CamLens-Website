import React from "react";
import ProductSlider from "./ProductSlider";
import useFetch from "../hooks/useFetch";

const LatestProducts = () => {
  // get new products
  const { data } = useFetch("/products?populate=*&filters[isNew]=false");

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Big Deal</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
