import { Link, Element } from "react-scroll";
import { FaGithub, FaInstagram, FaWhatsapp, FaDiscord, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Details = ({ fontClass, bgClass }) => {
  const discordId = import.meta.env.VITE_DISCORD_ID;
  const name = "Syed Hisham";
  // Variants for letter animation
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Delay each letter by 0.05 seconds
        duration: 0.5,
      },
    }),
  };
  const flipAnimation = {
    rotateX: [0, 180, 360], // Rotates from 0 to 180 to 360 degrees along the X-axis
    transition: {
      repeat: Infinity,
      repeatDelay: 2.5, // Delay after each rotation
      duration: 1.5, // Duration of one full rotation cycle
      ease: "easeInOut",
    },
  };

  return (
    <div className={`min-h-screen py-0 px-4 sm:px-6 pt-0 md:pt-12 lg:px-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Container */}
          <div
            className={`lg:w-2/5 lg:pr-12 lg:sticky lg:top-40 lg:self-start md:h-screen flex flex-col justify-between pb-10 md:pb-40`}
          >
            <div>
              {/* Animating each letter in h1 */}
              <motion.h1
                className={`text-4xl lg:text-5xl font-extrabold mb-4`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterAnimation}
                    className="inline-block"
                    animate={letter === "i" ? flipAnimation : null} // Apply flip only to 'i'
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
              <p className={`text-lg mb-4 text-gray-700 dark:text-gray-300`}>
                Full Stack Developer
              </p>
              <p className={`mb-8 text-gray-700 dark:text-gray-300`}>
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
              <p className="mb-8 text-gray-700 dark:text-gray-300">
                <em>
                  “Clean code is not just written for machines to execute, but
                  for humans to understand, maintain, and build upon.”
                </em>
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  — Author Unknown
                </span>
              </p>
            </div>

            {/* Social Media Icons - Now at the bottom */}
            <div className={`flex space-x-5 mt-8 lg:mt-0 lg:mb-8`}>
              <a
                href="https://github.com/syedhisham"
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-gray-300`}
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/syedhishamshah27"
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-gray-300`}
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://www.instagram.com/syedhishamshah/"
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-gray-300`}
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://wa.me/923038144158"
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-gray-300`}
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href={`https://discord.com/users/${discordId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={` hover:text-gray-300`}
              >
                <FaDiscord size={28} />
              </a>
            </div>
          </div>

          {/* Right Container */}
          <div className={`lg:w-3/5 lg:pl-12`}>
            <Element
              name="aboutMe"
              className="mb-12 relative z-10 text-gray-700 dark:text-gray-300"
            >
              <h1 className="awsomeTextColor font-bold text-2xl mb-3">
                About Me
              </h1>
              <p className={`mb-4`}>
                I am a passionate Full Stack Developer with a strong foundation
                in both front-end and back-end technologies. I enjoy turning
                complex problems into simple, beautiful, and intuitive designs.
                I have a keen interest in web development and always strive to
                learn new technologies and improve my skills.
              </p>
              <p>
                I focus on building robust, scalable applications with an
                emphasis on performance, maintainability, and user-centric
                design. I continuously explore emerging technologies and best
                practices to deliver efficient and impactful software solutions.
              </p>
            </Element>

            <Element name="experience" className="mb-12 relative z-1">
              <h1 className="awsomeTextColor font-bold text-2xl">Education</h1>
              <ul className="list-none space-y-3">
                <div
                  className={`flex justify-center hover:bg-gray-100 dark:hover:bg-white/10 gap-2 transition-all duration-150 ease-in-out p-5 rounded-md`}
                >
                  <p className="w-1/3 text-sm font-semibold awsomeIndigoColor">
                    2015 — 2017
                  </p>
                  <li className="w-full pl-3 md:pl-10 lg:pl-10">
                    <strong className="awsomeTextColor">
                      Secondary School Education
                    </strong>
                    <p className="text-gray-700 dark:text-gray-300">
                      Abbottabad Public School & College, Abbottabad, KPK,
                      Pakistan
                    </p>
                  </li>
                </div>

                <div
                  className={`flex justify-center hover:bg-gray-100 dark:hover:bg-white/10 gap-2 transition-all duration-150 ease-in-out p-5 rounded-md`}
                >
                  <p className="w-1/3 text-sm font-semibold awsomeIndigoColor">
                    2017 — 2019
                  </p>
                  <li className="w-full pl-3 md:pl-10 lg:pl-10">
                    <strong className="awsomeTextColor">
                      Higher Secondary Education
                    </strong>
                    <p className="text-gray-700 dark:text-gray-300">
                      Abbottabad Public School & College, Abbottabad, KPK,
                      Pakistan
                    </p>
                  </li>
                </div>
                <div
                  className={`flex justify-center hover:bg-gray-100 dark:hover:bg-white/10 gap-2 transition-all duration-150 ease-in-out p-5 rounded-md`}
                >
                  <p className="w-1/3 text-sm font-semibold awsomeIndigoColor">
                    2021 — 2025
                  </p>
                  <li className="w-full pl-3 md:pl-10 lg:pl-10">
                    <strong className="awsomeTextColor">
                      BS in Computer Science
                    </strong>
                    <p className="text-gray-700 dark:text-gray-300">
                      COMSATS University Islamabad
                    </p>
                  </li>
                </div>
              </ul>
            </Element>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
