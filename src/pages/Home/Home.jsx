import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="left">
        <img src="jacksonpark_pfp.jpg" />
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
          <button>See my work</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
