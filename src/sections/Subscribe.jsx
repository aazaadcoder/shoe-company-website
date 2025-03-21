import React from "react";
import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="max-container flex  justify-between  items-center max-lg:flex-col max-lg:gap-5"
    >
      <h1 className="text-4xl lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletters.
      </h1>

      <div className="p-[10px] border-2 border-slate-400 rounded-full flex flex-1  gap-5 lg:max-w-[50%] w-full justify-between items-center max-sm:flex-col max-sm:items-center  max-sm:border-0 max-lg:mt-5 ">
        <input
          type="text"
          placeholder="example@gmail.com"
          className="ml-5 max-sm:border-2 max-sm:border-slate-400 max-sm:p-5 max-sm:w-full max-sm:rounded-full focus:outline-none max-sm:ml-0 "
          name=""
          id=""
        />

        <div className="max-sm:w-full">
        <Button label="Sign Up" width="full" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
