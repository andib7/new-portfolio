import React from 'react';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <h3>Project Title 1</h3>
          <img src="path/to/1.jpg" alt="Project 1" className="project-image" />
          <p>Description of the project.</p>
          <a href="link/to/project1" className="button">View Project</a>
        </div>
        <div className="project-card">
          <h3>Project Title 2</h3>
          <img src="path/to/2.jpg" alt="Project 2" className="project-image" />
          <p>Description of the project.</p>
          <a href="link/to/project2" className="button">View Project</a>
        </div>
        {/* Repeat for other projects */}
      </div>
    </div>
  );
}

export default Projects;
