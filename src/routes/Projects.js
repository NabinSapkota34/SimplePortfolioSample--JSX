import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Pricingcard from '../components/Pricingcard';
import Work from '../components/Work';

const Projects = () => {
  return (
    <>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work />
      <Pricingcard />
      <Footer />
    </>
  )
}

export default Projects