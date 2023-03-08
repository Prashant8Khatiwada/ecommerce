import React from "react";
import HeroSection from "../../components/herosection/HeroSection";

function Home() {

const Data = {
  name: "Prashant's Store"
}

  return <HeroSection propsData = {Data} />;
}

export default Home;
