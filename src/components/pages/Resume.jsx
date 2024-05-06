import React from "react";
import ResumeImage from "/src/assets/Resume.png";

const Resume = () => {
  return (
    <div className="font-roboto mx-auto my-10 max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg text-center">
      <h1 className=" text-4xl font-bold text-indigo-600 mb-6">Resume</h1>
      <img
        src={ResumeImage}
        alt="Resume"
        className="max-w-full h-auto border border-gray-300 rounded shadow"
      />
      <a
        href={ResumeImage}
        download
        className="mt-6 inline-block bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
