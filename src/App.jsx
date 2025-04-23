import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Projects />
      <Team />
      <Contact />
    </div>
  );
}

export default App;