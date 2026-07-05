import { useState, useEffect, useRef } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { gsap } from "gsap";
import HorizontalLine from "./HorizontalLine";
import { useTheme } from "../context/ThemeContext";

const Header = ({ fontClass }) => {
  const [contactExpanded, setContactExpanded] = useState(false);
  const headerRef = useRef(null);
  const contactContainerRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 20) {
        headerRef.current.classList.add("shadow-md", "bg-opacity-95");
      } else {
        headerRef.current.classList.remove("shadow-md", "bg-opacity-95");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailClick = () => {
    window.open("mailto:syedhishamshah27@gmail.com", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("https://wa.me/923038144158", "_blank");
  };

  const toggleContactMenu = () => {
    setContactExpanded(!contactExpanded);

    // Animate with GSAP
    if (!contactExpanded) {
      gsap.to(contactContainerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(contactContainerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${fontClass}  backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center relative">
          {/* Logo/Name Area */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight hover:text-blue-600 transition-colors duration-200">
              Syed Hisham Ali Shah
            </h1>
          </div>

          {/* Desktop Contact Info + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={handleEmailClick}
              className="flex items-center group hover:text-blue-600 transition-colors duration-200"
              target="_blank"
            >
              <FaEnvelope className="mr-2 text-lg group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">syedhishamshah27@gmail.com</span>
            </button>

            <button
              onClick={handlePhoneClick}
              className="flex items-center group hover:text-green-600 transition-colors duration-200"
              target="_blank"
            >
              <FaWhatsapp className="mr-2 text-lg group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">+923038144158</span>
            </button>

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
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
          </div>

          {/* Mobile Controls (Theme Toggle + Menu Button) */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <MdOutlineWbSunny className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
              ) : (
                <BsMoonStars className="w-5 h-5 text-indigo-600 group-hover:text-indigo-500 transition-colors" />
              )}
              <span className="sr-only">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleContactMenu}
              className="p-2 rounded-full transition-colors duration-200"
              aria-expanded={contactExpanded}
              aria-label="Toggle contact menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Contact Menu */}
        <div
          ref={contactContainerRef}
          className="md:hidden overflow-hidden h-0 opacity-0"
        >
          <div className="py-2 space-y-3">
            <button
              onClick={handleEmailClick}
              className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FaEnvelope className="mr-3 text-blue-600" />
              <span className="font-medium">syedhishamshah27@gmail.com</span>
            </button>

            <button
              onClick={handlePhoneClick}
              className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FaWhatsapp className="mr-3 text-green-600" />
              <span className="font-medium">+923038144158</span>
            </button>
          </div>
        </div>
      </div>

      <HorizontalLine />
    </header>
  );
};

export default Header;