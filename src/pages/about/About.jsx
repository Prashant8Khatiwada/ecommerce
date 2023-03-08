import React from "react";
import HeroSection from "../../components/herosection/HeroSection";

function about() {
  const Data = {
    name: "Prashant's Ecommerce"
  }
  
    return <HeroSection propsData = {Data} />;
}

export default about;
