import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, products, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <section id="footer" className="flex flex-col max-container gap-20 ">
      <div className="flex justify-between gap-20 max-lg:flex-col ">
        <div>
          <div>
            <img 
            src={footerLogo}
            width={150}
            height={31}
            alt="" />
          </div>
          <p className="text-white-400 max-w-lg text-[16px] font-montserrat mt-6">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-5 mt-8">
            {socialMedia.map((social) => (
              <a 
              className=" rounded-full size-12 flex justify-center items-center hover:cursor-pointer bg-white"
              href="/"
              >
                <img src={social.src} alt=""  />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-10 w-full flex-wrap ">
          {footerLinks.map((section) => (
            <div>
              <h1 className="text-white font-montserrat text-2xl font-semibold leading-normal mb-6">
                {section.title}
              </h1>
              <ul>
                {section.links.map((item) => (
                  <li className="text-white mt-3 font-montserrat text-[16px] leading-normal hover:text-base-100 hover:text-slate-gray">
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center max-sm:flex-col">
        <div className="flex gap-2 items-center">
          <img src={copyrightSign} alt="" />
          <p className="text-white-400 text-[16px] font-montserrat">Copyright. All rights reserved.</p>
        </div>

        <p className="text-white-400 text-[16px] font-montserrat">Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
