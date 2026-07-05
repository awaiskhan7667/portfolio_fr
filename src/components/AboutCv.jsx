import React, { useState, useEffect, useRef } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { motion, useAnimation, useInView } from "framer-motion";
import HorizontalLine from "./HorizontalLine";

const AboutCv = ({ textColorClass = "indigo-600", fontClass, bgClass }) => {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleCvNavigation = () => {
    // Navigate to CV or download it
    window.open("/cv/MyResume.pdf", "_blank");
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-8 md:py-12 relative overflow-hidden ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={mainControls}
        className="container mx-auto max-w-4xl text-center px-6 relative z-10"
      >
        {/* Decorative elements */}
        {/* <motion.div
          className="absolute top-0 left-2 md:left-0 transform -translate-x-1/2 -translate-y-12 w-1 h-full bg-indigo-200"
          variants={fadeInVariants}
          custom={0}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-400 rounded-full"></div>
        </motion.div> */}

        {/* Heading */}
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-start md:text-center`}
          variants={fadeInVariants}
          custom={1}
        >
          Discover My Professional Journey
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm md:text-lg text-gray-700 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
          variants={fadeInVariants}
          custom={2}
        >
          My CV encapsulates my journey as a Full Stack Developer, detailing my
          skills, projects, and accomplishments. From crafting efficient backend
          systems to designing engaging user interfaces, it highlights the
          expertise and dedication I bring to every project.
        </motion.p>

        {/* Button */}
        <motion.div
          className="flex justify-center mb-20"
          variants={fadeInVariants}
          custom={3}
        >
          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              onClick={handleCvNavigation}
              variant="outlined"
              className={`px-5 py-3 text-sm font-medium rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group`}
              title="My CV"
            >
              <span>View my CV</span>
              <motion.div
                animate={{ x: isHovering ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <LiaArrowRightSolid className="text-2xl" />
              </motion.div>
            </button>

            {/* Button hover effect animation */}
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-400 rounded-full"
              initial={{ opacity: 0, width: "20%" }}
              animate={{
                opacity: isHovering ? 1 : 0,
                width: isHovering ? "60%" : "20%",
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* CV Stats or highlights (optional addition) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={fadeInVariants}
          custom={4}
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "12+", label: "Projects Completed" },
            { number: "10+", label: "Technologies Mastered" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 p-6 rounded-xl shadow-sm  hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-3xl font-bold awsomeTextColor mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="container mx-auto"
        variants={fadeInVariants}
        custom={5}
        initial="hidden"
        animate={mainControls}
      >
        <HorizontalLine />
      </motion.div> */}
    </section>
  );
};

export default AboutCv;
