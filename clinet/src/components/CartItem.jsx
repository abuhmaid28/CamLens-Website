import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "./Qty";
import { CartContext } from "../context/CartContext";
import { calculatePrice } from "./PriceUtils";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  if (!item || !item.attributes) {
    return null;
  }

  const categoryTitle =
    item.attributes?.categories?.data?.[0]?.attributes?.title;
  const cameraTitle = item.attributes?.title;
  const cameraPrice = item.attributes?.price;

  const calculatedPrice = calculatePrice(
    cameraTitle,
    categoryTitle,
    cameraPrice
  );

  return (
    <div className="flex gap-x-8">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px] ">
        <img
          src={`http://localhost:1337${item.attributes?.image?.data?.attributes?.url}`}
          alt="cart_item"
        />
      </Link>
      <div className="flex-1">
        {/* title & delete icon */}
        <div className="flex gap-x-4 mb-3 ">
          <Link to={`product/${item.id}`}>{cameraTitle}</Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-2xl hover:text-accent transition-all "
          >
            <IoClose />
          </div>
        </div>
        <div className=" flex items-center gap-x-12 ">
          {/* quantity */}
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl">
            {/* Display the calculated price */}${" "}
            {calculatedPrice * item.amount}
          </div>
        </div>
        {/* price */}
        <div>
          <span className="text-accent">
            {/* Display the original price per piece */}$ {cameraPrice} per
            piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
