import React from "react";
import LatestProducts from "../components/LatestProducts";
import OldProducts from "../components/OldProducts";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section>
      <Hero />
      <LatestProducts />
      <OldProducts />
    </section>
  );
};

export default Home;
