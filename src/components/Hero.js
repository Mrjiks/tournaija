import React from "react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>Beautiful Places to Explore In Nigeria</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem
          dicta.
        </p>
        <a href='#tours' className='btn hero-btn'>
          explore today!
        </a>
      </div>
    </section>
  );
};

export default Hero;
