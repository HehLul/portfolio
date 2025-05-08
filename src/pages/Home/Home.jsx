// import { useNavigate } from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };
  return (
    <div className="home">
      <div className="left">
        <img src="bitmoji.jpg" />
        <h1>Hello! I'm Ahmed Salman</h1>
      </div>
      <div className="right">
        <h2>A Software Developer based in Ontario, Canada.</h2>
        <p>
          Passionate about building SaaS products and thriving in the startup
          world.
        </p>
        <div className="buttons">
          <button>Talk with me</button>

          <button onClick={handleClick}>See my work</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
