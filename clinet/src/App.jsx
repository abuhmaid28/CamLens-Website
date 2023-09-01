import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Import pages and components
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Define the layout component, which wraps the header, outlet, and footer.
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

// Create the router configuration using createBrowserRouter.
const router = createBrowserRouter([
  {
    element: <Layout />, // Use the Layout component as the top-level layout.

    children: [
      { path: "/", element: <Home /> }, // Define routes and their associated components.
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

// Define the main App component, which provides the router to the entire application.
const App = () => {
  return (
    <div>
      <RouterProvider router={router} /> {/* Provide the router to the app */}
    </div>
  );
};

export default App;
