import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleInput, handleSelect } = useContext(CartContext);

  // Create an array for quantity options from 1 to 10
  const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="flex gap-x-6 items-center text-primary">
      {item.amount < 10 ? (
        <select
          onChange={(e) => handleSelect(e, item.id)}
          value={item.amount}
          className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary"
        >
          {quantityOptions.map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
          <option value="10">+10</option>
        </select>
      ) : (
        <input
          onBlur={(e) => handleInput(e, item.id)}
          className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-28 outline-accent"
          type="text"
          placeholder={`${item.amount}`}
        />
      )}
    </div>
  );
};

export default Qty;
