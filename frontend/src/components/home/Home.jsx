import React from 'react';
import Hero from './hero/Hero';
import AboutCard from '../about/AboutCard';
import Test from './testimonial/Test';
import Footer from '../common/footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Test />
      <Footer />
    </>
  )
}

export default Home