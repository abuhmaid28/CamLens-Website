import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import ProductFilters from "../components/ProductFilters";
import { calculatePrice } from "../components/PriceUtils";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  // Get products based on the search term
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

  // Function to filter and sort products based on user selections
  const filterAndSortProducts = () => {
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

    return filteredData;
  };

  const filteredData = filterAndSortProducts();

  return (
    <div className="mb-16 pt-40 lg:pt-0 px-5">
      <div className="container mx-auto">
        {searchTerm && (
          <div className="py-4 text-xl uppercase text-center md:text-left ">
            {data?.length > 0
              ? `${filteredData.length} results for ${searchTerm}`
              : `no result found for ${searchTerm}`}
          </div>
        )}
        <div className="sm:gap-x-8 grid grid-cols-12 ">
          <div
            className={`flex flex-col gap-y-8 ${
              (filteredData &&
                (filteredData.length % 4 === 0 || filteredData.length === 7)) ||
              (filteredData.length % 5 === 0 && filteredData.length > 5)
                ? "xl:col-span-2 sm:col-span-3 col-span-12"
                : "sm:col-span-3 col-span-12"
            } `}
          >
            <CategoryNav hide={"ProductsShow"} />
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
            className={`flex flex-col gap-y-8 ${
              (filteredData &&
                (filteredData.length % 4 === 0 || filteredData.length === 7)) ||
              (filteredData.length % 5 === 0 && filteredData.length > 5)
                ? "xl:col-span-10 sm:col-span-9 col-span-12"
                : "sm:col-span-9 col-span-12"
            }`}
          >
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ${
                filteredData &&
                (filteredData.length % 4 === 0 || filteredData.length === 7)
                  ? "xl:grid-cols-4"
                  : filteredData.length === 2
                  ? "xl:grid-cols-2"
                  : filteredData.length % 5 === 0 && filteredData.length > 5
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
