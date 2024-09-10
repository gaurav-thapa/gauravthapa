import Certification from "./components/Certification";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
// import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen p-2 sm:p-4 bg-gray-200">
      {/* <Navbar /> */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="basis-2/3 flex flex-col gap-5">
          <Intro />
          <Certification />
        </div>
        <div className="basis-1/3">
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default App;
