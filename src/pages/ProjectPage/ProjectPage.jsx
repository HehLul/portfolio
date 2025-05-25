import "./ProjectPage.css";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useProject from "../../hooks/useProject";

//Componenets

function ProjectPage() {
  const { slug } = useParams();
  const { project, loading, error } = useProject(slug);
  const navigate = useNavigate();

  const handleVeiwLiveClicked = () => {
    window.open(project.demo_url);
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-center mt-12">Hmm...there seems to be an error</div>
    );
  }

  return (
    <div className="project-page">
      <svg
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
        width="36px"
        height="36px"
        viewBox="0 0 1024 1024"
        fill="#000000"
        class="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill=""
          ></path>
        </g>
      </svg>

      <div className="main">
        <img src={project.image_path} alt="" />

        <div className="text">
          <div className="tags">
            {project.technologies?.split(",").map((tech, index) => (
              <li key={index}>{tech.trim()}</li>
            ))}
          </div>
          <h1>{project.title}</h1>

          <p>{project.body}</p>
          <button onClick={handleVeiwLiveClicked}>View Live</button>
        </div>
      </div>
      <div className="details">
        <h2>More Details</h2>
      </div>
    </div>
  );
}

export default ProjectPage;
