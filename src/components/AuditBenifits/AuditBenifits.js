import React from "react";
import Image from "../../assets/tokenomics-services.png";

const AuditBenifits = () => {
  return (
    <section className="h-lvh">
      <div className="text-black text-4xl font-semibold py-28 text-center">
        <span>Tokenomics Audit</span>
      </div>
      <div className="flex justify-evenly px-40">
        <img
          className="h-auto w-auto hover:rotate-12"
          src={Image}
          alt="arwestaert"
        />

        <div className="text-gray-800 px-20 w-2/4">
          Our tokenomics audit service takes a deep dive into your existing
          tokenomics model, assessing its strengths and weaknesses, and
          identifying opportunities for optimization. Our team of experts will
          analyze your model’s token supply, distribution, utility, and
          incentive mechanisms, and provide detailed recommendations to ensure
          long-term stability and growth.
          <p className="mt-10 font-semibold">Key Benifits: </p>
          <ul>
            <li>
              <span className="font-semibold">-</span> Comprehensive review of
              your existing tokenomics model
            </li>
            <li>
              <span className="font-semibold">-</span> Identification of
              strengths, weaknesses, and opportunities for improvement
            </li>
            <li>
              <span className="font-semibold">-</span> Expert recommendations
              for optimization and enhancement
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AuditBenifits;
