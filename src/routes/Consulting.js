import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import ConsultHero from '../components/ConsultHero/ConsultHero';
import ConsultBenifits from '../components/ConsultBenifits/ConsultBenifits';
import ConsultAreas from '../components/ConsultAreas/ConsultAreas';

const Consulting = () => {
  return (
    <section>
      <NavBar/>  
      <ConsultHero/> 
      <ConsultBenifits/>
      <ConsultAreas/>
      <Footer/>
    </section>
  );
}

export default Consulting;
