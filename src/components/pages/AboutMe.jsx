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
    <div className=" mx-20 my-20 p-5 bg-gray-100 shadow-lg rounded-lg" style={{fontFamily: 'math'}}>
      <h1 className="text-center text-4xl font-bold text-indigo-700 mb-10">
        Jetnik Syla
      </h1>
      <section className="mb-10 text-center max-w-4xl mx-auto">
        <p className="text-xl leading-relaxed font-light">
          I am a passionate full-stack web developer with a background in music,
          honing my skills through the Columbia Engineering Bootcamp. I am
          proficient in building scalable web applications and have a knack for
          creative problem-solving. Outside of programming, I have a zest for
          life expressed through hiking, biking, working out, running, driving,
          modeling, and spending time at the beach. My diverse interests fuel my
          creativity in software development.
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
      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-7"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <h3 className="text-xl font-semibold text-indigo-600">
              {skill.name}
            </h3>
            <p className="text-lg text-gray-600">{skill.description}</p>
            {hoveredSkill === skill.name && (
              <ul className="mt-3 list-disc list-inside">
                {skill.projects.map((project, index) => (
                  <li
                    key={index}
                    className="text-gray-800 hover:text-indigo-600"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline"
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
  );
};

export default AboutMe;
