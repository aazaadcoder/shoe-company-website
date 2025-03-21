import React from "react";
import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  return (
    <section 
    id="services" 
    className="max-container flex max-lg:flex-wrap  justify-center gap-9 px-10 py-16 "
    >
      {services.map((service) => (
        <div 
        key={service.label}
        
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
