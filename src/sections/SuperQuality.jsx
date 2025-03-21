import React from "react";
import Button from "../Components/Button";
import {  shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="superquality" className="max-container flex justify-between items-center max-lg:flex-col gap-10 ">

        <div className="flex  flex-col">
          <h1 className="text-4xl font-bold font-palanquin capitalize lg:max-w-lg">
            We Provide You <span className="text-coral-red">super Quality</span> Shoes</h1>

          <p className="text-slate-gray lg:max-w-xl font-montserrat text-lg leading-7 mt-4">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>

          <p className="text-lg leading-7 mt-6 text-slate-gray lg:max-w-lg font-montserrat">
            Our dedication to detail and excellence ensures your satisfaction
          </p>

          <div className="mt-11">
          <Button
          label ="View"
          />
          </div>
        </div>
        <div>
          <img 
          src={shoe8} alt="" />
        </div>

    </section>
  );
};

export default SuperQuality;
