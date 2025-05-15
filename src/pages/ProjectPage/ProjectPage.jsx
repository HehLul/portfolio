// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";

// import { getProject } from "../../services/projectService";
import useProject from "../../hooks/useProject";
import { useNavigate } from "react-router-dom";

function ProjectPage() {
  const { slug } = useParams();

  const { project, loading, error } = useProject(slug);
  const navigate = useNavigate();

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.body}</p>
    </div>
  );
}

export default ProjectPage;
