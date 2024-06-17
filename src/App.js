import React, { useEffect } from 'react';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedServices from './FeaturedServices';
import About from './About';
import Clients from './Clients';
import Features from './Features';
import FeaturesDetails from './FeaturesDetails';
import Services from './Services';
import Footer from './Footer';
import SwiperComponent from './SwiperComponent'; // Adjust the path as per your project structure
import './App.css';


const App = () => {
  useEffect(() => {
    AOS.init();
    GLightbox();
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedServices />
      <About />
      <Clients />
      <Features />
      <FeaturesDetails />
      <Services />
      <Footer />
      <div className="App">
      <h1>My Swiper Component</h1>
      <SwiperComponent />
      </div>
    </>
  );

    
};

export default App;
