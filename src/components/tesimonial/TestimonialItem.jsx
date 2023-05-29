import React from "react";
import { quote } from "../../assets";
import { RiStarFill } from "react-icons/ri";
const TestimonialItem = ({
  item: { name, title, desc, img, jobTitle, date, companyName },
}) => {
  return (
    <div className="grid lg:grid-cols-6 gap-10">
      {/* left */}
      <div className="w-full flex flex-col md:flex-row lg:flex-col lg:justify-center md:items-center lg:items-start text-center md:text-left lg:col-span-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8">
        <div className="mr-5 lg:m-0">
          <img
            className="h-72 md:h-32 lg:h-72 rounded-lg object-cover w-full"
            src={img}
            alt={name}
          />
        </div>
        <div className="mt-3">
          <p className="text-xs uppercase text-secondaryColor tracking-wide">
            {companyName}
          </p>
          <h3 className="text-2xl font-bold capitalize py-1">{name}</h3>
          <p className="text-base tracking-wide text-gray-500 capitalize">
            {jobTitle}
          </p>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:col-span-4">
        <div className="hidden lg:block">
          <img className="w-20 lg:w-32" src={quote} alt="" />
        </div>
        <div className="py-10 px-6 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
          <div className="flex flex-col items-center gap-3 py-6 border-b-2 border-b-gray-900 mb-6">
            <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{date}</p>
            <div className="text-yellow-500 flex gap-1">
              <span className="cursor-pointer">
                <RiStarFill />
              </span>
              <span className="cursor-pointer">
                <RiStarFill />
              </span>
              <span className="cursor-pointer">
                <RiStarFill />
              </span>
              <span className="cursor-pointer">
                <RiStarFill />
              </span>
              <span className="cursor-pointer">
                <RiStarFill />
              </span>
            </div>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
