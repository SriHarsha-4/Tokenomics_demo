import React from "react";
import Image from "../../assets/tokenomics-services.png";

const DesignBenifits = () => {
  return (
    <section className="h-lvh">
      <div className="text-black text-4xl font-semibold py-28 text-center">
        <span>Custom Tokenomics Design</span>
      </div>
      <div className="flex justify-evenly px-40">
        <img
          className="h-auto w-auto hover:rotate-12"
          src={Image}
          alt="arwestaert"
        />

        <div className="text-gray-800 px-20 w-2/4">
          Our custom tokenomics design service focuses on crafting a
          comprehensive tokenomics model that is perfectly suited to your
          project’s unique requirements. Our experienced team will work closely
          with you to understand your project’s objectives and develop a
          customized solution that balances token supply, distribution, utility,
          and incentives, all while validating the model using advanced economy
          simulations.

          <p className="mt-10">Key Benifits: </p> 
          <ul>
            <li><span className="font-semibold">-</span>{" "} In-depth project analysis and consultation</li>
            <li><span className="font-semibold">-</span>{" "} Customized tokenomics model design</li>
            <li><span className="font-semibold">-</span>{" "} Advanced economy simulations for validation</li>
            <li><span className="font-semibold">-</span>{" "} Ongoing support and optimization</li>
          </ul> 

        </div>
      </div>
    </section>
  );
};

export default DesignBenifits;
