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
            <li>Nextjs</li>
            <li>Supabase</li>
            <li>Openai</li>
          </div>
          <h1>{project.title}</h1>

          <p>{project.body}</p>
          <button>View Live</button>
        </div>
      </div>
      <div className="details">
        <h2>More Details</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="containers">
          <div className="container">
            <h3>Intro</h3>
            <svg
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
                  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z"
                  fill=""
                ></path>
              </g>
            </svg>
          </div>
          <div className="container">
            <h3>Story Behind this Project</h3>
            <svg
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
                  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z"
                  fill=""
                ></path>
              </g>
            </svg>
          </div>
          <div className="container">
            <h3>Struggles Faced</h3>
            <svg
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
                  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z"
                  fill=""
                ></path>
              </g>
            </svg>
          </div>
          <div className="container">
            <h3>Next Steps</h3>
            <svg
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
                  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z"
                  fill=""
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
