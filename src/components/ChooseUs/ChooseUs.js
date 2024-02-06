import React from "react";
import Image from "./Tokenomics.png";
import "./ChooseUs.css"

const ChooseUs = () => {
  return (
    <section className="heightOf">
      <div className="text-black text-4xl font-semibold py-20 text-center">
        <span>Why Choose Us?</span>
      </div>
      <div className="flex justify-evenly px-60">
        <div>
          <img src={Image} alt="sdsf Sfsd df" />
        </div>

        <div className="text-black px-20 text-xl">
          <p >
            We understand that a successful tokenomics model is critical for the
            long-term success. Our team is specialized in designing tokenomics
            models that are sustainable and effective. 
          </p>

          <p className="pt-10">
            We will create a customized tokenomics model that will help you
            achieve your project goals. Our goal is to ensure that your token
            economy benefits both you and your users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
