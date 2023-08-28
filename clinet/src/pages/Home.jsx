import React from "react";
import LatestProducts from "../components/LatestProducts";
import BigDeal from "../components/BigDeal";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section>
      <Hero />
      <LatestProducts />
      <BigDeal />
    </section>
  );
};

export default Home;
