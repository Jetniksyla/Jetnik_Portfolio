import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaLaptop } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { CgTag } from "react-icons/cg";
import {
  FaHome,
  FaUserAlt,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaProjectDiagram,
} from "react-icons/fa";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" bg-gray-100 text-gray-800" style={{ fontFamily: "math" }}>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div className="flex items-center space-x-2 font-serif text-3xl tracking-wider">
          <FaLaptop size="1.5em" className="text-indigo-600" />
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
            <NavLink
              to="/"
              className="rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
              activeClassName="bg-indigo-600 text-white"
            >
              {/* <FaHome className="text-lg" /> */}
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full px-5 py-2 text-xl cursor-pointer text-white bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
                  : "rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
              }
            >
              {/* <FaUserAlt className="text-lg" /> */}
              <span>About</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full px-5 py-2 text-xl cursor-pointer text-white bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
                  : "rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
              }
            >
              {/* <FaProjectDiagram className="text-lg" /> */}
              <span>Projects</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full px-5 py-2 text-xl cursor-pointer text-white bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
                  : "rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
              }
            >
              {/* <FaEnvelopeOpenText className="text-lg" /> */}
              <span>Contact</span>
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "rounded-full px-5 py-2 text-xl cursor-pointer text-white bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
                  : "rounded-full px-5 py-2 text-xl cursor-pointer text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out flex items-center space-x-2"
              }
            >
              {/* <FaFileAlt className="text-lg" /> */}
              <span>Resume</span>
            </NavLink>
          </div>
        </div>
      </div>

      {toggle && (
        <div className="font-roboto bg-gray-100 shadow-lg rounded-lg p-5">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block px-5 py-2 text-xl text-white bg-indigo-600 transition duration-300 ease-in-out"
                : "block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "block px-5 py-2 text-xl text-white bg-indigo-600 transition duration-300 ease-in-out"
                : "block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block px-5 py-2 text-xl text-white bg-indigo-600 transition duration-300 ease-in-out"
                : "block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "block px-5 py-2 text-xl text-white bg-indigo-600 transition duration-300 ease-in-out"
                : "block px-5 py-2 text-xl text-gray-800 hover:text-white hover:bg-indigo-600 transition duration-300 ease-in-out"
            }
          >
            Resume
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
