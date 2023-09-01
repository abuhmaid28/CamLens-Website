import React from "react";
import ProductSlider from "./ProductSlider";
import useFetch from "../hooks/useFetch";
import { calculatePrice } from "./PriceUtils";

const OldProducts = () => {
  // Fetch all products
  const { data } = useFetch("/products?populate=*&filters[isNew]=false");

  // Filter the data based on your condition
  const filteredData = data.filter((product) => {
    const categoryTitle =
      product.attributes.categories.data[0].attributes.title;
    const cameraTitle = product.attributes.title;
    const cameraPrice = product.attributes.price;

    // Calculate the price for the product
    const calculatedPrice = calculatePrice(
      cameraTitle,
      categoryTitle,
      cameraPrice
    );

    // Exclude products that are isNew and have the same calculatedPrice as cameraPrice
    return !(product.attributes.isNew && calculatedPrice === cameraPrice);
  });

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left text-accent">
          Old Products
        </h2>
      </div>
      <ProductSlider data={filteredData} />
    </div>
  );
};

export default OldProducts;
