import React from "react";
import HeroSection from "../../components/herosection/HeroSection";
import Service from "../../components/services/Service";

function Home() {
  const Data = {
    name: "Prashant's Store",
  };

  return (
    <>
      <HeroSection propsData={Data} />
      <Service/>
      
    </>
  );
}

export default Home;
