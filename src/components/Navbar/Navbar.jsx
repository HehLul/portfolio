import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Salman.</h1>
      </Link>
      {/* <ul>
        <a href="">About me</a>
        <a href="">My Work</a>
        <a href="">Blog</a>
      </ul> */}
      <ul>
        <Link to="/">About me</Link>
        <Link to="/projects">My Work</Link>
        <Link to="/blog">Blog</Link>
      </ul>
      {/* <div className="buttons">
        <button>Lets Connect</button>
        <button>See My Work</button>
      </div> */}
    </div>
  );
}

export default Navbar;
