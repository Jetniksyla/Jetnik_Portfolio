import React, { useState } from "react";

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

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="font-roboto mx-20 my-20 p-5 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-center text-4xl font-bold text-indigo-600 mb-10">
        Jetnik Syla
      </h1>
      <section className="mb-10 text-center max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
          Innovative full-stack web developer with a background in music,
          currently enhancing my skills at Columbia Engineering Bootcamp.
          Proficient in proactive leadership, clear communication, and tackling
          challenges effectively, I bring a creative and analytical approach to
          solving complex problems and developing high-quality software
          solutions.
        </p>
        <p className="italic text-gray-600 ">
          Driven by curiosity, my journey from music to programming reflects my
          dedication to learning and mastering new challenges.
        </p>
      </section>
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6 relative">
        Core Technical Skills
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-500 text-lg">
          Hover Over To See The Projects
        </span>
      </h2>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
            style={{
              boxShadow:
                hoveredSkill === skill.name
                  ? "0 10px 20px rgba(0, 0, 0, 0.1)"
                  : "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="p-7">
              <h3 className="text-xl font-semibold text-indigo-600">
                {skill.name}
              </h3>
              <p className="text-lg text-gray-600">{skill.description}</p>
              {hoveredSkill === skill.name && (
                <ul className="mt-3">
                  {skill.projects.map((project, index) => (
                    <li key={index} className="mt-1 p-2 text-lg text-gray-600 ">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600"
                      >
                        {project.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
