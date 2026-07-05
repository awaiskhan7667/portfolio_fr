import React, { useState, useEffect, useRef } from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import MyProjectsHeading from "./MyProjectsHeading";
import videos from "../data/projectGalleryVideosData";

const VideoGallery = ({ fontClass }) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const galleryRef = useRef(null);
  const videoRefs = useRef([]);


  // Handle intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  // Play video when it comes into view
  const handleVideoInView = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((err) => {
        console.log("Video autoplay prevented:", err);
      });
    }
  };


  // Project navigation dots
  const renderNavDots = () => {
    return (
      <div className="flex justify-center space-x-2 mt-12 mb-6">
        {videos.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeVideo === index
                ? "w-8 bg-indigo-600"
                : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
            onClick={() => setActiveVideo(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`py-0 md:py-16  overflow-hidden ${fontClass}`}
      ref={galleryRef}
    >
      <div className="container mx-auto px-4 md:px-0 max-w-6xl">
        {/* Heading Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <MyProjectsHeading />
        </motion.div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {renderNavDots()}
        </motion.div>

        {/* Featured Project Display */}
        <div className="mt-6 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView && activeVideo === index
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95, display: "none" }
              }
              transition={{ duration: 0.5 }}
              onAnimationComplete={() => {
                if (activeVideo === index) {
                  handleVideoInView(index);
                }
              }}
            >
              {/* Project Layout */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Video Section */}
                <motion.div
                  className="group w-full lg:w-3/5 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-lg overflow-hidden bg-gray-900 aspect-video">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="w-full h-full object-cover"
                      controls
                      loop
                      muted
                      src={video.videoSrc}
                      poster={`https://picsum.photos/seed/${video.title}/800/450`}
                    />
                  </div>
                </motion.div>

                {/* Project Info Section */}
                <div className="w-full lg:w-2/5 space-y-6">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={
                      isInView && activeVideo === index
                        ? { x: 0, opacity: 1 }
                        : { x: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2
                      className={`text-2xl lg:text-3xl awsomeTextColor font-bold mb-2`}
                    >
                      {video.title}
                    </h2>
                    <div className="w-20 h-1 bg-indigo-600 rounded-full mb-4" />

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {video.description.trim()}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {video.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            isInView && activeVideo === index
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* GitHub Link Button */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={
                        isInView && activeVideo === index
                          ? { y: 0, opacity: 1 }
                          : { y: 20, opacity: 0 }
                      }
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <a
                        href={video.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <button
                          variant="outlined"
                          className={`flex items-center justify-center gap-2 px-6 py-3 text-black dark:text-white text-sm font-medium border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-300 group`}
                        >
                          <FaGithub className="text-lg" />
                          View Source Code
                          <LiaArrowRightSolid className="text-lg transition-transform duration-300 group-hover:translate-x-2" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Project Number Indicator */}
              <div className="absolute -bottom-8 -left-4 lg:-left-12 opacity-10 z-0">
                <span className="text-8xl lg:text-9xl font-bold text-indigo-900 dark:text-indigo-200">
                  {index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="container mx-auto">
          <HorizontalLine />
        </div>
      </motion.div> */}
    </div>
  );
};

export default VideoGallery;
