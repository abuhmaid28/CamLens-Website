import React, { useState, useEffect } from "react";
// useParams hook
import { useParams } from "react-router-dom";
// useFetch
import useFetch from "../hooks/useFetch";
// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
  const { id } = useParams();
  // get products based on category id
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);
  // set the title when the data is fetched
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });
  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-8">
          <CategoryNav />
          <main>
            {/* title */}
            <div className="uppercase text-center lg:text-left text-xl py-3">
              {title} cameras
            </div>
            {/* product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-7 ">
              {data?.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
