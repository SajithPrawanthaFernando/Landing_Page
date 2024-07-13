import React from "react";
import { copyrightSign } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container p-6">
      <div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col mb-6">
        <div className="items-start">
          <a href="/">
            <img
              src={headerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0 bg-white"
            />
          </a>
        </div>
        <div className="flex items-center gap-5">
          {socialMedia.map((icon) => (
            <div
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              key={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-4 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
