import React from "react";
import DesignHero from "../components/DesignHero/DesignHero";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import AuditBenifits from "../components/AuditBenifits/AuditBenifits"
import AuditProcess from "../components/AuditProcess/AuditProcess";

const Audit = () => {
  return (
    <section>
      <NavBar />
      <DesignHero />
      <AuditBenifits/>
      <AuditProcess/>
      <Footer />
    </section>
  );
};

export default Audit;
