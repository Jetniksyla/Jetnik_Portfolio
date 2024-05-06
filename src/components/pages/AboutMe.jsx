const AboutMe = () => {
  const skills = [
    {
      name: "JavaScript, HTML5, CSS3",
      description:
        "Expertise in creating interactive and responsive user interfaces.",
    },
    {
      name: "React & Redux",
      description:
        "Advanced skills in scalable front-end applications using React framework.",
    },
    {
      name: "Node.js & Express",
      description:
        "Developing server-side logic and robust APIs with Node.js and Express.",
    },
    {
      name: "MongoDB, MySQL, NoSQL",
      description:
        "Database management with both SQL and NoSQL databases for data integrity.",
    },
    {
      name: "Git, GitHub, Heroku",
      description:
        "Version control with Git, collaboration using GitHub, and deployment via Heroku.",
    },
    {
      name: "RESTful Services and APIs",
      description:
        "Designing and integrating RESTful services for enhanced application interoperability.",
    },
  ];

  return (
    <div className="font-roboto mx-20 my-20 p-5 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-center text-4xl font-bold text-indigo-600 mb-10">
        About Jetnik Syla
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
        <p className="italic text-gray-600">
          Driven by curiosity, my journey from music to programming reflects my
          dedication to learning and mastering new challenges.
        </p>
      </section>
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Core Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-5">
              <h3 className="text-lg font-semibold text-indigo-600">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
