import Header from "../components/Header";
import SvgSpinnerAnimation from "../components/SvgSpinnerAnimation";
import Details from "../components/Details";
import SkillsCards from "../components/SkillsCards";
// import ProjectsGallery from "../components/ProjectsGallery";
import AboutCv from "../components/AboutCv";
import Footer from "../components/Footer";
import HackathonExperience from "../components/HackathonExperience";
import { Toaster } from "react-hot-toast";


const Home = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`scroll-smooth min-h-screen bg-white dark:bg-primary-gradient text-black dark:text-white`}
    >
      <Toaster />
      {/* Header */}
      <Header />

      {/* Theme Toggling Button */}
      {/* <div className="fixed top-20 right-5 md:right-4 z-40 flex flex-col gap-3">
        <button
          onClick={toggleTheme}
          className="group flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <MdOutlineWbSunny className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
          ) : (
            <BsMoonStars className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
          )}
          <span className="sr-only">
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </span>
        </button>
      </div> */}

      {/* SVG Spinner */}
      <div className="mt-8">
        <SvgSpinnerAnimation />
      </div>

      {/* Hero Section Details Page */}
      <div className="mt-8">
        <Details />
      </div>

      {/* Skills Cards */}
      <div className="overflow-x-hidden">
        <SkillsCards />
      </div>

            {/* Hackthon */}
      <div>
        <HackathonExperience />
      </div>

      {/* Projects Gallery */}
      {/* <div className="mt-8 overflow-x-hidden">
        <ProjectsGallery />
      </div> */}

      {/* About CV */}
      <div>
        <AboutCv />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
