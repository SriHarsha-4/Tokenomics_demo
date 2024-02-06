import React from "react";
import "./Intro.css";
import Scroll from "./Scroll";

const Intro = () => {
  return (
    <section className="h-lvh">
      <div className="px-40 flex mt-36">
        <div className="intro-text text-4xl w-2/3 p-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eos molestias illo aliquid impedit quaerat quasi eaque nobis quod
          perspiciatis quasi eaque nobis quod perspiciatis.
          {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit odit ut excepturi ratione optio eos consequatur dolorem? Assumenda, nesciunt animi. Eaque animi quae est dignissimos iure quis et aperiam consequuntur inventore!</span> */}
        </div>
        <div className="intro-image"></div>
      </div>
      <div className="px-20">
        <Scroll />
      </div>
    </section>
  );
};

export default Intro;
