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
import React, { useState } from "react";
import bgImg from "../assets/Bg.png";

const Homepage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div
        className="flex flex-col flex-wrap lg:flex-row justify-center items-center from-blue-200 to-indigo-100 text-gray-800 p-5 lg:p-20 min-h-screen space-y-10 lg:space-x-10"
        style={{
          fontFamily: "math",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center w-full lg:w-1/2 space-y-5">
          <p className="text-2xl lg:text-4xl font-semibold text-indigo-700">
            👋 I'm Jetnik Syla
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
            Full-stack Web Developer
          </h1>
          <hr className="border-t-4 border-indigo-300 w-full" />
          <p className="text-lg lg:text-xl leading-relaxed text-center">
            I bring innovative full-stack solutions to the table, backed by a
            diverse background in music and technology, with skills honed at
            Columbia Engineering Bootcamp. I am recognized for my proactive
            leadership and creative problem-solving abilities.
          </p>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 relative">
          <img
            src={AvatarPic}
            alt="Jetnik Syla"
            className="relative z-10 rounded-full shadow-2xl border-8 border-white"
            style={{ width: "300px", height: "300px", opacity: 0.9 }}
          />
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2 space-y-5">
          <p className="text-3xl lg:text-4xl font-semibold text-indigo-700">
            Let's Connect
          </p>
          <p className="text-lg lg:text-xl text-center">
            Elevate your digital experiences by partnering with me for
            cutting-edge solutions and a uniquely creative approach. approach.
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-10 py-3 rounded-lg text-lg font-medium shadow-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Jetniksyla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub
                size={45}
                className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jetnik-syla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin
                size={45}
                className="text-blue-700 hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
              />
            </a>
            <a
              href="https://search-book-application-dd0c88dd233b.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiHeroku
                size={45}
                className="text-purple-600 hover:text-purple-800 transition-all duration-300 transform hover:scale-110"
              />
            </a>
            {showMore && (
              <>
                <BsFacebook
                  size={45}
                  className="text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-110"
                />
                <BsInstagram
                  size={45}
                  className="text-pink-600 hover:text-pink-800 transition-all duration-300 transform hover:scale-110"
                />
                <BsSpotify
                  size={45}
                  className="text-green-600 hover:text-green-800 transition-all duration-300 transform hover:scale-110"
                />
                <BsTwitter
                  size={45}
                  className="text-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
