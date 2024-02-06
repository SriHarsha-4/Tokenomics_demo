import React from 'react';
import Intro from '../components/Intro/Intro';
import WhatIs from '../components/WhatIs/WhatIs';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Services from '../components/Services/Services';
import NavBar from '../components/NavBar/NavBar'; 
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <WhatIs/> 
      <ChooseUs/> 
      <Services/>
      <Footer/>
    </div>
  );
}

export default Home;
