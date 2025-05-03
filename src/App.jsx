import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <main className="content">
        <Home />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
