import React from "react";
import Bookworm from "../../assets/Bookworm.png";
import CssPortfolio from "../../assets/CSS_Portfolio.png";
import EventSpace from "../../assets/Event_Space.png";
import NoteTaker from "../../assets/Note_Taker.png";
import TechBlog from "../../assets/Tech_Blog.png";
import WeatherForecast from "../../assets/Weather_Forecast_API_.png";

export default function Projects() {
  const projects = [
    { title: "Bookworm", img: Bookworm, desc: "Book Search Application", url: "#" },
    { title: "CSS Portfolio", img: CssPortfolio, desc: "CSS-based Portfolio", url: "#" },
    { title: "Event Space", img: EventSpace, desc: "Event Management Platform", url: "#" },
    { title: "Note Taker", img: NoteTaker, desc: "Note Taking Application", url: "#" },
    { title: "Tech Blog", img: TechBlog, desc: "Technical Blogging Platform", url: "#" },
    { title: "Weather Forecast", img: WeatherForecast, desc: "Weather Forecast Application", url: "#" }
  ];

  return (
    <div className=" font-roboto mx-20 my-20 p-2 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-center text-4xl font-bold text-indigo-600 mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="border border-gray-300 bg-gray-200">
              <img src={project.img} alt={project.title} className="w-full object-contain h-48"/>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-indigo-600">{project.title}</h3>
              <p className="text-gray-600 mb-5">{project.desc}</p>
              <a href={project.url} className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-500 transition-colors duration-300">View More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
