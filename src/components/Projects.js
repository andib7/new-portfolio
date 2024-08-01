import React from 'react';

function Projects({ onProjectHover }) {
  const projects = [
    {
      id: 1,
      name: 'Project Title 1',
      image: 'path/to/1.jpg',
      description: 'Description of the project.',
      link: 'link/to/project1',
      skills: ['React', 'CSS'],
    },
    {
      id: 2,
      name: 'Project Title 2',
      image: 'path/to/2.jpg',
      description: 'Description of the project.',
      link: 'link/to/project2',
      skills: ['JavaScript', 'Node.js'],
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => onProjectHover(project.skills)}
            onMouseLeave={() => onProjectHover(null)}
          >
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} className="project-image" />
            <p>{project.description}</p>
            <a href={project.link} className="button" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
