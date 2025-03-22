import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavExpanded((prevState) => !prevState);
  };

  return (
    <header className="lg:padding-x  fixed z-20 w-full border-b-2  shadow-lg bg-white min-h-[70px] flex items-center max-lg:px-5  ">
      <nav
        className={`flex justify-between items-center max-container w-full  max-lg:flex-col ease-in duration-500 transition-all `}
      >
        <div
          className={`flex max-lg:w-full justify-between max-lg:py-7 max-lg:px-5 `}
        >
          <div>
            <a href="/">
              <img src={headerLogo} alt="Logo" className="w-[130px] h-[29px]" />
            </a>
          </div>
          <div className={`hidden max-lg:block `}>
            <img
              src={hamburger}
              alt="hambutger icon"
              width={25}
              height={25}
              onClick={handleHamburgerClick}
            />
          </div>
        </div>

        <ul
          className={`flex-1 flex justify-center items-center lg:gap-16    w-full  max-lg:flex-col max-lg:my-6 max-lg:items-start max-lg:px-5 max-lg:mt-0 
            ${isNavExpanded ? "max-lg:max-h-[500px] overflow-hidden" : "max-lg:max-h-0 overflow-hidden"}   
            ease-in duration-500 transition-all`}
        >
          {navLinks.map((link) => (
            
              <li
                key={link.label}
                href={link.href}
                className="font-montserrat leading-normal text-lg text-black duration-500 hover:text-slate-gray w-fit max-lg:mt-7"
              >
                <a href="">
                {link.label}
                </a>
              </li>
            
            
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
