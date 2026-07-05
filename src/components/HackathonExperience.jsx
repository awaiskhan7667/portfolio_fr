import hackathonData from "../data/hackathonData";
import { IoBriefcaseOutline } from "react-icons/io5";
import HorizontalLine from "./HorizontalLine";

const HackathonExperience = () => {
  return (
    <>
      <div className="min-h-screen py-0 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Sticky Header */}
            <div className="lg:w-2/5 lg:pr-12 lg:sticky lg:top-72 lg:self-start">
              <div className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
                  Crafting Solutions Through Diverse Projects
                </h1>

                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Over the course of my journey, I have developed a wide range
                  of projects spanning various domains and technologies. Each
                  project challenged me to solve unique problems and refine my
                  skills in both frontend and backend development. From
                  individual initiatives to team collaborations, these
                  experiences have strengthened my ability to deliver effective,
                  user-centered solutions and continuously grow as a developer.
                </p>
              </div>
            </div>

            {/* Right Side - Scrollable Timeline */}
            <div className="lg:w-3/5 lg:pl-12">
              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700"></div>

                {/* Hackathon items */}
                {hackathonData.map((hackathon, index) => (
                  <div
                    key={hackathon.id}
                    className="relative mb-16 last:mb-0 group"
                  >
                    <div className="flex">
                      {/* Logo circle */}
                      <div className="relative z-10">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden mr-6 shadow-md border-2 border-white dark:border-gray-800 ${hackathon.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <img
                            src={hackathon.logoUrl}
                            alt={hackathon.logoAlt}
                            className="w-full h-full object-cover mix-blend-multiply"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8 pt-2 px-2 md:px-6 rounded-md group-hover:bg-gray-100 dark:group-hover:bg-white/10 transition-all duration-200">
                        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">
                          {hackathon.date}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                          {hackathon.name}
                        </h3>
                        <div className="text-gray-500 dark:text-gray-400 mb-3 flex items-center text-sm">
                          <IoBriefcaseOutline className="mr-1" />
                          {hackathon.projectType}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 group-hover:shadow-md transition-shadow duration-300">
                          {hackathon.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto"><HorizontalLine /></div> */}
    </>
  );
};

export default HackathonExperience;
