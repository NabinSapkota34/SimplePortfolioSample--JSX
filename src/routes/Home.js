import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import Pricingcard from '../components/Pricingcard';
import WorkCard from '../components/WorkCard';
const Home = () => {
  return (
    <>
    <Navbar />
    <Heroimg />
    <WorkCard />
    <Pricingcard />
    <Footer />
    </>
  )
}

export default Home