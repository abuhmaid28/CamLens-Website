import React, { useContext, useState } from "react";
import Logo from "../img/logo.webp";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import CategoryNavMobile from "./CategoryNavMobile";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-7 xl:px-5 2xl:px-0 px-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-x-10 mb-4 lg:mb-0">
          {/* Menu (mobile) */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          {/* Category navigation (mobile) */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* Logo */}
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Website_logo"
              className="hover:scale-105 transition-all duration-300"
            />
          </Link>
          {/* Search Form (desktop) */}
          <div className="hidden flex-1 lg:flex">
            <SearchForm />
          </div>
          {/* Phone number and Cart */}
          <div className="flex items-center gap-x-3">
            {/* Phone number (desktop) */}
            <div className="hidden lg:flex uppercase w-full">
              need help? +20 1010 8926 01
            </div>
            {/* Cart icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              {/* Cart item count */}
              <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-xs flex justify-center items-center font-bold -tracking-widest">
                {itemsAmount}
              </div>
            </div>
            {/* Cart (drawer) */}
            <div
              className={`
              ${isOpen ? "right-0" : "-right-full"}
              bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>
        {/* Search Form (mobile) */}
        <div className="lg:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
