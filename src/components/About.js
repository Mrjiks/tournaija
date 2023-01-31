import React from "react";
import about from "../images/about.webp";
import Title from "./Title";

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={about} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>Tour Naija</h3>
          <p>
            Nigeria is a country with diverse cultures, rich history and breathtaking scenic beauty.
            It is a land of incredible natural resources and stunning landscapes that are sure to
            leave you in awe. From stunning beaches, to stunning waterfalls and stunning wildlife
            parks, Nigeria has something to offer every tourist.
          </p>
          <p>
            Tour Naija helps you explore these immense richness of the African's biggest country.
          </p>
          <a href='#' className='btn'>
            Try our Service Today!
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
