import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="dark:bg-grid-small-white/[0.07] bg-grid-small-black/[0.2] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* Main sections */}
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <ProfessionalSummary />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default page;
