import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import CartProvider to wrap the App component with cart context.
import CartProvider from "./context/CartContext";

// Create a root element using ReactDOM.createRoot and locate it by its ID.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the entire application within a React.StrictMode.
root.render(
  <React.StrictMode>
    {/* Wrap the App component with CartProvider to provide cart context */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
