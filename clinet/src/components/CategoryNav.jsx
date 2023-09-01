import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const CategoryNav = ({ height, hide }) => {
  // Fetch category data using the useFetch hook
  const { data } = useFetch("/categories");

  return (
    <aside
      className={`${
        hide === "ProductsShow" ? "hidden md:flex" : ""
      } xl:flex cursor-auto`}
    >
      <div
        className={`bg-primary flex flex-col w-full rounded-lg overflow-hidden ${
          height > 0 ? `h-[500px]` : `h-96`
        }`}
      >
        {/* Category section header */}
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center lg:text-base text-sm">
          Browse Categories
        </div>
        {/* List of category links */}
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => (
            <Link
              to={`/products/${category.id}`}
              className={`uppercase transition-all duration-200 hover:translate-x-2 ${
                window.location.pathname === `/products/${category.id}`
                  ? "hover:text-accent text-accent" // Applying both classes for an active link
                  : "hover:text-accent"
              }`}
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
