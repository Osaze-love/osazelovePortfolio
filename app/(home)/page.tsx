import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const page = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <ProfessionalSummary />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default page;
