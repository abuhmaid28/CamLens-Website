import React from "react";
// useFetch
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
const CategoryNav = () => {
  const { data } = useFetch("/categories");
  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-72 h-[500px] rounded-lg overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className="uppercase"
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
