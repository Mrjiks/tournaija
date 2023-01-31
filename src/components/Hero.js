import React from "react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>Beautiful Places to Explore In Nigeria</h1>
        <p>
          Nigeria is a country with diverse cultures, rich history and breathtaking scenic beauty.
          It is a land of incredible natural resources and stunning landscapes that are sure to
          leave you in awe.
        </p>
        <a href='#tours' className='btn hero-btn'>
          explore today!
        </a>
      </div>
    </section>
  );
};

export default Hero;
