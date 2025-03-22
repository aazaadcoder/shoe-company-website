import React from "react";
import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 max-sm:mx-auto">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular</span> Products
        </h2>
        <p className="text-slate-gray text-[16px] font-montserrat mt-2">
        Experience top-notch quality and style with our sought-after <br />{" "}
        selections. Discover a world of comfort, design, and value.
      </p>
      </div>

      
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 w-full">
        {products.map((product) => (
          <div key={product.name} >
            <PopularProductCard productDetails={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
