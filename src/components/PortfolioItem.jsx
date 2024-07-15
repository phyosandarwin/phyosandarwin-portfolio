import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useSpring, animated } from "react-spring";

const PortfolioItem = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const hoverProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      style={hoverProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group mt-5 rounded-xl border-2 border-gray-400 overflow-hidden dark:border-2 dark:border-gray-100 dark:shadow-gray-300 dark:shadow-md"
    >
        <div className="relative group m-4">
            <img
                src={project.imgURL}
                alt={project.title}
                className="w-full h-40 md:h-48 object-contain dark:bg-slate-50 rounded-xl"
            />
            <div className="p-4">
                <h3 className="text-center text-2xl mt-2 mb-2 md:mb-4 font-bold dark:text-white">
                    {project.title}
                </h3>
                <p className="text-left text-xs md:text-sm font-medium dark:text-white mb-4">
                    {project.details}
                </p>
                <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-md bg-slate-200 px-2 py-1 dark:bg-gray-500"
                    >
                      {item}
                    </span>
                  ))}
                </p>
                <div className="mt-3 flex items-center text-gray-500 text-xl ">
                    <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3 hover:text-yellow-400 dark:hover:text-white duration-300">
                      <FaGithub />
                    </a>
                    
                    <a href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-yellow-400 dark:hover:text-white duration-300">
                      <FaExternalLinkAlt />
                    </a>
                </div>
            </div>
        </div>
    </animated.div>
  );
};

export default PortfolioItem
