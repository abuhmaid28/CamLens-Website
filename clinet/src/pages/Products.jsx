import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import { calculatePrice } from "../components/PriceUtils";

const Products = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      // Check if data is not null and has items
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-8">
          <CategoryNav />
          <main className="mx-auto w-full">
            <div className="uppercase text-center lg:text-left text-xl py-3">
              {title} cameras
            </div>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ${
                data && data.length % 2 ? "xl:grid-cols-3" : "xl:grid-cols-4"
              } `}
            >
              {data?.map((product) => {
                const categoryTitle =
                  product.attributes.categories.data[0].attributes.title;
                const cameraTitle = product.attributes.title;
                const cameraPrice = product.attributes.price;

                const calculatedPrice = calculatePrice(
                  cameraTitle,
                  categoryTitle,
                  cameraPrice
                );

                const showStrikethrough = calculatedPrice !== cameraPrice;

                return (
                  <Product
                    key={product.id}
                    product={product}
                    showStrikethrough={showStrikethrough}
                  />
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
