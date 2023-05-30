import React from "react";
import { Link } from "react-scroll";
const Navlinks = ({ item: { title, path },handleNav }) => {
  return (
    <li className="text-gray-400 tracking-wide text-base font-normal relative cursor-pointer duration-300 hover:text-secondaryColor capitalize after:duration-300 after:content-[''] after:absolute after:-bottom-1 after:w-0 after:h-[1px] after:left-0 after:bg-secondaryColor hover:after:w-full">
      <Link
        activeClass="active"
        to={path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={handleNav}
      >
        {title}
      </Link>
    </li>
  );
};

export default Navlinks;
