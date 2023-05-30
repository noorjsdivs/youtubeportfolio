import React from "react";
import { FaLinkedinIn, FaReact, FaGithub, FaTelegram } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
const Media = ({ show ,text}) => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-6 xl:gap-16">
      <div>
        {text && (
          <h3 className="mb-4 text-base uppercase font-titleFont">
            {text}
          </h3>
        )}
        <div className="flex items-center gap-6">
          <span className="mediaIcon">
            <FaLinkedinIn />
          </span>
          <span className="mediaIcon">
            <FaGithub />
          </span>
          <span className="mediaIcon">
            <FaTelegram />
          </span>
        </div>
      </div>
      {show && (
        <div>
          <h3 className="mb-4 text-base uppercase font-titleFont">
            best skill on
          </h3>
          <div className="flex items-center gap-6">
            <span className="mediaIcon">
              <FaReact />
            </span>
            <span className="mediaIcon">
              <SiNextdotjs />
            </span>
            <span className="mediaIcon">
              <SiTypescript />
            </span>
            <span className="mediaIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
