import React, { useState, useEffect } from "react";
// useLocation hook
import { useLocation } from "react-router-dom";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import ProductFilters from "../components/ProductFilters";
import { calculatePrice } from "../components/PriceUtils";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  // get products based on search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  const [title, setTitle] = useState(null);

  const [sortBy, setSortBy] = useState("default");
  const [priceOrder, setPriceOrder] = useState("default");
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  let filteredData = [...data];

  if (sortBy === "aToZ") {
    filteredData.sort((a, b) =>
      a.attributes.title.localeCompare(b.attributes.title)
    );
  } else if (sortBy === "zToA") {
    filteredData.sort((a, b) =>
      b.attributes.title.localeCompare(a.attributes.title)
    );
  }

  if (priceOrder === "lowToHigh") {
    filteredData.sort(
      (a, b) =>
        calculatePrice(
          a.attributes.title,
          a.attributes.categories.data[0].attributes.title,
          a.attributes.price
        ) -
        calculatePrice(
          b.attributes.title,
          b.attributes.categories.data[0].attributes.title,
          b.attributes.price
        )
    );
  } else if (priceOrder === "highToLow") {
    filteredData.sort(
      (a, b) =>
        calculatePrice(
          b.attributes.title,
          b.attributes.categories.data[0].attributes.title,
          b.attributes.price
        ) -
        calculatePrice(
          a.attributes.title,
          a.attributes.categories.data[0].attributes.title,
          a.attributes.price
        )
    );
  }

  if (isNew) {
    filteredData = filteredData.filter((product) => product.attributes.isNew);
  }

  return (
    <div className="mb-8 pt-40 lg:pt-5 xl:pt-0 ">
      <div className="container mx-auto">
        {/* title */}
        {searchTerm && (
          <div className="py-3 text-xl uppercase text-center lg:text-left ">
            {data?.length > 0
              ? `${filteredData.length} results for ${searchTerm}`
              : `no result found for ${searchTerm}`}
          </div>
        )}
        <div className="gap-x-8 grid grid-cols-12 ">
          <div
            className={`flex flex-col gap-y-8 ${
              (filteredData && filteredData.length % 4 === 0) ||
              (filteredData && filteredData.length !== 0) ||
              (filteredData && filteredData.length % 3 === 0) ||
              (filteredData &&
                filteredData.length % 5 === 0 &&
                filteredData &&
                filteredData.length > 5) ||
              (filteredData && filteredData.length === 7)
                ? "col-span-2"
                : "col-span-3"
            } `}
          >
            <CategoryNav />
            {/* Filter Controls */}

            <ProductFilters
              sortBy={sortBy}
              setSortBy={setSortBy}
              priceOrder={priceOrder}
              setPriceOrder={setPriceOrder}
              isNew={isNew}
              setIsNew={setIsNew}
            />
          </div>
          <main
            className={`mx-auto w-full ${
              (filteredData && filteredData.length % 4 === 0) ||
              (filteredData && filteredData.length % 3 === 0) ||
              (filteredData && filteredData.length % 5 === 0) ||
              (filteredData && filteredData.length > 5)
                ? "col-span-10"
                : "col-span-9"
            }`}
          >
            {/* Product grid */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ${
                (filteredData && filteredData.length % 4 === 0) ||
                (filteredData && filteredData.length === 7)
                  ? "xl:grid-cols-4"
                  : filteredData && filteredData.length === 2
                  ? "xl:grid-cols-2"
                  : filteredData &&
                    filteredData.length % 4 !== 0 &&
                    filteredData &&
                    filteredData.length % 3 !== 0 &&
                    filteredData &&
                    filteredData.length % 5 !== 0
                  ? "xl:grid-cols-3"
                  : filteredData &&
                    filteredData.length % 5 === 0 &&
                    filteredData &&
                    filteredData.length > 5
                  ? "xl:grid-cols-5"
                  : "xl:grid-cols-3"
              } `}
            >
              {filteredData.map((product) => {
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

export default Search;
