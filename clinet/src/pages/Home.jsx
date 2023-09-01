import React from "react";
import LatestProducts from "../components/LatestProducts";
import OldProducts from "../components/OldProducts";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section className="xl:px-5 2xl:px-0  px-5 mt-7">
      <Hero />
      <LatestProducts />
      <OldProducts />
    </section>
  );
};

export default Home;
