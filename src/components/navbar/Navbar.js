import React, { useState } from "react";
// Icons
import { navLinksData } from "../../data/data";
import { RxHamburgerMenu } from "react-icons/rx";
// Components
import ResponsiveMenu from "./ResponsiveMenu";
import Navlinks from "./Navlinks";
import Logo  from "../logo/Logo";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="w-full bg-primaryColor sticky z-50 top-0 left-0 right-0 shadow-shadowOne">
      {/* container */}
      <div className="flex justify-between items-center py-2 max-w-screen-xl mx-auto px-3 md:px-8">
        {/* logo */}
        <Logo name='iman'/>
        {/* navlinks */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinksData.map((item) => (
            <Navlinks item={item} key={item.id} />
          ))}
        </ul>
        {/* Hamburger icon */}
        <button className="inline-block md:hidden hover:text-secondaryColor duration-300" onClick={handleNav}>
          <RxHamburgerMenu size={30} />
        </button>
        {/* Mobile menu */}
        <ResponsiveMenu
          nav={nav}
          navLinksData={navLinksData}
          handleNav={handleNav}
        />
      </div>
    </nav>
  );
};

export default Navbar;
