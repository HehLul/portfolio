import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar></Navbar>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
