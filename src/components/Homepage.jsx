import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsSpotify,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { SiHeroku } from "react-icons/si";
import AvatarPic from "../assets/avatar.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Homepage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section className="font-roboto flex flex-col flex-wrap lg:flex-row justify-center items-center from-blue-200 to-indigo-100 text-gray-800 p-5 lg:p-20 min-h-screen space-y-10 lg:space-x-10">
        <div className="flex flex-col items-center w-full lg:w-1/2 space-y-5">
          <p className="text-2xl lg:text-4xl font-semibold text-indigo-700">
            👋 I'm
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-800">
            Jetnik Syla
          </h1>
          <hr className="border-t-4 border-indigo-300 w-full" />
          <p className="text-lg lg:text-xl leading-relaxed text-center">
            Innovative full-stack web developer with a background in music,
            honing skills at Columbia Engineering Bootcamp. Known for proactive
            leadership and creative problem-solving in software development.
          </p>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img
            src={AvatarPic}
            alt="Jetnik Syla"
            className="rounded-full shadow-xl border-8 border-white"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2 space-y-5">
          <p className="text-3xl lg:text-4xl font-semibold text-indigo-700">
            About Me
          </p>
          <p className="text-lg lg:text-xl text-center">
            Elevating digital experiences with cutting-edge solutions and a
            creative approach.
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-10 py-3 rounded-lg text-lg font-medium shadow-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
          >
            Show More...
          </button>
          <div className="flex space-x-4">
            <BsGithub
              size={35}
              className="text-gray-600 hover:text-black cursor-pointer transition-all duration-300 transform hover:scale-110"
            />
            <BsLinkedin
              size={35}
              className="text-blue-700 hover:text-blue-900 cursor-pointer transition-all duration-300 transform hover:scale-110"
            />
            <SiHeroku
              size={35}
              className="text-purple-600 hover:text-purple-800 cursor-pointer transition-all duration-300 transform hover:scale-110"
            />
            {showMore && (
              <>
                <BsFacebook
                  size={35}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer transition-all duration-300 transform hover:scale-110"
                />
                <BsInstagram
                  size={35}
                  className="text-pink-600 hover:text-pink-800 cursor-pointer transition-all duration-300 transform hover:scale-110"
                />
                <BsSpotify
                  size={35}
                  className="text-green-600 hover:text-green-800 cursor-pointer transition-all duration-300 transform hover:scale-110"
                />
                <BsTwitter
                  size={35}
                  className="text-blue-400 hover:text-blue-600 cursor-pointer transition-all duration-300 transform hover:scale-110"
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
