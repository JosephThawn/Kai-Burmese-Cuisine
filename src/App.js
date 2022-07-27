import "./App.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import MainMenu from "./MainMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainMenu />

      <About />

      <Contact />
    </div>
  );
}

export default App;
