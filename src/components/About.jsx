import { BsFacebook, BsTwitter, BsInstagram, BsSpotify } from "react-icons/bs";
import AvatarPic from "../assets/avatar.png";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-around items-center bg-gray-100 text-gray-800 p-5 lg:p-10 space-y-5 lg:space-y-0">
      <div className="flex flex-col items-start w-full lg:w-1/3">
        <p className="text-3xl lg:text-4xl mb-3 lg:mb-5 text-indigo-600">
          👋 I'm
        </p>
        <h1 className="text-6xl lg:text-6xl font-bold">Jetnik Syla</h1>
        <hr className="my-3 lg:my-4 border-t-2 border-indigo-300 w-full h-12" />
        <p className="text-base lg:text-lg leading-relaxed">
          Innovative full-stack web developer with a background in music,
          currently honing my skills at Columbia Engineering Bootcamp.
          Proficient in JavaScript, React, and Node.js, I excel in proactive
          leadership, clear communication, and meeting challenges head-on. My
          technical expertise and creative approach make me a valuable asset to
          any development team.
        </p>
      </div>
      <div className="flex justify-center w-full lg:w-1/3">
        <img
          src={AvatarPic}
          alt="Jetnik Syla"
          className="rounded-full shadow-lg border-4 border-indigo-300"
          style={{ width: "280px", height: "280px" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3 lg:items-start">
        <p className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-indigo-600">
          About Me
        </p>
        <p className="text-base lg:text-lg mb-3 lg:mb-4 text-center lg:text-left">
          Elevating your digital experience with cutting-edge software
          solutions.
        </p>
        <button className="px-8 lg:px-10 py-2 mb-3 lg:mb-3 rounded-full text-base lg:text-lg shadow-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-300">
          Show More...
        </button>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <BsFacebook
            size={30}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer"
          />
          <BsTwitter
            size={30}
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
          />
          <BsInstagram
            size={30}
            className="text-pink-600 hover:text-pink-800 transition-colors duration-300 cursor-pointer"
          />
          <BsSpotify
            size={30}
            className="text-green-600 hover:text-green-800 transition-colors duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
