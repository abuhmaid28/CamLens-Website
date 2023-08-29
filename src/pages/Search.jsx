import React from "react";
// useLocation hook
import { useLocation } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  // get products based on search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  console.log(data);
  return (
    <div className="mb-8 pt-40 lg:pt-5 xl:pt-0 ">
      <div className="container mx-auto">
        <div className="flex gap-x-8 ">
          {/* category nav */}
          <CategoryNav />
          <div className="mx-auto w-full">
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left ">
              {data?.length > 0
                ? `${data.length} results for ${searchTerm}`
                : `no result found for ${searchTerm}`}
            </div>
            {/* products grid */}

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ${
                data && data.length % 2 ? "xl:grid-cols-3" : "xl:grid-cols-4"
              } `}
            >
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;