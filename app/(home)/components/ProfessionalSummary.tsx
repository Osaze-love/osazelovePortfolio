import Title from "./Title";

const highlights = [
  "3+ years professional experience",
  "Computer Science graduate",
  "Startup & collaborative environments",
  "Teaching & mentoring background",
];

const ProfessionalSummary = () => {
  return (
    <div id="about" className="max-w-5xl text-white mx-auto px-1 md:px-8 pb-28 relative section-glow">
      <Title
        number="00 — About"
        text="Professional Summary"
        className="flex flex-col items-center mt-8 md:mt-16 justify-center"
      />

      <div className="pt-10 md:pt-14">
        <div className="glass-card p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <p className="text-sm md:text-lg text-gray-300 leading-relaxed relative z-10">
            I&apos;m a web developer with over three years of professional experience and five
            years in the web development space. From university projects to a
            Computer Science degree and beyond. I&apos;ve taught web development,
            led frontend builds at startups, and shipped products in collaborative
            environments across Nigeria, the UK, and the US.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 relative z-10">
            {highlights.map((item) => (
              <div
                key={item}
                className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <p className="text-xs md:text-sm text-gray-400">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
