import React from "react";
import { logoImg } from "../../assets";
const Logo = ({ name }) => {
  return (
    <h2 className="flex items-center gap-2">
      <img
        src={logoImg}
        className="h-[50px] w-[50px] border border-gray-400 p-1 rounded-full"
        alt="eslam saadat"
      />
      <span className="uppercase text-base tracking-wide text-secondaryColor font-medium">
        {name}
      </span>
    </h2>
  );
};

export default Logo;
