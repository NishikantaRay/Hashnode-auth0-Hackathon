import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Faq from "./pages/Faq";

/**
 * Renders the main App component.
 * @returns {JSX.Element} The App component.
 */
function App() {
  return (
    <>
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
