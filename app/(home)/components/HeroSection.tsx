import { MovingBorderBtn } from "@/components/ui/moving-border";

const stats = [
  { value: "3+", label: "Years exp." },
  { value: "8+", label: "Roles" },
  { value: "10+", label: "Projects" },
];

const HeroSection = () => {
  return (
    <div
      id="home"
      className="min-h-[75vh] overflow-hidden flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up relative"
    >
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-8 text-white text-center lg:text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs md:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] md:leading-[1.2] py-2">
          Nice to meet you 👋
          <br />
          <span className="text-gradient inline-block mt-3 md:mt-5">
            I&apos;m Osaze Love.
          </span>
        </h1>

        <p className="md:max-w-md text-sm md:text-lg text-gray-400 leading-relaxed">
          Frontend engineer crafting modern, interactive web experiences —
          from MVP-ready products to polished dashboards and WordPress builds.
        </p>

        <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-2">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="px-4 md:px-6 py-2 md:py-3 font-semibold"
          >
            <a href="/OsazeLoveglobalcv.pdf" target="_blank">
              📢 View CV
            </a>
          </MovingBorderBtn>
          <a
            href="#experience"
            className="px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/10 text-sm md:text-base text-gray-300 hover:border-green-500/50 hover:text-white transition-all"
          >
            See my work ↓
          </a>
        </div>
      </div>

      <div className="relative z-10">
        <div className="w-72 h-72 md:w-80 md:h-80 space-y-3 -rotate-[20deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-lg shadow-green-500/20" />
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-700 shadow-lg shadow-indigo-500/20" />
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-700 shadow-lg shadow-indigo-500/20" />
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 shadow-lg shadow-green-500/20" />
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
