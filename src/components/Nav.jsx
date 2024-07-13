import React from "react";
import { headerLogo } from "../assets/images";

import { socialMedia } from "../constants";

const Nav = () => {
  return (
    <>
      {" "}
      <div className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-end mr-8 items-center gap-16 max-lg:hidden">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </ul>
          {/* <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" width={25} herght={25} />
          </div> */}
        </nav>
      </div>
    </>
  );
};

export default Nav;
