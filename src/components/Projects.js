import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and CSS.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-commerce Platform",
    description: "An e-commerce website with a cart and payment system.",
    link: "https://your-ecommerce-link.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
