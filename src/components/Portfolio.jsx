import React from "react";
import PortfolioItem from "./PortfolioItem.jsx";
import projects from "../data/projects"; // Assuming projects.js is correctly imported

const Portfolio = () => {

  return (
    <div className='py-12'>
      <h2 className="m-4 text-4xl text-center font-bold hover:underline decoration-yellow-400 decoration-4 underline-offset-8 dark:text-yellow-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => ( // Removed useTrail and index from map
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
