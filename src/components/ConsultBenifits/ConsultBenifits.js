import React from "react";
import Image from "../../assets/tokenomics-services.png";

const ConsultBenifits = () => {
  return (
    <section className="pb-20">
      <div className="text-black text-4xl font-semibold py-20 text-center">
        <span>Tokenomics Consultation</span>
      </div>
      <div className="flex justify-evenly px-40">
        <img
          className="h-auto w-auto hover:rotate-12"
          src={Image}
          alt="arwestaert"
        />

        <div className="text-gray-800 px-20 w-2/4">
          Our tokenomics consulting services are designed to offer personalized
          guidance on best practices, industry trends, and tokenomics strategies
          tailored to your project’s unique needs. We work closely with you to
          analyze your project’s goals, challenges, and opportunities, and
          develop a clear roadmap to success.
        </div>
      </div>
    </section>
  );
};

export default ConsultBenifits;
