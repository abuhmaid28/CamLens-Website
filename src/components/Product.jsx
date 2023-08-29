import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Product = ({ product }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        className="group grad w-full h-96 rounded-lg overflow-hidden relative"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {product.attributes.isNew && (
          <div className="absolute bg-accent text-primary text-xs font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        )}

        <div className="w-full h-52 flex items-center justify-center relative">
          <motion.img
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            className="w-40 h-40 group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt="Product-img"
          />
        </div>

        <div className="px-6 pb-8 flex flex-col">
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          <div className="text-sm mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>

          {product.attributes.isNew ? (
            <p className="text-lg text-accent">$ {product.attributes.price}</p>
          ) : (
            <p className="text-lg text-accent">
              $
              {Math.round(
                product.attributes.price - product.attributes.price * 0.3
              )}
              <span className="line-through text-sm ms-2">
                $ {product.attributes.price}
              </span>
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default Product;
