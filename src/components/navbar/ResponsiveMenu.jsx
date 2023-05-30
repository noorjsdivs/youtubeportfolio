import React from 'react'
// Icon
import { FaTimes } from "react-icons/fa";
// Components
import Navlinks from './Navlinks';
import Media from '../media/Media';
import Logo from '../logo/Logo';
const ResponsiveMenu = ({nav,handleNav,navLinksData}) => {
  return (
    <div
    className={`flex flex-col gap-5 md:hidden fixed z-50 duration-500 top-0 bg-gray-900 w-3/4 h-screen p-4 ${
      nav ? "left-0" : "-left-full"
    }`}
  >
    <div className="flex justify-between items-center">
      {/* Logo Image */}
      <div>
       <Logo name='iman' />
      </div>
      <button className='hover:text-secondaryColor hover:rotate-[360deg] duration-500' onClick={handleNav}>
        <FaTimes size={30} />
      </button>
    </div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
      soluta perspiciatis molestias enim cum repellat, magnam
      exercitationem distinctio aliquid nam.
    </p>
    <ul className="flex flex-col items-start space-y-5 mb-5">
      {navLinksData.map((item) => (
        <Navlinks item={item} key={item.id} handleNav={handleNav} />
      ))}
    </ul>
    {/* Media */}
    <Media/>
  </div>
  )
}

export default ResponsiveMenu