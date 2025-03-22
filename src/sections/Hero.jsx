import React, { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1, thumbnailBackground } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [currentBigShoeImage, setCurrentBigShoeImage] = useState(shoes[1]);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen  max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-lg-[72px] max-lg:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-lg mt-6 mb-14 text-slate-gray leading-8 sm:max-w-sm">
          {" "}
          Discover stylish Nike arrivals, quality <br /> comfort, and innovation
          for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-normal items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="text-[16px] text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center bg-primary max-xl:mt-10 z-0`}
      >
        <img
          src={currentBigShoeImage.bigShoe}
          alt="shoe collection"
          className="w-[620px] h-[500px] object-contian z-10 "
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                currentBigShoeImage={currentBigShoeImage}
                setCurrentBigShoeImage={setCurrentBigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
