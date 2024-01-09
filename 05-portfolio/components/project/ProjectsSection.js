import React from "react";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const ProjectsSection = () => {
  const filteredProjects = getFeaturedProjects();

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button className="m-4 ml-0 bg-gradient-to-br from-blue-500 via-yellow-500 to-orange-500 p-4  text-black text-1xl font-bold rounded-full">
          Explore More Projects
        </button>
      </div>
    </>
  );
};

export default ProjectsSection;
