import React, { useContext } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  // Access cart-related data and functions from the CartContext
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  // Load the Stripe API using a promise
  const stripePromise = loadStripe(
    "pk_test_51Nih4jJsuIt7aQPp0Um8mRhHUzsyXHLzQvhqwcfMRed1Y0iKBXJVvmWCacXgjVYc99SDdOFzAY3LBchMHm09BK6R00jtppncyX"
  );
  // Handle the payment process
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-[90%] sm:h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-3/4">
        {/* Close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-24 flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2 ">
          {/* Render cart items */}
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* Subtotal & Total */}
      {cart.length >= 1 && (
        <div className="h-1/6 px-6 py-10 flex flex-col">
          {/* SUBTOTAL */}
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>$ {total.toFixed(2)}</div>
            {/* Format the total with two decimal places */}
          </div>
          {/* TOTAL */}
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {total.toFixed(2)}</div>
            {/* Format the total with two decimal places */}
          </div>
        </div>
      )}
      {/* Buttons */}
      <div className="px-6 h-1/6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4 mt-4 sm:mt-0">
            <button
              onClick={clearCart}
              className="btn btn-accent min-w-fit text-xs px-2 sm:px-10 sm:text-sm w-2/5"
            >
              Clear Cart
            </button>
            <button
              onClick={handlePayment}
              className="btn btn-accent min-w-fit text-xs sm:text-sm flex-1 px-2 gap-x-2"
            >
              Checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 left-0 right-0 flex justify-center items-center -z-10 flex-col text-white/30 gap-y-2">
            <div className="text-2xl">Your cart is empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
