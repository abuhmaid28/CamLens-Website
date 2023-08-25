import React from "react";
// link
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group grad w-full h-96 rounded-lg overflow-hidden relative">
        {/* badge */}
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-xs font-extrabold uppercase top-4  right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}

        {/* Image */}
        <div className="w-full h-52 flex items-center justify-center relative">
          <img
            className="w-40 h-40 group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt="Product-img"
          />
        </div>
        {/* text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* category title */}
          <div className="text-sm mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* category price */}
          <div className="text-lg text-accent">${product.attributes.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
