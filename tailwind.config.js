/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: ['awsomeTextColor', 'awsomeTextColorDark'],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #004e92, #000428)",
      },
      colors: {
        colorBlack: "#2e2e2e",
        colorSlate: "#3d72b4",
        colorLightSlate: "#16223e",
        gradientStart: "#004e92", 
        gradientEnd: "#000428",
      },
    },
  },
  plugins: [],
};
