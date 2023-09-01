import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setAnimating] = useState(false);

  const handelSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      // if input is empty animation to true
      setAnimating(true);

      // Reset animation after a brief delay
      setTimeout(() => {
        setAnimating(false);
      }, 1000);
    }
  };

  // Listen for changes in searchTerm and trigger search when not empty
  useEffect(() => {
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
    }
  }, [searchTerm, navigate]);

  return (
    <form
      onSubmit={handelSubmit}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } relative w-full`}
    >
      <input
        className="input"
        type="text"
        placeholder="search for a product ..."
        onChange={handelSearchInput}
      />
      <button className="btn btn-accent absolute top-0 right-0 rounded-l-none sm:px-10 px-5">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
