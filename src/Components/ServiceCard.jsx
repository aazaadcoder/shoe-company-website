import React from "react";

const ServiceCard = ({ service }) => {
  return (
<div className="flex flex-1 flex-col px-16 py-10 border-1 shadow-3xl rounded-[20px] w-full  sm:min-w-[350px] ">
      <div className="bg-coral-red rounded-full p-2 size-11 flex justify-center items-center" >
        <img src={service.imgURL} alt={service.label} />
      </div>
      <h1 className="mt-5 font-bold text-3xl font-palanquin leading-normal">{service.label}</h1>
      <p className="mt-3 text-slate-gray font-montserrat">{service.subtext}</p>
    </div>
  );
};

export default ServiceCard;
