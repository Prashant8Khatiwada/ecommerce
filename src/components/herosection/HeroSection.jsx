import React from "react";
import { NavLink } from "react-router-dom";
import "./herosection.css" 
import HeroImage from "../../assests/hero.jpg"
function HeroSection({propsData}) {

  const name = [propsData.name]
  
  return (
    <section>
    <div className="container hero-container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <h3 className="intro-data">Welcome to </h3>
          <h1>{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            tenetur nisi praesentium cum dolorem cumque itaque doloribus soluta
            officiis accusantium quod sint id, impedit debitis nam quidem
            eligendi dignissimos! Alias commodi nesciunt quibusdam repellat at
            error laborum maiores nemo! Vitae illum porro facilis placeat, atque
            modi libero minima sunt ad?
          </p>
          <NavLink>
            <button className="btn">Shop Now</button>
          </NavLink>
        </div>
        <div className="hero-section-image">
            <figure>
                <img src={HeroImage} alt="hero-section-img" />
            </figure>
        </div>
      </div>
    </div>
    </section>
  );
}

export default HeroSection;
