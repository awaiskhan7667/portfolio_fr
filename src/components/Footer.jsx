import  { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import apiClient from "../lib/interceptor";


const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = () => {
  if (!formData.name || !formData.email) {
    toast.error("Please fill out both fields.");
    return;
  }

  toast.promise(
    apiClient.post("/api/hiringRequests/addRequest", formData),
    {
      loading: "Sending your request...",
      success: "Request submitted successfully!",
      error: null
    }
  ).then(() => {
    setFormData({ name: "", email: "" });
  });
};


  return (
    <footer
      className={`w-full text-gray-100 py-4 md:py-12 transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-[90%] mx-auto px-4 sm:px-6 py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-80 pb-8 border-b border-gray-300 dark:border-gray-500">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold awsomeTextColor">About Me</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              I'm a passionate developer focused on creating beautiful, functional web experiences. Let's build something amazing together.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/syedhisham"
                className="text-gray-700 dark:text-gray-300 transform hover:scale-110 transition-all duration-300"
                target="_blank"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/syedhishamshah27"
                className="text-gray-700 dark:text-gray-300 transform hover:scale-110 transition-all duration-300"
                target="_blank"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:syedhishamshah27@gmail.com"
                className="text-gray-700 dark:text-gray-300 transform hover:scale-110 transition-all duration-300"
                target="_blank"
              >
                <IoIosMail size={24} />
              </a>
              <a
                href="https://wa.me/+923038144158"
                className="text-gray-700 dark:text-gray-300 transform hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold awsomeTextColor">Get In Touch</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Have a project in mind? Let's talk!
            </p>
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-sm text-gray-700 dark:text-gray-200"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none text-sm text-gray-700 dark:text-gray-200"
              />
              <button
                onClick={handleSubmit}
                className="mt-2 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium text-sm transform transition-all duration-300 hover:translate-y-px hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 text-xs mr-2">Built with</span>
            <span className="text-xs bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
              React & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
