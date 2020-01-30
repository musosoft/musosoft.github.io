import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Header from '../../Components/Header/Header';
import AboutMe from './Sections/AboutMe';
import WhatIDo from './Sections/WhatIDo';
import Portfolio from './Sections/Portfolio';
import Contact from './Sections/Contact';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => (
  <>
    <Navbar />
    <Header />
    <div className="main main-raised">
      <div className="profile-content">
        <div className="container">
          <AboutMe />
          <WhatIDo />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default LandingPage;
