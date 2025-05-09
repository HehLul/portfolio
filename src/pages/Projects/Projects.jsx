import useProjects from "../../hooks/useProjects";
import "./Projects.css";

import { Navigate } from "react-router-dom";

function Projects() {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects.</p>;

  const handleClickProject = (projectId) => {
    console.log("You clicked on project:", projectId);
    // Navigate(`/projects/${projectId}`); // if using React Router
  };

  return (
    <div className="projects">
      <div className="featured">
        <h2>Featured</h2>
        <ul className="featured-projects">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="project"
              onClick={() => handleClickProject(project.id)}
            >
              <img src={project.image_path || "/pfp.jpg"} alt="" />
              <h3>{project.title}</h3>
              <p>{project.date_built}</p>
            </div>
          ))}
        </ul>
      </div>
      <div className="all">
        <div className="all-header">
          <h2>All Projects</h2>
          <ul className="tags">
            <li>Featured</li>
            <li>Archived</li>
            <li>In Progress</li>
            <li>SaaS</li>
            <li>Website</li>
            <li>Design</li>
            <li>Client</li>
            <li>Fullstack</li>
            <li>Tutorial</li>
          </ul>
        </div>
        <ul className="all-projects">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project"
              onClick={() => handleClickProject(project.id)}
            >
              <img src={project.image_path || "/pfp.jpg"} alt="" />
              <h3>{project.title}</h3>
              <p>{project.date_built}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
