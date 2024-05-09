import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {
  SiHeroku,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiNextdotjs,
  SiNodemon,
  SiVite,
  SiSlack,
  SiGitlab,
  SiGit,
  SiFigma,
  SiNpm,
  SiJest,
  SiPostman,
  SiInsomnia,
  SiThunderbird,
} from "react-icons/si";
import { FaGoogle, FaServer, FaFileCode } from "react-icons/fa";
import { classNames } from "@react-pdf-viewer/core";

const AboutMe = () => {
  const skills = [
    {
      name: "JavaScript, HTML5, CSS3",
      description:
        "Expertise in creating interactive and responsive user interfaces.",
      projects: [
        {
          title: "Event Space",
          githubUrl: "https://github.com/Jetniksyla/Event-Space",
        },
        {
          title: "Text Editor PWA",
          githubUrl: "https://github.com/Jetniksyla/Text_Editor_PWA",
        },
        {
          title: "Contact Directory App",
          githubUrl: "https://github.com/Jetniksyla/Contact-Directory-App",
        },
        {
          title: "Weather Forecast Explorer",
          githubUrl: "https://github.com/Jetniksyla/Weather_Forecast_API",
        },
        {
          title: "Jetnik's Portfolio",
          githubUrl: "https://github.com/Jetniksyla/css_portfolio",
        },
        {
          title: "JavaScript Quiz",
          githubUrl: "https://github.com/Jetniksyla/JS_basic_quizz",
        },
        {
          title: "Daily Planner",
          githubUrl: "https://github.com/Jetniksyla/daily_planner",
        },
      ],
    },
    {
      name: "React & Redux",
      description:
        "Advanced skills in scalable front-end applications using React framework.",
      projects: [{ title: "React Portfolio", githubUrl: "#" }],
    },
    {
      name: "Node.js & Express",
      description:
        "Developing server-side logic and robust APIs with Node.js and Express.",
      projects: [
        {
          title: "Bookworm",
          githubUrl: "https://github.com/Jetniksyla/Bookworm",
        },
        {
          title: "E-Commerce-ORM_Project",
          githubUrl: "https://github.com/Jetniksyla/E-Commerce-ORM_Project",
        },
        {
          title: "Social Network API",
          githubUrl: "https://github.com/Jetniksyla/Social_Network_API",
        },
        {
          title: "Note Taker",
          githubUrl: "https://github.com/Jetniksyla/Note_Taker",
        },
        {
          title: "SQL Employee Tracker",
          githubUrl: "https://github.com/Jetniksyla/SQL_Employee_Tracker",
        },
        {
          title: "README.md Generator",
          githubUrl: "https://github.com/Jetniksyla/README.md_Generator",
        },
        {
          title: "Project Logo Maker",
          githubUrl: "https://github.com/Jetniksyla/Project_Logo_Maker",
        },
      ],
    },
    {
      name: "MongoDB, MySQL, NoSQL",
      description:
        "Database management with both SQL and NoSQL databases for data integrity.",
      projects: [
        {
          title: "Bookworm",
          githubUrl: "https://github.com/Jetniksyla/Bookworm",
        },
        {
          title: "E-Commerce-ORM_Project",
          githubUrl: "https://github.com/Jetniksyla/E-Commerce-ORM_Project",
        },
        {
          title: "Social Network API",
          githubUrl: "https://github.com/Jetniksyla/Social_Network_API",
        },
        {
          title: "SQL Employee Tracker",
          githubUrl: "https://github.com/Jetniksyla/SQL_Employee_Tracker",
        },
      ],
    },
    {
      name: "Git, GitHub, Heroku",
      description:
        "Version control with Git, collaboration using GitHub, and deployment via Heroku.",
      projects: [
        {
          title: "Bookworm",
          githubUrl: "https://github.com/Jetniksyla/Bookworm",
        },
        {
          title: "E-Commerce-ORM_Project",
          githubUrl: "https://github.com/Jetniksyla/E-Commerce-ORM_Project",
        },
        {
          title: "Contact Directory App",
          githubUrl: "https://github.com/Jetniksyla/Contact-Directory-App",
        },
        {
          title: "Note Taker",
          githubUrl: "https://github.com/Jetniksyla/Note_Taker",
        },
        {
          title: "README.md Generator",
          githubUrl: "https://github.com/Jetniksyla/README.md_Generator",
        },
        {
          title: "Text Editor PWA",
          githubUrl: "https://github.com/Jetniksyla/Text_Editor_PWA",
        },
      ],
    },
    {
      name: "RESTful Services and APIs",
      description:
        "Designing and integrating RESTful services for enhanced application interoperability.",
      projects: [
        {
          title: "Bookworm",
          githubUrl: "https://github.com/Jetniksyla/Bookworm",
        },
        {
          title: "E-Commerce-ORM_Project",
          githubUrl: "https://github.com/Jetniksyla/E-Commerce-ORM_Project",
        },
        {
          title: "Social Network API",
          githubUrl: "https://github.com/Jetniksyla/Social_Network_API",
        },
      ],
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 15,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <>
      <div
        className="mx-7 my-7 p-6 shadow-lg rounded-lg"
        style={{ fontFamily: "math" }}
      >
        <h1 className="text-center text-4xl font-bold text-indigo-700 mb-10">
          Jetnik Syla
        </h1>
        <section className="mb-10 text-center max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed font-light">
            I am a passionate full-stack web developer with a background in
            music, honing my skills through the Columbia Engineering Bootcamp. I
            am proficient in building scalable web applications and have a knack
            for creative problem-solving. Outside of programming, I have a zest
            for life expressed through hiking, biking, working out, running,
            driving, modeling, and spending time at the beach. My diverse
            interests fuel my creativity in software development.
          </p>
          <p className="italic text-gray-600 text-m">
            From the precision of music to the logic of coding, my journey is
            driven by a relentless curiosity and a commitment to excellence.
          </p>
        </section>
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Core Technical Skills
          <span className="text-sm text-gray-500">
            (Hover Over To See The Projects)
          </span>
        </h2>
        <section
          className="flex-2 mb-4 p-auto"
          style={{
            alignContent: "center",
            height: "70px",
            border: "1px solid purple",
            borderRadius: "10px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Slider {...sliderSettings}>
            <SiHeroku
              size={45}
              className="text-purple-600 hover:text-purple-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiNodemon
              size={45}
              className="text-green-500 hover:text-green-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiJavascript
              size={45}
              className="text-yellow-500 hover:text-yellow-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiVite
              size={45}
              className="text-blue-500 hover:text-blue-700 transition-all duration-300 transform hover:scale-90"
            />
            <BsGithub
              size={45}
              className="text-gray-700 hover:text-gray-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiSlack
              size={45}
              className="text-purple-500 hover:text-purple-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiCss3
              size={45}
              className="text-blue-500 hover:text-blue-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiReact
              size={45}
              className="text-blue-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-90"
            />
            <SiRedux
              size={45}
              className="text-purple-600 hover:text-purple-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiGitlab
              size={45}
              className="text-red-500 hover:text-red-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiFigma
              size={45}
              className="text-purple-700 hover:text-purple-900 transition-all duration-300 transform hover:scale-90"
            />
            <SiPostman
              size={45}
              className="text-orange-400 hover:text-orange-600 transition-all duration-300 transform hover:scale-90"
            />
            <SiGit
              size={45}
              className="text-black hover:text-gray-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiHtml5
              size={45}
              className="text-orange-500 hover:text-orange-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiMysql
              size={45}
              className="text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiMongodb
              size={45}
              className="text-green-500 hover:text-green-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiExpress
              size={45}
              className="text-black hover:text-gray-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiNodedotjs
              size={45}
              className="text-green-400 hover:text-green-600 transition-all duration-300 transform hover:scale-90"
            />
            <SiTailwindcss
              size={45}
              className="text-blue-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-90"
            />
            <SiTypescript
              size={45}
              className="bg-white text-blue-600 transition-all duration-300 transform hover:scale-90"
            />
            <SiVisualstudiocode
              size={45}
              className="text-blue-500 bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-90"
            />
            <SiNextdotjs
              size={45}
              className="text-black hover:text-gray-800 transition-all duration-300 transform hover:scale-90"
            />
            <FaFileCode
              size={45}
              className="text-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiNpm
              size={45}
              className="text-red-600 hover:text-red-800 transition-all duration-300 transform hover:scale-90"
            />
            <SiJest
              size={45}
              className="text-red-400 hover:text-red-600 transition-all duration-300 transform hover:scale-90"
            />
            <SiInsomnia
              size={45}
              className="text-purple-500 hover:text-purple-700 transition-all duration-300 transform hover:scale-90"
            />
            <SiThunderbird
              size={45}
              className="text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-90"
            />
            <FaGoogle
              size={45}
              className="text-yellow-400 hover:text-yellow-800 transition-all duration-300 transform hover:scale-90"
            />
            <FaServer
              size={45}
              className="text-gray-700 hover:text-gray-800 transition-all duration-300 transform hover:scale-90"
            />
          </Slider>
        </section>

        <div className="cursor-pointer transition-all duration-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`bg-white rounded-lg overflow-hidden shadow-md p-7 ${
                hoveredSkill === skill.name ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {skill.name}
              </h3>
              <p className="text-lg text-gray-600">{skill.description} </p>
              {hoveredSkill === skill.name && (
                <ul
                  className="mt-3 list-disc list-inside"
                  style={{
                    textDecoration: "none",
                    transition: "transform 0.5s ease-in-out",
                    display: "inline-block",
                    transformOrigin: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1.0)")
                  }
                >
                  {skill.projects.map((project, index) => (
                    <li
                      key={index}
                      className="text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="noreferrer"
                        style={{
                          textDecoration: "none",
                          transition: "transform 0.3s ease-in-out",
                          display: "inline-block",
                          transformOrigin: "center",
                          paddingLeft: "10px",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.2)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1.0)")
                        }
                      >
                        {project.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
