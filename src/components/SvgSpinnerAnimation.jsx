import  { useEffect, useRef, useState } from "react";

const SvgSpinnerAnimation = () => {
  const [rotation, setRotation] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check scroll direction and adjust rotation
      if (currentScrollY > lastScrollY) {
        // Scrolling down (clockwise)
        setRotation((prevRotation) => prevRotation + 15);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up (counterclockwise)
        setRotation((prevRotation) => prevRotation - 15);
      }

      // Update last scroll position
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-10 top-20 hidden md:hidden lg:block">
      <svg
        ref={svgRef}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 300 300"
        style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.2s ease" }}
        xmlSpace="preserve"
      >
        {/* Central black circle */}
        <circle cx="150" cy="150" r="30" fill="black" />

        {/* Merged wings forming a circular shape */}
        <g>
          {Array.from({ length: 6 }).map((_, index) => {
            const angle = (index * 60 * Math.PI) / 180; // 60 degrees apart
            const outerX1 = 150 + 80 * Math.cos(angle); // Outer point 1
            const outerY1 = 150 + 80 * Math.sin(angle); // Outer point 1
            const outerX2 = 150 + 80 * Math.cos(angle + Math.PI / 6); // Outer point 2
            const outerY2 = 150 + 80 * Math.sin(angle + Math.PI / 6); // Outer point 2

            return (
              <path
                key={index}
                d={`M150,150 L${outerX1},${outerY1} A80,80 0 0,1 ${outerX2},${outerY2} Z`}
                fill={index % 2 === 0 ? "#A9A9A9" : "gray"} // Alternate between gray and dark gray
                style={{ transition: "fill 0.3s ease" }} // Smooth fill transition
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default SvgSpinnerAnimation;
