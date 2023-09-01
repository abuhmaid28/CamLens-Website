import React from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  // Fetch category data using the useFetch hook
  const { data } = useFetch("/categories");

  // Function to close the mobile navigation
  const handleCloseNav = () => {
    setCatNavMobile(false);
  };

  return (
    <div className="w-full h-full bg-primary p-8">
      {/* Close icon */}
      <div
        onClick={handleCloseNav}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => (
          <Link
            to={`/products/${category.id}`}
            onClick={handleCloseNav} // Call the handleCloseNav function on link click
            className={`uppercase font-medium transition-all duration-200 hover:translate-x-2 ${
              window.location.pathname === `/products/${category.id}`
                ? "hover:text-accent text-accent"
                : "hover:text-accent"
            }`}
            key={category.id}
          >
            {category.attributes.title} cameras
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
