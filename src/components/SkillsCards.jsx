import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import skillCategories from "../data/skillsData";

const SkillsCards = ({ fontClass }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Track when skills section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Removed auto-rotating interval effect

  return (
    <div className={`${fontClass} relative overflow-hidden`} ref={containerRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-8 pb-0 md:pb-20"
      >
        <div className="max-w-6xl mx-auto mb-16">
          {/* Section Header with Parallax Effect */}
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 text-center md:text-left"
          >
            <div className="inline-block">
              <h2 className={`text-4xl lg:text-5xl font-extrabold mb-3 `}>
                Technical Expertise
              </h2>
            </div>
            <p className={`mt-4 text-lg  max-w-xl mx-auto md:mx-0`}>
              My specialized toolkit of technologies and frameworks I've
              mastered throughout my development journey.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-start min-h-[400px]">
            {/* Category Navigation (Fixed Height) */}
            <div className="w-full md:w-1/3 self-stretch">
              <div className="relative bg-white dark:bg-transparent rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-blue-500 h-full min-h-[300px]">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    className={`flex justify-start items-center w-full text-left px-6 py-4 mb-2 rounded-xl transition-all duration-300 ${
                      index === activeIndex
                        ? "text-indigo-600 dark:text-indigo-300 font-semibold ml-1"
                        : "hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Arrow appears dynamically for active category */}
                    {index === activeIndex && (
                      <motion.span
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 8 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl text-indigo-600 dark:text-indigo-300 mb-1"
                      >
                        →
                      </motion.span>
                    )}

                    <span className="text-lg font-medium ml-3">
                      {category.title}
                    </span>

                  </motion.button>
                ))}
              </div>
            </div>

            {/* Skills Cards (Dynamic) */}
            <div className="w-full md:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {skillCategories[activeIndex].skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="relative bg-white dark:bg-transparent rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-blue-500"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-bold text-xl">{skill.name}</h3>
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${skill.color}20` }}
                          >
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 16L12 8"
                                stroke={skill.color}
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M9 11L12 8 15 11"
                                stroke={skill.color}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="mb-2">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              Proficiency
                            </span>
                            <span className="text-sm font-medium">
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="h-2.5 rounded-full"
                              style={{ backgroundColor: skill.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{
                                duration: 1,
                                delay: 0.5 + idx * 0.1,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
{/* 
      <div className="container mx-auto px-4">
        <HorizontalLine />
      </div> */}
    </div>
  );
};

export default SkillsCards;