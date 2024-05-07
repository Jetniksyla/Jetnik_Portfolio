import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { SiHeroku } from "react-icons/si";
import Bookworm from "../../assets/Bookworm.png";
import CssPortfolio from "../../assets/CSS_Portfolio.png";
import EventSpace from "../../assets/Event_Space.png";
import NoteTaker from "../../assets/Note_Taker.png";
import TechBlog from "../../assets/Tech_Blog.png";
import WeatherForecast from "../../assets/Weather_Forecast_API_.png";

export default function Projects() {
  const projects = [
    {
      title: "Bookworm",
      img: Bookworm,
      desc: "Book Search Application",
      url: "#",
      herokuUrl: "https://search-book-application-dd0c88dd233b.herokuapp.com/",
      githubUrl: "https://github.com/Jetniksyla/Bookworm",
    },
    {
      title: "Weather Forecast",
      img: WeatherForecast,
      desc: "Weather Forecast Application",
      url: "#",
      herokuUrl: "https://jetniksyla.github.io/Weather_Forecast_API/",
      githubUrl: "https://github.com/Jetniksyla/Weather_Forecast_API",
    },
    {
      title: "Tech Blog",
      img: TechBlog,
      desc: "Technical Blogging Platform",
      url: "#",
      herokuUrl: "https://jetnik-tech-blog-bdfa991fa64b.herokuapp.com/",
      githubUrl: "https://github.com/Jetniksyla/Tech_Blog",
    },
    {
      title: "Event Space",
      img: EventSpace,
      desc: "Event Management Platform",
      url: "#",
      herokuUrl: "https://jetniksyla.github.io/Event-Space/",
      githubUrl: "https://github.com/Jetniksyla/Event-Space",
    },
    {
      title: "CSS Portfolio",
      img: CssPortfolio,
      desc: "CSS-based Portfolio",
      url: "#",
      herokuUrl: "https://jetniksyla.github.io/css_portfolio/",
      githubUrl: "https://github.com/Jetniksyla/css_portfolio",
    },
    {
      title: "Note Taker",
      img: NoteTaker,
      desc: "Note Taking Application",
      url: "#",
      herokuUrl: "https://jetnik-note-taker-90d62e5c7166.herokuapp.com/",
      githubUrl: "https://github.com/Jetniksyla/Note_Taker",
    },
  ];

  // state to manage icon visibility
  const [visibleIcons, setVisibleIcons] = useState(
    new Array(projects.length).fill(false)
  );

  // function to toggle icon visibility
  const toggleIcons = (index) => {
    const updatedVisibility = [...visibleIcons];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleIcons(updatedVisibility);
  };

  return (
    <div className="font-roboto mx-20 my-20 p-2 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-center text-4xl font-bold text-indigo-600 mb-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
          >
            <div className="border border-gray-300 bg-gray-200">
              <img
                src={project.img}
                alt={project.title}
                className="w-full object-contain h-48"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-indigo-600">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-5">{project.desc}</p>
              <div className="flex items-center">
                <button
                  onClick={() => toggleIcons(index)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-500 transition-colors duration-300"
                >
                  View More
                </button>
                {visibleIcons[index] && (
                  <div className="flex flex-end items-end ml-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <BsGithub className="cursor-pointer text-3xl text-gray-800 hover:text-black mx-2 transition-all duration-300 transform hover:scale-110" />
                    </a>
                    <a href={project.herokuUrl} target="_blank" rel="noopener noreferrer">
                      <SiHeroku className="cursor-pointer text-3xl text-purple-600 hover:text-purple-800 mx-2 transition-all duration-300 transform hover:scale-110" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
