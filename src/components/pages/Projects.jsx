import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { SiHeroku } from "react-icons/si";
import GitHubPagesImg from "../../assets/GitHub-Pages.png";
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
      desc: "Bookworm is a full-stack application that enhances book discovery and sharing. Built with Node.js, Express.js, and Sequelize ORM, it features dynamic page rendering with  ",
      extraInfo:
        "Handlebars.js. Key functionalities include user authentication, the ability to favorite books, and a seamless interactive user experience.",

      url: "#",
      herokuUrl: "https://search-book-application-dd0c88dd233b.herokuapp.com/",
      githubUrl: "https://github.com/Jetniksyla/Bookworm",
    },
    {
      title: "Weather Forecast",
      img: WeatherForecast,
      desc: "Weather Forecast Explorer is a user-friendly web app for real-time and 5-day weather forecasts. It allows users to search weather conditions in any city with a responsive design for ",
      extraInfo:
        "seamless viewing on multiple devices. The app also features quick access to weather data for popular cities and robust error handling.",

      url: "#",
      herokuUrl: "https://jetniksyla.github.io/Weather_Forecast_API/",
      githubUrl: "https://github.com/Jetniksyla/Weather_Forecast_API",
    },
    {
      title: "Tech Blog",
      img: TechBlog,
      desc: "Technical Blogging Platform is a streamlined web application for managing technical blog posts. Built with MySQL and deployable via Heroku, it ensures secure and easy setup with ",
      extraInfo:
        " environment variables. The platform supports user functionalities like login, logout, account creation, and the ability to add or delete posts.",

      url: "#",
      herokuUrl: "https://jetnik-tech-blog-bdfa991fa64b.herokuapp.com/",
      githubUrl: "https://github.com/Jetniksyla/Tech_Blog",
    },
    {
      title: "Event Space",
      img: EventSpace,
      desc: "Event Space is a sleek web application that lets users discover and explore global events with ease. Built with HTML, CSS, and JavaScript, it offers a user-friendly interface where users can",
      extraInfo:
        "  search events by city. Event Space provides detailed insights about performers and direct links to SeatGeek and Wikipedia.",

      url: "#",
      herokuUrl: "https://jetniksyla.github.io/Event-Space/",
      githubUrl: "https://github.com/Jetniksyla/Event-Space",
    },
    {
      title: "CSS Portfolio",
      img: CssPortfolio,
      desc: "Jetnik's Portfolio is designed for simplicity and ease of use, featuring streamlined navigation, a device-friendly layout, and smooth scrolling for effortless browsing. Contact information is",
      extraInfo:
        " prominently featured, ensuring quick connections. This portfolio effectively highlights technical proficiency and user-friendly design.",

      url: "#",
      herokuUrl: "https://jetniksyla.github.io/css_portfolio/",
      githubUrl: "https://github.com/Jetniksyla/css_portfolio",
    },
    {
      title: "Note Taker",
      img: NoteTaker,
      desc: "The Note Taker App is a user-friendly tool for creating and organizing notes. With its intuitive interface, users can effortlessly jot down and organize their thoughts. Built with Node.js and",
      extraInfo:
        "  Express.js, it ensures smooth performance and reliability. Whether it's capturing quick ideas or drafting detailed notes, this app simplifies it.",

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
    <>
      <h1
        className="text-center text-5xl font-bold mt-10 mb-6 text-indigo-600"
        style={{ fontFamily: "math" }}
      >
        Check out my projects
        <svg
          className="animate-bounce w-10 h-10 mx-auto mt-4"
          fill="none"
          color="red"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ display: "block" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 9l9 9 9-9"
          />
        </svg>
      </h1>

      <div className="font-roboto mx-7 my-7 p-6 shadow-lg rounded-lg">
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
                  className="object-cover h-48 w-full mx-auto rounded-none px-6"
                  style={{ height: "330px" }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-indigo-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 overflow-hidden max-h-36">
                  {project.desc}
                  {!visibleIcons[index] && <span>...</span>}{" "}
                  {/* Show ellipsis when extra info is hidden */}
                  {visibleIcons[index] && <span>{project.extraInfo}</span>}{" "}
                  {/* Show extra info when toggled */}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleIcons(index)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-500 transition-colors duration-300"
                  >
                    {visibleIcons[index] ? "Show Less" : "Show More"}
                  </button>

                  <div className="flex flex-end items-end ml-2">
                    <svg
                      className="animate-horizontal-slide w-10 h-10 mx-auto mt-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ display: "block", color: "red" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 9l9 5 -9 5"
                      />
                    </svg>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub className="cursor-pointer text-3xl text-gray-800 hover:text-black mx-2 transition-all duration-300 transform hover:scale-110" />
                    </a>

                    {project.herokuUrl.includes("github.io") ? (
                      <a
                        href={project.herokuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-3xl text-gray-800 hover:text-black transition-all duration-300 transform hover:scale-110"
                      >
                        <img
                          src={GitHubPagesImg}
                          alt="GitHub Pages"
                          className="h-8 w-8 mx-2 rounded-2xl"
                        />
                      </a>
                    ) : (
                      <a
                        href={project.herokuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiHeroku className="cursor-pointer text-3xl text-purple-600 hover:text-purple-800 mx-2 transition-all duration-300 transform hover:scale-110" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
