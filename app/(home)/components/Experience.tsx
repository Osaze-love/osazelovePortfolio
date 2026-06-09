import Image from "next/image";
import Title from "./Title";

type ExperienceItem = {
  role: string;
  company: string;
  type: string;
  date: string;
  duration: string;
  location: string;
  flag: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  logo?: string;
  initials?: string;
  accent: string;
  details: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "WordPress Developer",
    company: "Nuyew Tech Academy",
    type: "Full-time",
    date: "May 2026 - Present",
    duration: "2 mos",
    location: "London Area, United Kingdom",
    flag: "🇬🇧",
    workMode: "Remote",
    logo: "/nuyew.jpeg",
    accent: "from-blue-500 to-cyan-500",
    details: [
      "Building and maintaining the academy website on WordPress.",
      "Delivering a polished, career-focused platform for tech education.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Mangrove",
    type: "Contract",
    date: "Jan 2026 - Present",
    duration: "6 mos",
    location: "London Area, United Kingdom",
    flag: "🇬🇧",
    workMode: "Remote",
    initials: "M",
    accent: "from-emerald-500 to-teal-500",
    details: [
      "Contract full stack engineering role on remote UK-based projects.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Sippy Life",
    type: "Full-time",
    date: "Jun 2024 - Present",
    duration: "2 yrs 1 mo",
    location: "Lagos State, Nigeria",
    flag: "🇳🇬",
    workMode: "Remote",
    initials: "S",
    accent: "from-green-500 to-lime-500",
    details: [
      "Lead frontend developer for the website.",
      "Moved the project to MVP readiness.",
      "Github PR reviewer for other frontend developers.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dream Planet Inc",
    type: "Part-time",
    date: "Oct 2024 - Mar 2025",
    duration: "6 mos",
    location: "California, United States",
    flag: "🇺🇸",
    workMode: "Remote",
    initials: "DP",
    accent: "from-violet-500 to-purple-500",
    details: ["Lead developer for the admin build."],
  },
  {
    role: "Frontend Developer",
    company: "Passpro Africa",
    type: "Part-time",
    date: "Aug 2024 - Mar 2025",
    duration: "8 mos",
    location: "Lagos State, Nigeria",
    flag: "🇳🇬",
    workMode: "Remote",
    initials: "P",
    accent: "from-orange-500 to-amber-500",
    details: ["Lead developer for website and admin dashboard."],
  },
  {
    role: "Web Tutor",
    company: "New Horizons",
    type: "Part-time",
    date: "Mar 2024 - Mar 2025",
    duration: "1 yr 1 mo",
    location: "Nigeria",
    flag: "🇳🇬",
    workMode: "On-site",
    initials: "NH",
    accent: "from-sky-500 to-blue-500",
    details: [
      "Tutor for web development.",
      "Nigeria's official NYSC ICT SAED tutors.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Oyaanow Logistics",
    type: "Full-time",
    date: "Sep 2022 - Feb 2023",
    duration: "6 mos",
    location: "Edo State, Nigeria",
    flag: "🇳🇬",
    workMode: "Hybrid",
    initials: "O",
    accent: "from-rose-500 to-pink-500",
    details: [
      "Developed responsive front-end interfaces using React.js.",
      "Integrated APIs and implemented role-based access levels.",
      "Worked closely with the backend team on functionality.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Edo State Skills Development Agency (EDOJOBS)",
    type: "Internship",
    date: "Jan 2022 - Jul 2022",
    duration: "7 mos",
    location: "Edo State, Nigeria",
    flag: "🇳🇬",
    workMode: "On-site",
    initials: "EJ",
    accent: "from-indigo-500 to-blue-500",
    details: [
      "Gained experience teaching web development to freshers.",
      "Assisted in development and maintenance of web apps using JavaScript and React.js.",
    ],
  },
];

const workModeStyles: Record<string, string> = {
  Remote: "bg-green-500/10 text-green-400 border-green-500/20",
  Hybrid: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "On-site": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

const Experience = () => {
  return (
    <div id="experience" className="max-w-4xl text-white mx-auto px-1 md:px-8 pb-28 relative section-glow">
      <Title
        number="01 — Experience"
        text="Where I've worked"
        subtitle="Building products, mentoring developers, and shipping across startups and agencies."
        className="flex flex-col items-center justify-center"
      />

      <div className="pt-12 md:pt-16 relative">
        <div className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-indigo-500/30 to-transparent" />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-14 md:pl-16 group">
              <div
                className={`absolute left-4 md:left-5 top-6 w-3 h-3 rounded-full bg-gradient-to-br ${exp.accent} ring-4 ring-black group-hover:scale-125 transition-transform`}
              />

              <div className="glass-card p-5 md:p-6 hover:border-green-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="shrink-0">
                    {exp.logo ? (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.accent} flex items-center justify-center text-sm font-bold text-white shadow-lg`}
                      >
                        {exp.initials}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm md:text-base text-indigo-300/90 mt-0.5">
                          {exp.company}
                          <span className="text-gray-500"> · {exp.type}</span>
                        </p>
                      </div>
                      <div className="text-left md:text-right shrink-0">
                        <p className="text-xs md:text-sm text-gray-400">{exp.date}</p>
                        <p className="text-xs text-gray-600">{exp.duration}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <span>{exp.flag}</span>
                        {exp.location}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${workModeStyles[exp.workMode]}`}
                      >
                        {exp.workMode}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-green-500 mt-1.5 shrink-0">▸</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
