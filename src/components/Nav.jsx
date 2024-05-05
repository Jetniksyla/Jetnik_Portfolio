import { CgTag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gray-800 text-gray-300">
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div className="flex items-center space-x-2 font-serif text-3xl tracking-wider">
          <CgTag size="1.5em" />
          <span>PORTFOLIO</span>
        </div>
        <div>
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(false)}
              size="1.5em"
              className="cursor-pointer hover:text-white transition duration-300 lg:hidden"
            />
          ) : (
            <HiMenuAlt1 onClick={() => setToggle(true)}
              size="1.5em"
              className="cursor-pointer hover:text-white transition duration-300 lg:hidden"
            />
          )}
          <div className="hidden lg:flex space-x-2">
            <a href="#" className="rounded-full px-5 py-2 text-xl cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">About</a>
            <a href="#" className="rounded-full px-5 py-2 text-xl cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">Portfolio</a>
            <a href="#" className="rounded-full px-5 py-2 text-xl cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">Contact</a>
            <a href="#" className="rounded-full px-5 py-2 text-xl cursor-pointer hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">Resume</a>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {toggle && (
        <div className="bg-gray-800 shadow-lg rounded-lg p-5">
          <a href="#" className="block px-5 py-2 text-xl hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">About</a>
          <a href="#" className="block px-5 py-2 text-xl hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">Portfolio</a>
          <a href="#" className="block px-5 py-2 text-xl hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">Contact</a>
          <a href="#" className="block px-5 py-2 text-xl hover:text-white hover:bg-gray-700 transition duration-300 ease-in-out">Resume</a>
        </div>
      )}
    </div>
  );
};

export default Nav;
