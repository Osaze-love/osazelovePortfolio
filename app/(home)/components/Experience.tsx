import Title from "./Title";

const experiences = [
  {
    role: "Frontend Developer",
    company: "SIPPY (Remote)",
    date: "June 2024 - Till Date",
    details: [
      "Work in a collaborative development environment with other developers on both the website and the dashboard.",
      "In charge of weekly merges and PR reviews across both the website and dashboard with little under a year of being at the company.",
    ],
  },
  {
    role: "Web Tutor",
    company: "New Horizons (Official ICT trainers for country's mandatory post university scheme)",
    date: "April 2024 - March 2025 (In intervals of three months)",
    details: [
      "Responsible for tutoring students on web development.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dreamplanet (Remote)",
    date: "",
    details: [
      "Worked alone on the admin section of things.",
      "Required to build the CRUD dashboard integrating with the backend.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Passpro (Remote)",
    date: "",
    details: [
      "Responsible for building their website and admin dashboard.",
      "Collaborated with a backend developer for integration.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Oyannow Logistics, Benin-City, Edo-State",
    date: "September 2022 - February 2023",
    details: [
      "Developed responsive front-end interfaces using React.js.",
      "Integrated API to projects and gained experience in providing different levels of access in projects.",
      "Worked closely with the backend team to ensure proper functionality implementation.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Edo Innovation Hub, Benin-City, Edo-State",
    date: "January 2022 - July 2022",
    details: [
      "Gained experience in teaching web development to freshers.",
      "Assisted in the development and maintenance of web applications using JavaScript and React.js.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="max-w-5xl text-white mx-auto px-1 md:px-8 pb-28">
      <Title
        text="Experience 🧑‍💻"
        className="flex flex-col items-center justify-center rotate-0 "
      />
      <div className="pt-10 space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-black-500 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="text-lg font-semibold text-green-400">{exp.role}</div>
              <div className="text-sm text-gray-400">{exp.date}</div>
            </div>
            <div className="text-md font-medium text-indigo-300 mt-1">{exp.company}</div>
            <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 