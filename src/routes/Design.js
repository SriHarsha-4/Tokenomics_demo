import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import DesignHero from '../components/DesignHero/DesignHero';
import DesignBenifits from '../components/DesignBenifits/DesignBenifits';
import DesignProcess from '../components/DesignProcess/DesignProcess';

const Solutions = () => {
  return (
    <div>
      <NavBar/> 
      <DesignHero/>
      <DesignBenifits/>
      <DesignProcess/>
      <Footer/>
    </div>
  );
}

export default Solutions;
