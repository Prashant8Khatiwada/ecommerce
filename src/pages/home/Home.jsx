import React from "react";
import HeroSection from "../../components/herosection/HeroSection";
import Service from "../../components/services/Service";
import Trusted from "../../components/trusted/Trusted";

function Home() {
  const Data = {
    name: "Prashant's Store",
  };

  return (
    <>
      <HeroSection propsData={Data} />
      <Service/>
      <Trusted/>
    </>
  );
}

export default Home;
