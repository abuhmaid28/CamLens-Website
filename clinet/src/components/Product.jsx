import React from "react";
import { Link } from "react-router-dom";
import { calculatePrice } from "./PriceUtils";

const Product = ({ product, showStrikethrough }) => {
  const categoryTitle = product.attributes.categories.data[0].attributes.title;
  const cameraTitle = product.attributes.title;
  const cameraPrice = product.attributes.price;

  // Calculate the discounted price using the calculatePrice function
  const calculatedPrice = calculatePrice(
    cameraTitle,
    categoryTitle,
    cameraPrice
  );

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group grad w-full h-96 rounded-lg overflow-hidden relative">
        {product.attributes.isNew && (
          <div className="absolute bg-accent text-primary text-xs font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        )}

        <div className="w-full h-52 flex items-center justify-center relative">
          <img
            className="w-40 h-40 group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt="Product-img"
          />
        </div>

        <div className="px-6 pb-8 flex flex-col">
          <div className="text-sm text-accent capitalize mb-2">
            {categoryTitle}
          </div>
          <div className="text-sm mb-4 lg:mb-9">
            {cameraTitle.substring(0, 35)}...
          </div>
          <p className="text-lg text-accent">
            {/* Display calculated price */}${calculatedPrice}
            {/* Display original price with a strikethrough if requested */}
            {showStrikethrough && (
              <span className="line-through text-sm ms-2">${cameraPrice}</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
