import { useState } from "react";
import { Link } from "react-router-dom";
import { CgTag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

// import { FaBriefcase } from "react-icons/fa"; 
// <FaBriefcase size="1.5em" className="text-indigo-600" /> 

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" bg-gray-100 text-gray-800" style={{fontFamily: 'math'}}>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div className="flex items-center space-x-2 font-serif text-3xl tracking-wider">
          <CgTag size="1.5em" className="text-indigo-600" />
          <Link to="/" className="text-indigo-600">
            Hire Me
          </Link>
        </div>
        <div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(false)}
              size="1.5em"
              className="cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-300 lg:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setToggle(true)}
              size="1.5em"
              className="cursor-pointer text-gray-600 hover:text-indigo-600 transition duration-300 lg:hidden"
            />
          )}
          <div className="hidden lg:flex space-x-2">
            <Link
              to="/"
              className="rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
              to="/resume"
              className="rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>

      {toggle && (
        <div className="font-roboto bg-gray-100 shadow-lg rounded-lg p-5">
          <Link
            to="/about"
            className="block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="/resume"
            className="block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Resume
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
